import { useState } from "react";

export default function AddTaskModal({
  setAddTaskModalOpen,
  columns,
  tasks,
  setTasks,
}) {
  const [column, setColumn] = useState("Backlog");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const getId = () => {
    return "ID-" + (tasks.length + 1).toString().padStart(4, "0");
  };

  const handleCloseModal = () => {
    setAddTaskModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks([
      ...tasks,
      {
        id: getId(),
        task: title,
        description: description,
        category: column,
      },
    ]);

    setAddTaskModalOpen(false);
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/50">
      <div className="bg-white w-1/6 rounded-md">
        <div className="flex items-center justify-between p-4">
          <h2 className="font-bold">Add Task</h2>
          <button onClick={handleCloseModal}>
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
            <label htmlFor="id" className="text-sm font-medium text-gray-700">
              ID
            </label>
            <input
              type="text"
              name="id"
              value={getId()}
              disabled
              className="mt-1 p-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="category"
              className="text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              name="category"
              onChange={(e) => setColumn(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {columns.map((column) => (
                <option key={column} value={column}>
                  {column}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              type="text"
              name="description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="border px-5 py-2 mt-2 rounded-full cursor-pointer text-white font-bold bg-[#1868db] hover:bg-[#1868db] transition-all duration-300 ease-in-out"
          >
            Add task
          </button>
        </form>
      </div>
    </div>
  );
}
