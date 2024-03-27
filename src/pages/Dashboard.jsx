import React from 'react'

const Dashboard = () => {
    return (
        <div class="p-6 mt-14 sm:ml-64">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <div className="bg-[#FFE2E5] p-8 rounded-lg">
                    <h1 className="text-xl text-gray-800 font-bold text-center">3</h1>
                    <h1 className="text-xl text-gray-800 font-bold text-center">Products</h1>
                </div>
                <div className="bg-[#FFF4DE] p-8 rounded-lg">
                    <h1 className="text-xl text-gray-800 font-bold text-center">1</h1>
                    <h1 className="text-xl text-gray-800 font-bold text-center">Vendors</h1>
                </div>
                <div className="bg-[#DCFCE7] p-8 rounded-lg">
                    <h1 className="text-xl text-gray-800 font-bold text-center">1</h1>
                    <h1 className="text-xl text-gray-800 font-bold text-center">Purchase</h1>
                </div>
                <div className="bg-[#F3E8FF] p-8 rounded-lg">
                    <h1 className="text-xl text-gray-800 font-bold text-center">1</h1>
                    <h1 className="text-xl text-gray-800 font-bold text-center">Customers</h1>
                </div>
                <div className="bg-[#e8fdff] p-8 rounded-lg">
                    <h1 className="text-xl text-gray-800 font-bold text-center">1</h1>
                    <h1 className="text-xl text-gray-800 font-bold text-center">Sales</h1>
                </div>
            </div>
        </div>
    )
}

export default Dashboard