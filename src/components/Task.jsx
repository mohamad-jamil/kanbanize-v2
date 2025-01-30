export default function Task({ task }) {
  return (
    <div className="w-full h-full border-2 rounded-xl p-4">
      <h3 className="text-lg font-bold">{task.task}</h3>
      <p className="text-sm font-medium">{task.description}</p>
    </div>
  );
}
