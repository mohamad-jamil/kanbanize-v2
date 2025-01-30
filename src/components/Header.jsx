export default function Header() {
  return (
    <header className="bg-white flex items-center justify-between px-6 py-4 font-mono">
      <div className="flex items-center gap-2">
        <img src="/vite.svg" alt="logo" />
        <h1 className="font-black text-2xl text-black">KanbanizeV2</h1>
      </div>
      <button className="border px-5 py-2 rounded-full cursor-pointer text-white font-bold bg-[#1868db] hover:bg-[#1868db] transition-all duration-300 ease-in-out">
        + Add Task
      </button>
    </header>
  );
}
