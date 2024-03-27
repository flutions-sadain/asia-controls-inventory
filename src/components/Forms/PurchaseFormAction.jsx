import React, { useState, useEffect } from 'react';

const PurchaseFormAction = ({ onSave, purchase, vendorsData, productsData }) => {
    const [formData, setFormData] = useState({
        vendor: purchase ? purchase.vendor : '',
        product: purchase ? purchase.product : '',
        qty: purchase ? purchase.qty : '',
    });

    useEffect(() => {
        if (purchase) {
            const selectedVendor = vendorsData.find(vendor => vendor.name === purchase.vendor);
            if (selectedVendor) {
                setFormData(prevState => ({ ...prevState, vendor: selectedVendor.title }));
            }
        }
    }, [purchase, vendorsData]);

    useEffect(() => {
        if (purchase) {
            const selectedProduct = productsData.find(product => product.title === purchase.product);
            if (selectedProduct) {
                setFormData(prevState => ({ ...prevState, product: selectedProduct.title }));
            }
        }
    }, [purchase, productsData]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const currentDate = new Date().toISOString().slice(0, 16);
        onSave({ ...formData, date: currentDate });
    };

    return (
        <div className="md:p-2 mt-4">
            <div className="max-sm:mt-8 flex justify-center items-center ">
                <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg drop-shadow-lg lg:w-4/5 xl:w-2/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        <label htmlFor="vendor" className="mb-2">Vendor:</label>
                        <select
                            name="vendor"
                            id="vendor"
                            value={formData.vendor}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md px-3 py-2"
                        >
                            <option value="">Select a vendor</option>
                            {vendorsData.map(vendor => (
                                <option key={vendor.id} value={vendor.name}>{vendor.name}</option>
                            ))}
                        </select>
                    </div>
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
                        <label htmlFor="qty" className="mb-2">Quantity:</label>
                        <input
                            type="text"
                            name="qty"
                            id="qty"
                            value={formData.qty}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="px-8 py-2 bg-gray-700 text-base text-white rounded-sm font-medium hover:bg-gray-900"
                        >
                            {!purchase ? "ADD" : "Update"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PurchaseFormAction;
