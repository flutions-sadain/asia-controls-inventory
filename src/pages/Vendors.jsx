import React, { useState } from 'react';
import { vendorsData, productsData } from '../data/data';
import Table from '../components/Table';
import VendorFormAction from '../components/Forms/VendorFormAction';

const Vendors = () => {
    const [showForm, setShowForm] = useState(false);
    const [editingVendor, setEditingVendor] = useState(null);
    const [vendors, setVendors] = useState(vendorsData);

    const generateNewId = () => {
        const lastId = vendors[vendors.length - 1]?.id || 0;
        return lastId + 1;
    };

    const handleSave = (formData) => {
        if (editingVendor) {
            const updatedVendors = vendorsData.map(vendor => {
                if (vendor.id === editingVendor.id) {
                    return { ...vendor, ...formData };
                }
                return vendor;
            });
            setVendors(updatedVendors);
        } else {
            const newVendor = { id: generateNewId(), ...formData };
            setVendors([...vendors, newVendor])
        }
        setShowForm(false);
        setEditingVendor(null);
    };

    const handleEdit = (vendor) => {
        setEditingVendor(vendor);
        setShowForm(true);
    };

    const handleDelete = (data) => {
        setVendors(vendors.filter(vendor => vendor.id !== data.id));
    };

    return (
        <div className="p-6 mt-14 sm:ml-64">
            <div className="pb-2 border-b border-gray-200 flex justify-between items-center">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">{showForm ? "Add Vendor" : "Vendors"}</span>
                {showForm ? ("") : (
                    <button onClick={() => setShowForm(true)} className="px-3 py-2 bg-green-700 text-base text-white rounded-sm font-medium">Add Data</button>
                )}
            </div>
            {showForm ? (
                <VendorFormAction onSave={handleSave} vendor={editingVendor} productsData={productsData} />
            ) : (
                <>
                    <div className="mt-6 max-sm:mt-8 flex justify-between items-center flex-wrap">
                        <button className="px-3 py-2 bg-gradient-to-b from-gray-100 to-gray-300 text-base border border-gray-400 text-black rounded-sm font-medium">Print</button>
                        <div className="sm:inline-flex max-sm:-mt-6 sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                            <label htmlFor="Search" className="block text-sm font-medium mb-2">Search</label>
                            <input type="text" id="Search" className="py-3 px-4 block w-full border border-gray-400 rounded-sm text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Search Vendors" />
                        </div>
                    </div>
                    <Table data={vendors} columns={['#', 'Product', 'Name', 'Contact', 'Address']} actions={[{ label: 'Update', color: 'sky', onClick: handleEdit }, { label: 'Delete', color: 'red', onClick: handleDelete }]} />
                    <div className="mt-2 flex justify-between items-center flex-wrap">
                        <p className="text-base text-gray-700">Showing 1 to 1 of entries</p>
                        <div className="flex justify-end items-center gap-2">
                            <button className="text-base text-black font-normal">Previous</button>
                            <p className="px-3 py-2 bg-gradient-to-b from-gray-100 to-gray-300 text-base border border-gray-400 text-black rounded-sm font-medium">1</p>
                            <button className="text-base text-black font-normal">Next</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Vendors;
