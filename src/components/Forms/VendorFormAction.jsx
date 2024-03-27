import React, { useState, useEffect } from 'react';

const VendorFormAction = ({ onSave, vendor, productsData }) => {
    const [formData, setFormData] = useState({
        product: vendor ? vendor.product : '',
        name: vendor ? vendor.name : '',
        contact: vendor ? vendor.contact : '',
        address: vendor ? vendor.address : '',
    });

    useEffect(() => {
        if (vendor) {
            const selectedProduct = productsData.find(product => product.title === vendor.product);
            if (selectedProduct) {
                setFormData(prevState => ({ ...prevState, product: selectedProduct.title }));
            }
        }
    }, [vendor, productsData]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="md:p-2 mt-4">
            <div className="max-sm:mt-8 flex justify-center items-center ">
                <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg drop-shadow-lg lg:w-4/5 xl:w-2/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        <label htmlFor="product" className="mb-2">Product:</label>
                        <select
                            name="product"
                            id="product"
                            value={formData.product}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md px-3 py-2"
                        >
                            <option value="">Select a product</option>
                            {productsData.map(product => (
                                <option key={product.id} value={product.title}>{product.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        <label htmlFor="name" className="mb-2">Full Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        <label htmlFor="contact" className="mb-2">Contact:</label>
                        <input
                            type="text"
                            name="contact"
                            id="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        <label htmlFor="address" className="mb-2">Address:</label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="px-8 py-2 bg-gray-700 text-base text-white rounded-sm font-medium hover:bg-gray-900"
                        >
                            {!vendor ? "ADD" : "Update"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VendorFormAction;
