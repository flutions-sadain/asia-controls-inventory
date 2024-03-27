import React from 'react';

const Table = ({ data, columns, actions }) => {
  const hasImage = data.some(item => item.image);

  return (
    <div className="relative overflow-x-auto mt-4">
      <table className="w-full border-collapse border border-slate-400 text-sm text-left rtl:text-right text-gray-800">
        <thead className="text-xs text-black uppercase">
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="px-4 py-4 border">
                {column}
              </th>
            ))}
            {hasImage && <th className="px-4 py-4 border">Image</th>}
            {actions && <th className="px-4 py-4 border">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border">
              {Object.entries(item).map(([key, value], index) => (
                <td key={index} className="px-4 py-2 border">
                  {key === 'image' ? <img src={value} alt="Product" className="w-20 h-auto" /> : value}
                </td>
              ))}
              {actions && (
                <td className="px-6 py-4 border">
                  <div className="flex justify-start items-center gap-2">
                    {actions.map((action, index) => (
                      <button key={index} className={`px-3 py-2 bg-${action.color}-700 text-base text-white rounded-sm font-medium`}>
                        {action.label}
                      </button>
                    ))}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
        <tfoot className="text-xs text-black uppercase">
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="px-4 py-4 border">
                {column}
              </th>
            ))}
            {hasImage && <th className="px-4 py-4 border">Image</th>}
            {actions && <th className="px-4 py-4 border">Actions</th>}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
