import { useState } from "react";

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

  const [tasks, setTasks] = useState([
    {
      id: "ID-0001",
      task: "Task 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu nisl, hendrerit in bibendum in, finibus in augue.",
      category: "Backlog",
    },
    {
      id: "ID-0002",
      task: "Task 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu nisl, hendrerit in bibendum in, finibus in augue.",
      category: "Backlog",
    },
    {
      id: "ID-0003",
      task: "Task 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu nisl, hendrerit in bibendum in, finibus in augue.",
      category: "Backlog",
    },
    {
      id: "ID-0004",
      task: "Task 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu nisl, hendrerit in bibendum in, finibus in augue.",
      category: "Backlog",
    },
  ]);

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header setAddTaskModalOpen={setAddTaskModalOpen} />
        <div className="flex flex-grow justify-center gap-8 p-8">
          {columns.map((column, index) => (
            <Column
              key={index}
              columnName={column}
              tasks={tasks.filter((task) => task.category === column)}
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
