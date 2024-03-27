import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
};

  return (
    <div className="md:p-2 md:my-40 flex justify-center items-center ">
            <div className="max-sm:mt-8 drop-shadow-lg bg-white">
                  <div className="bg-gray-300 py-4 px-4">
                    <h2 className="text-xl font-semibold">Login</h2>
                  </div>
                <form onSubmit={handleSubmit} className="p-6 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        <label htmlFor="userName" className="mb-2">User Name:</label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            // value={formData.userName}
                            className="border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        <label htmlFor="clospasswordingQty" className="mb-2">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            // value={formData.password}
                            className="border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                    <div className="">
                        <button
                            type="submit"
                            className="px-8 py-2 bg-gray-700 text-base text-white rounded-sm font-medium hover:bg-gray-900"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Login