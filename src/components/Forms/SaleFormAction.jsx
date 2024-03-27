import React, { useState, useEffect } from 'react';

const SaleFormAction = ({ onSave, sale, customersData, productsData }) => {
    const [formData, setFormData] = useState({
        customer: sale ? sale.customer : '',
        product: sale ? sale.product : '',
        qty: sale ? sale.qty : '',
        paymentType: sale ? sale.paymentType : '',
    });

    useEffect(() => {
        if (sale) {
            const selectedCustomer = customersData.find(customer => customer.fullname === sale.customer);
            if (selectedCustomer) {
                setFormData(prevState => ({ ...prevState, customer: selectedCustomer.fullname }));
            }
        }
    }, [sale, customersData]);

    useEffect(() => {
        if (sale) {
            const selectedProduct = productsData.find(product => product.title === sale.product);
            if (selectedProduct) {
                setFormData(prevState => ({ ...prevState, product: selectedProduct.title }));
            }
        }
    }, [sale, productsData]);

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
                        <label htmlFor="customer" className="mb-2">Customer:</label>
                        <select
                            name="customer"
                            id="customer"
                            value={formData.customer}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md px-3 py-2"
                        >
                            <option value="">Select a customer</option>
                            {customersData.map(customer => (
                                <option key={customer.id} value={customer.fullname}>{customer.fullname}</option>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        <label htmlFor="paymentType" className="mb-2">Payment Type:</label>
                        <input
                            type="text"
                            name="paymentType"
                            id="paymentType"
                            value={formData.paymentType}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="px-8 py-2 bg-gray-700 text-base text-white rounded-sm font-medium hover:bg-gray-900"
                        >
                            {!sale ? "ADD" : "Update"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SaleFormAction;
