export default function Header({ setAddTaskModalOpen }) {
  const openAddTaskModal = () => {
    setAddTaskModalOpen(true);
  };

  return (
    <header className="bg-white flex items-center justify-between px-6 py-4 border-b-1 border-b-[#dfe1e7]">
      <div className="flex items-center gap-2">
        <img src="/vite.svg" alt="logo" />
        <h1 className="font-bold text-2xl text-black">KanbanizeV2</h1>
      </div>
      <div className="flex gap-4">
        <button className="border px-5 py-2 rounded-full cursor-pointer text-white font-bold bg-[#1868db] hover:bg-[#1868db] transition-all duration-300 ease-in-out">
          + Add Column
        </button>
        <button
          className="border px-5 py-2 rounded-full cursor-pointer text-white font-bold bg-[#1868db] hover:bg-[#1868db] transition-all duration-300 ease-in-out"
          onClick={openAddTaskModal}
        >
          + Add Task
        </button>
      </div>
    </header>
  );
}
