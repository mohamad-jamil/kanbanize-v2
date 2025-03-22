import { useEffect, useState } from "react";

import Header from "./components/Header";
import Column from "./components/Column";
import Footer from "./components/Footer";
import AddTaskModal from "./components/AddTaskModal";

function App() {
  const [addTaskModalOpen, setAddTaskModalOpen] = useState(false);

  const [columns, setColumns] = useState([
    "Backlog",
    "To Do",
    "In Progress",
    "Done",
  ]);

  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const resJson = await res.json();
    setTasks(resJson);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header setAddTaskModalOpen={setAddTaskModalOpen} />
        <div className="flex flex-grow justify-center gap-8 p-8">
          {columns.map((column, index) => (
            <Column
              key={index}
              columnName={column}
              tasks={tasks.filter(
                (task) => task.category.toLowerCase() === column.toLowerCase()
              )}
            />
          ))}
        </div>
        <Footer />
      </div>
      {addTaskModalOpen && (
        <AddTaskModal
          setAddTaskModalOpen={setAddTaskModalOpen}
          columns={columns}
          tasks={tasks}
          setTasks={setTasks}
        />
      )}
    </>
  );
}

export default App;
