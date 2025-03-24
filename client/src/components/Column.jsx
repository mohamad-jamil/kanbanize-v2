import { useState } from "react";
import Task from "./Task";
import DeleteColumnModal from "./DeleteColumnModal";

export default function Column({ column, tasks }) {
  const [deleteColumnModalOpen, setDeleteColumnModalOpen] = useState(false);

  const handleClick = () => {
    setDeleteColumnModalOpen(true);
  };

  return (
    <section className="bg-white border border-[#dfe1e7] p-8 rounded-xl flex flex-col items-center w-1/8">
      <div className="flex gap-2">
        <div className="text-black font-bold text-xl">{column.category}</div>
        <button onClick={handleClick}>
          <img
            src="/bin.svg"
            alt="close icon"
            className="w-6 h-6 cursor-pointer"
          />
        </button>
      </div>
      <div className="bg-black w-9/10 h-1 my-3"></div>
      <div className="mt-4 flex flex-col gap-4 w-full">
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </div>
      {deleteColumnModalOpen && (
        <DeleteColumnModal
          column={column}
          setDeleteColumnModalOpen={setDeleteColumnModalOpen}
        />
      )}
    </section>
  );
}
