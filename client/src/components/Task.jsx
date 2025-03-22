export default function Task({ task }) {
  return (
    <div className="w-full h-full border-2 rounded-xl p-4">
      <h4 className="text-xs">ID-{task.id.toString().padStart(4, "0")}</h4>
      <h3 className="text-lg font-bold">{task.title}</h3>
      <p className="text-sm font-medium">{task.description}</p>
    </div>
  );
}
