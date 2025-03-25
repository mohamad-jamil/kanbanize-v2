import { useContext } from "react";
import { DataContext } from "../context/dataContext";

export default function DeleteTaskModal({ task, setDeleteTaskModalOpen }) {
  const { setTasks } = useContext(DataContext);

  const handleDelete = async () => {
    await fetch(`http://localhost:5000/tasks/${task.id}`, {
      method: "DELETE",
    });

    setTasks((prevTasks) =>
      prevTasks.filter((prevTask) => prevTask.id !== task.id)
    );

    setDeleteTaskModalOpen(false);
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/50">
      <div className="bg-white w-1/6 rounded-md">
        <div className="flex items-center justify-between p-4">
          <h2 className="font-bold">Delete Task</h2>
          <button onClick={() => setDeleteTaskModalOpen(false)}>
            <img
              src="/cross.svg"
              alt="close icon"
              className="w-6 h-6 cursor-pointer"
            />
          </button>
        </div>
        <div className="w-full h-1 bg-black"></div>
        <div className="p-4">
          <p>Are you sure you want to delete column '{task.title}'?</p>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setDeleteTaskModalOpen(false)}
              className="border px-5 py-2 mt-2 rounded-full cursor-pointer text-white font-bold bg-[#808080] transition-all duration-300 ease-in-out"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="border px-5 py-2 mt-2 rounded-full cursor-pointer text-white font-bold bg-[#d11a2a] transition-all duration-300 ease-in-out"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
