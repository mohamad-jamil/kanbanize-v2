import { useState } from "react";

import DeleteTaskModal from "./DeleteTaskModal";
import EditTaskModal from "./EditTaskModal";

export default function Task({ task }) {
  const [deleteTaskModalOpen, setDeleteTaskModalOpen] = useState(false);
  const [editTaskModalOpen, setEditTaskModalOpen] = useState(false);

  const handleClickEdit = () => {
    setEditTaskModalOpen(true);
  };

  const handleClickDelete = () => {
    setDeleteTaskModalOpen(true);
  };

  return (
    <div className="w-full h-30 border-2 rounded-xl p-4 flex flex-col overflow-hidden">
      <div className="flex justify-between">
        <h4 className="text-xs">ID-{task.id.toString().padStart(4, "0")}</h4>
        <div className="flex gap-2">
          <button onClick={handleClickEdit}>
            <img
              src="/edit.svg"
              alt="close icon"
              className="w-4 h-4 cursor-pointer"
            />
          </button>
          <button onClick={handleClickDelete}>
            <img
              src="/bin.svg"
              alt="close icon"
              className="w-4 h-4 cursor-pointer"
            />
          </button>
        </div>
      </div>
      <h3 className="text-lg font-bold line-clamp-1">{task.title}</h3>
      <p className="text-sm font-medium line-clamp-2">{task.description}</p>
      {editTaskModalOpen && (
        <EditTaskModal
          task={task}
          setEditTaskModalOpen={setEditTaskModalOpen}
        />
      )}
      {deleteTaskModalOpen && (
        <DeleteTaskModal
          task={task}
          setDeleteTaskModalOpen={setDeleteTaskModalOpen}
        />
      )}
    </div>
  );
}
