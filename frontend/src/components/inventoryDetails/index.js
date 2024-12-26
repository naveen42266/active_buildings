import React, { useState } from "react";

const InventoryDetails = ({ details, handleDeleteInventory }) => {
    const [filters, setFilters] = useState({
        filterBy: "vendorName",
        value: "",
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const filteredData = details?.filter((item) => {
        const matchVendor =
            filters.filterBy === "vendorName" && filters.value
                ? item.vendorName.toLowerCase().includes(filters.value.toLowerCase())
                : true;
        const matchDate =
            filters.filterBy === "date" && filters.value
                ? item.date.includes(filters.value)
                : true;
        return matchVendor && matchDate;
    });

    return (
        <div className="container mx-auto p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Inventory Details
            </h2>

            {/* Filter Section */}
            <div className="mb-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <select
                    name="filterBy"
                    value={filters.filterBy}
                    onChange={handleFilterChange}
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="vendorName">Filter by Vendor Name</option>
                    <option value="date">Filter by Date</option>
                </select>
                {filters.filterBy === "vendorName" ? (
                    <input
                        type="text"
                        name="value"
                        placeholder="Enter Vendor Name"
                        value={filters.value}
                        onChange={handleFilterChange}
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                ) : (
                    <input
                        type="date"
                        name="value"
                        value={filters.value}
                        onChange={handleFilterChange}
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                )}
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white table-auto border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium">
                                Item Code
                            </th>
                            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium">
                                Name
                            </th>
                            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium">
                                Price
                            </th>
                            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium">
                                Vendor Name
                            </th>
                            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium">
                                Date
                            </th>
                            <th className="px-6 py-3 border-b border-gray-300 text-center text-sm font-medium">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData?.length && filteredData?.length > 0 ? (
                            filteredData.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="px-6 py-4 border-b border-gray-300 text-gray-700">
                                        {item.itemCode}
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-300 text-gray-700">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-300 text-gray-700">
                                        ${item.price}
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-300 text-gray-700">
                                        {item.vendorName}
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-300 text-gray-700">
                                        {item.date}
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-300 text-center">
                                        <button
                                            onClick={() => handleDeleteInventory(item._id)}
                                            className="text-red-600 hover:text-red-800"
                                            aria-label="Delete"
                                        >
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe6mWdeAA8OZWyVmunR-PmOX5cE_doxknVJA&s"
                                                alt="Delete"
                                                className="inline-block w-5 h-5"
                                            />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="px-6 py-4 text-center text-gray-500 border-b border-gray-300"
                                >
                                    No results found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InventoryDetails;
