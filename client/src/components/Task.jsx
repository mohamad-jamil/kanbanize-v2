export default function Task({ task }) {
  return (
    <div className="w-full h-30 border-2 rounded-xl p-4 flex flex-col overflow-hidden">
      <h4 className="text-xs">ID-{task.id.toString().padStart(4, "0")}</h4>
      <h3 className="text-lg font-bold line-clamp-1">{task.title}</h3>
      <p className="text-sm font-medium line-clamp-2">{task.description}</p>
    </div>
  );
}
