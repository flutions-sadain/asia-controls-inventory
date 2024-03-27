import React, { useState } from 'react';

const ProductFormAction = ({ onSave, product }) => {
    const [formData, setFormData] = useState({
        title: product ? product.title : '',
        productCode: product ? product.productCode : '',
        details: product ? product.details : '',
        openingQty: product ? product.openingQty : '',
        closingQty: product ? product.closingQty : '',
        image: product ? product.image : null,
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = e => {
        const file = e.target.files[0];
        setFormData({ ...formData, image: file });
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
                        <label htmlFor="title" className="mb-2">Title:</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        <label htmlFor="productCode" className="mb-2">Product Code:</label>
                        <input
                            type="text"
                            name="productCode"
                            id="productCode"
                            value={formData.productCode}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        <label htmlFor="details" className="mb-2">Details:</label>
                        <textarea
                            name="details"
                            id="details"
                            value={formData.details}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md px-3 py-2"
                        ></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        <label htmlFor="openingQty" className="mb-2">Opening Qty:</label>
                        <input
                            type="text"
                            name="openingQty"
                            id="openingQty"
                            value={formData.openingQty}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        <label htmlFor="closingQty" className="mb-2">Closing Quantity:</label>
                        <input
                            type="text"
                            name="closingQty"
                            id="closingQty"
                            value={formData.closingQty}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        <label htmlFor="image" className="mb-2">Image:</label>
                        <input
                            type="file"
                            name="image"
                            id="image"
                            onChange={handleImageChange}
                            className="border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                    <div className="">
                        <button
                            type="submit"
                            className="px-8 py-2 bg-gray-700 text-base text-white rounded-sm font-medium hover:bg-gray-900"
                        >
                            {!product ? "ADD" : "Update"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductFormAction;
