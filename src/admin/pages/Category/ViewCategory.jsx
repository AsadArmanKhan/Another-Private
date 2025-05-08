import { FaArrowLeft, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ViewCategory() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Title & Add Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Category / View</h1>
        <Link to={"/admin/category/add"} >
          <button className="cursor-pointer flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">
            <FaPlus />
            Add Category
          </button>
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
        <table className="min-w-full bg-white text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 font-semibold text-gray-700">ID</th>
              <th className="py-3 px-4 font-semibold text-gray-700">NAME</th>
              <th className="py-3 px-4 font-semibold text-gray-700">SLUG</th>
              <th className="py-3 px-4 font-semibold text-gray-700">IMAGE</th>
              <th className="py-3 px-4 font-semibold text-gray-700">STATUS</th>
              <th className="py-3 px-4 font-semibold text-gray-700">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr className="border-t hover:bg-gray-50">
              <td className="py-3 px-4">1</td>
              <td className="py-3 px-4">Electronics</td>
              <td className="py-3 px-4">electronics</td>
              <td className="py-3 px-4">-</td>
              <td className="py-3 px-4 text-green-600 font-medium">Active</td>
              <td className="py-3 px-4 flex items-center gap-3 text-yellow-600">
                <FaEdit className="cursor-pointer" />
                <span className="text-black">Delete</span>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="border-t hover:bg-gray-50">
              <td className="py-3 px-4">2</td>
              <td className="py-3 px-4">Clothing</td>
              <td className="py-3 px-4">clothing</td>
              <td className="py-3 px-4">-</td>
              <td className="py-3 px-4 text-green-600 font-medium">Active</td>
              <td className="py-3 px-4 flex items-center gap-3 text-yellow-600">
                <FaEdit className="cursor-pointer" />
                <span className="text-black">Delete</span>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="border-t hover:bg-gray-50">
              <td className="py-3 px-4">3</td>
              <td className="py-3 px-4">Home Appliances</td>
              <td className="py-3 px-4">home-appliances</td>
              <td className="py-3 px-4">-</td>
              <td className="py-3 px-4 text-green-600 font-medium">Active</td>
              <td className="py-3 px-4 flex items-center gap-3 text-yellow-600">
                <FaEdit className="cursor-pointer" />
                <span className="text-black">Delete</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
