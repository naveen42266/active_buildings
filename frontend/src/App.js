import './App.css';
import InventoryForm from './components/inventoryForm';
import InventoryDetails from './components/inventoryDetails';
import React, { useState, useEffect } from "react";
import { addInventory, getAllInventory, getLastItemCode, deleteInventory } from "./services";
import Header from './components/header';

function App() {
  const [data, setData] = useState();
  const [lastItemCode, setLastItemCode] = useState();
  async function handleGetLastItemCode() {
    try {
      let response = await getLastItemCode(); // Fetch last item code
      setLastItemCode(response?.lastItemCode || 0); // Default to 0 if not available
      console.log(lastItemCode)
      // setFormData({ ...formData, itemCode: `${Number(lastItemCode) + 1}` }); // Increment and set
    } catch (error) {
      console.error("Failed to fetch last item code:", error);
    }
  }

  async function handleGetAll() {
    try {
      let response = await getAllInventory();
      setData(response)
    } catch (error) {
      console.error("Failed to fetch all items:", error);
    }
  }

  async function handleAdd(item) {
    try {
      let response = await addInventory(item);
      handleGetAll();
      handleGetLastItemCode();
      // setData(response)
    } catch (error) {
      console.error("Failed to fetch all items:", error);
    }
  }

  async function handleDeleteInventory(id) {
    try {
      const result = await deleteInventory(id);
      console.log(result.message);
      handleGetAll();
      handleGetLastItemCode();
      // Update local data
      // setInventoryData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Failed to delete inventory:", err);
    }
  }

  console.log(lastItemCode, "lastItemCode")

  useEffect(() => {
    handleGetLastItemCode();
    handleGetAll();
  }, [])
  return (
    <div>
      <Header />
      <div className='space-y-4'>
        <InventoryForm itemCode={lastItemCode + 1} handleAddInventory={(item) => handleAdd(item)} />
        <InventoryDetails details={data} handleDeleteInventory={(id) => handleDeleteInventory(id)} />
      </div>
    </div>
  );
}

export default App;
