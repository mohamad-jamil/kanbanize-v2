import { useState, useContext } from "react";
import { DataContext } from "../context/dataContext";

export default function EditColumnModal({ column, setEditColumnModalOpen }) {
  const [category, setCategory] = useState(column.category);
  const [clickedDeleteOnce, setClickedDeleteOnce] = useState(false);

  const { setColumns } = useContext(DataContext);

  const handleConfirmEdit = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:5000/columns/${column.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: category,
      }),
    });

    setColumns((prevColumns) => {
      const newColumns = [
        ...prevColumns.filter((col) => col.id !== column.id),
        { ...column, category },
      ];

      return newColumns.sort((a, b) => a.id - b.id);
    });

    setEditColumnModalOpen(false);
  };

  const handleClickDelete = async (e) => {
    e.preventDefault();

    if (!clickedDeleteOnce) {
      setClickedDeleteOnce(true);
    } else {
      await fetch(`http://localhost:5000/columns/${column.id}`, {
        method: "DELETE",
      });

      setColumns((prevColumns) =>
        prevColumns.filter((col) => col.id != column.id)
      );

      setEditColumnModalOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/50">
      <div className="bg-white w-1/6 rounded-md">
        <div className="flex items-center justify-between p-4">
          <h2 className="font-bold">Edit Column</h2>
          <button onClick={() => setEditColumnModalOpen(false)}>
            <img
              src="/cross.svg"
              alt="close icon"
              className="w-6 h-6 cursor-pointer"
            />
          </button>
        </div>
        <div className="w-full h-1 bg-black"></div>
        <form className="flex flex-col p-4 gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="category"
              className="text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <input
              type="text"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex w-full gap-4">
            <button
              onClick={handleClickDelete}
              className="border px-5 py-2 mt-2 w-1/2 rounded-full cursor-pointer text-white font-bold bg-[#d11a2a]"
            >
              {clickedDeleteOnce ? "Are you sure?" : "Delete"}
            </button>
            <button
              onClick={handleConfirmEdit}
              className="border px-5 py-2 mt-2 w-1/2 rounded-full cursor-pointer text-white font-bold bg-[#1868db]"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
