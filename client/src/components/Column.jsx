import Task from "./Task";

export default function Column({ columnName, tasks }) {
  return (
    <section className="bg-white border border-[#dfe1e7] p-8 rounded-xl flex flex-col items-center w-1/8">
      <div className="text-black font-bold text-xl">{columnName}</div>
      <div className="bg-black w-9/10 h-1 my-3"></div>
      <div className="mt-4 flex flex-col gap-4 w-full">
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </div>
    </section>
  );
}
