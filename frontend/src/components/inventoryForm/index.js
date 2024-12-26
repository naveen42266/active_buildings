import React, { useState, useEffect } from "react";

const InventoryForm = ({ itemCode, handleAddInventory }) => {
    const [formData, setFormData] = useState({
        itemCode: itemCode,
        name: "",
        price: "",
        vendorName: "",
        date: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddInventory(formData);
        setFormData({
            itemCode: "",
            name: "",
            price: "",
            vendorName: "",
            date: "",
        });
    };

    const handleCancel = () => {
        setFormData({
            name: "",
            price: "",
            vendorName: "",
            date: "",
        });
    };

    useEffect(() => {
        if (itemCode) {
            setFormData({ ...formData, itemCode: itemCode });
        }
    }, [itemCode]);

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Inventory Form</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <div>
                    <label htmlFor="itemCode" className="block text-sm font-medium text-gray-600">
                        Item Code
                    </label>
                    <input
                        type="text"
                        id="itemCode"
                        name="itemCode"
                        disabled
                        value={formData?.itemCode || itemCode || 1}
                        className="mt-2 block w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter item name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-600">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Enter price"
                        value={formData.price}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="vendorName" className="block text-sm font-medium text-gray-600">
                        Vendor Name
                    </label>
                    <input
                        type="text"
                        id="vendorName"
                        name="vendorName"
                        placeholder="Enter vendor name"
                        value={formData.vendorName}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-600">
                        Date
                    </label>
                    <div className="relative mt-2">
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                        {/* <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8 7V3m8 4V3m-9 9h10M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z"
                                />
                            </svg>
                        </span> */}
                    </div>
                </div>

                <div className="flex justify-between mt-4">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InventoryForm;
