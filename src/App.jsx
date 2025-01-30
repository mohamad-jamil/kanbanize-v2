import { useState } from "react";

import Header from "./components/Header";
import Column from "./components/Column";
import Footer from "./components/Footer";

function App() {
  const [columns, setColumns] = useState([
    "Backlog",
    "To Do",
    "In Progress",
    "Done",
  ]);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Task 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu nisl, hendrerit in bibendum in, finibus in augue.",
      category: "Backlog",
    },
    {
      id: 2,
      task: "Task 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu nisl, hendrerit in bibendum in, finibus in augue.",
      category: "Backlog",
    },
    {
      id: 3,
      task: "Task 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu nisl, hendrerit in bibendum in, finibus in augue.",
      category: "Backlog",
    },
    {
      id: 3,
      task: "Task 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu nisl, hendrerit in bibendum in, finibus in augue.",
      category: "Backlog",
    },
  ]);

  return (
    <div>
      <Header />
      <div className="flex justify-center gap-8 py-8">
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
  );
}

export default App;
