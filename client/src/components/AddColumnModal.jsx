import { useState, useContext } from "react";
import { DataContext } from "../context/dataContext";

export default function AddColumnModal({ setAddColumnModalOpen }) {
  const [category, setCategory] = useState("");

  const { columns, setColumns } = useContext(DataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextColId = await fetch("http://localhost:5000/next-column-id");
    const nextColIdJson = await nextColId.json();

    await fetch("http://localhost:5000/columns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: category,
      }),
    });

    const newColumn = await fetch(
      `http://localhost:5000/columns/${nextColIdJson.next_id}`
    );
    const newColumnJson = await newColumn.json();
    setColumns((prevColumns) => [...prevColumns, newColumnJson]);

    setAddColumnModalOpen(false);
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/50">
      <div className="bg-white w-1/6 rounded-md">
        <div className="flex items-center justify-between p-4">
          <h2 className="font-bold">Add Column</h2>
          <button onClick={() => setAddColumnModalOpen(false)}>
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
          <button
            onClick={handleSubmit}
            className="border px-5 py-2 mt-2 rounded-full cursor-pointer text-white font-bold bg-[#1868db] hover:bg-[#1868db] transition-all duration-300 ease-in-out"
          >
            Add column
          </button>
        </form>
      </div>
    </div>
  );
}
