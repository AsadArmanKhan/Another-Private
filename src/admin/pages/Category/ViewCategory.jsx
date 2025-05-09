import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaArrowLeft, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MainContext } from "../../../Context";

function ViewCategory() {

  const { API_BASE_URL, CATEGORY_URL } = useContext(MainContext);
  const [Categories, setCategories] = useState([]);




  function getCategory() {
    axios.get(API_BASE_URL + CATEGORY_URL).then(
      (response) => {
        if (response.data.flag === 1) {
          setCategories(response.data.categorise)
          // console.log(response.data.categorise);
        }
      }
    ).catch(
      (error) => {
        setCategories([]);
      }
    )
  }

  useEffect(
    () => {
      getCategory()
    }, []
  )
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
          <tbody className="text-gray-600">
            {Array.isArray(Categories) &&
              Categories.map((cat, index) => (
                <tr key={index} className="shadow hover:bg-gray-50">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">{cat.name}</td>
                  <td className="p-4">{cat.slug}</td>
                  <td className="p-4">
                    <img width="25px" src={cat.image || null} alt={cat.name || "Category"} />
                  </td>
                  <button className="p-3 text-white bg-amber-400 rounded-2xl">
                    {
                      cat.status === true ?
                        "Active"
                        :
                        "Inactive"
                    }
                  </button>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewCategory;