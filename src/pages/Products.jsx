import React, { useState } from 'react';
import { productsData } from '../data/data';
import { Table } from '../components';
import ProductFormAction from '../components/Forms/ProductFormAction';

const Products = () => {
    const [showForm, setShowForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [products, setProducts] = useState(productsData);

    const generateNewId = () => {
        const lastId = products[products.length - 1]?.id || 0;
        return lastId + 1;
    };

    const handleSave = (formData) => {
        if (editingProduct) {
            const updatedProducts = productsData.map(product => {
                if (product.id === editingProduct.id) {
                    return { ...product, ...formData };
                }
                return product;
            });
            setProducts(updatedProducts);
        } else {
            const newProduct = { id: generateNewId(), ...formData };
            setProducts([...products, newProduct]);
        }
        setShowForm(false);
        setEditingProduct(null);
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
        setShowForm(true);
    };

    const handleDelete = (data) => {
        setProducts(products.filter(product => product.id!== data.id));
    };

    return (
        <div className="p-6 mt-14 sm:ml-64">
            <div className="pb-2 border-b border-gray-200 flex justify-between items-center">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">{showForm ? "Add Product" : "Products"}</span>
                {showForm ? ("") : (
                    <button onClick={() => setShowForm(true)} className="px-3 py-2 bg-green-700 text-base text-white rounded-sm font-medium">Add Data</button>
                )}
            </div>
            {showForm ? (
                <ProductFormAction onSave={handleSave} product={editingProduct} />
            ) : (
                <>
                    <div className="mt-6 max-sm:mt-8 flex justify-between items-center flex-wrap">
                        <button className="px-3 py-2 bg-gradient-to-b from-gray-100 to-gray-300 text-base border border-gray-400 text-black rounded-sm font-medium">Print</button>
                        <div className="sm:inline-flex max-sm:-mt-6 sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                            <label htmlFor="Search" className="block text-sm font-medium mb-2">Search</label>
                            <input type="text" id="Search" className="py-3 px-4 block w-full border border-gray-400 rounded-sm text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Search Products" />
                        </div>
                    </div>
                    <Table data={products} columns={['#', 'Title', 'Product Code', 'Details', 'Opening Qty', 'Closing Qty']} actions={[{ label: 'Update', color: 'sky', onClick: handleEdit }, { label: 'Delete', color: 'red', onClick: handleDelete }, { label: 'Inventory', color: 'gray' }]} />
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

export default Products;
