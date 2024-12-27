const express = require("express");
const mongoose = require("mongoose");
const { getDatabase } = require("../db");

const router = express.Router();

// Add a new inventory item
router.post("/add", async (req, res) => {
      try {
        const { itemCode, name, price, vendorName, date } = req.body;

        const db = getDatabase(); // Access the database
        const result = await db.collection("inventory").insertOne({
          itemCode,
          name,
          price,
          vendorName,
          date: date,
        });

        res.status(201).json({ message: "Inventory item added successfully" });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to add inventory item" });
      }

    // try {
    //     const userId = req.userId; // Extracted from the token
    //     const database = getDatabase();
    //     const result = await database.collection(COLLECTION_NAME).find({ userId }).toArray();
    //     res.send(result);
    // } catch (error) {
    //     console.error("Error fetching notes:", error);
    //     res.status(500).json({ error: "Internal Server Error" });
    // }
});

// Get all inventory items
router.get("/all", async (req, res) => {
    try {
        const db = getDatabase(); // Access the database
        const items = await db.collection("inventory").find().toArray();

        res.status(200).json(items);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch inventory items" });
    }
});

// Get the last itemCode
router.get("/last-item-code", async (req, res) => {
    try {
        const db = getDatabase(); // Access the database
        const lastItem = await db
            .collection("inventory")
            .find()
            .sort({ itemCode: -1 }) // Sort by itemCode in descending order
            .limit(1) // Get the first document
            .toArray();

        const lastItemCode = lastItem.length > 0 ? lastItem[0].itemCode : 0;

        res.status(200).json({ lastItemCode });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch last item code" });
    }
});


// Delete an inventory item by ID
router.delete("/delete/:id", async (req, res) => {
    try {
      const { id } = req.params; // Get the ID from the request parameters
      const db = getDatabase(); // Access the database
  
      // Attempt to delete the item from the database
      const result = await db.collection("inventory").deleteOne({ _id: new mongoose.Types.ObjectId(id) });
  
      // Check if the item was deleted
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "Inventory item not found" });
      }
  
      res.status(200).json({ message: "Inventory item deleted successfully" });
    } catch (err) {
      console.error("Error deleting inventory item:", err);
      res.status(500).json({ message: "Failed to delete inventory item" });
    }
  });


module.exports = router;
