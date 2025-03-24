import { useState, useContext } from "react";

import Header from "./components/Header";
import Column from "./components/Column";
import Footer from "./components/Footer";
import AddColumnModal from "./components/AddColumnModal";
import AddTaskModal from "./components/AddTaskModal";

import { DataContext } from "./context/dataContext";

function App() {
  const [addTaskModalOpen, setAddTaskModalOpen] = useState(false);
  const [addColumnModalOpen, setAddColumnModalOpen] = useState(false);
  const { tasks, columns } = useContext(DataContext);

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header
          setAddColumnModalOpen={setAddColumnModalOpen}
          setAddTaskModalOpen={setAddTaskModalOpen}
        />
        <div className="flex flex-grow justify-center gap-8 p-8">
          {columns.map((column, index) => (
            <Column
              key={index}
              column={column}
              tasks={tasks.filter(
                (task) =>
                  task.category.toLowerCase() === column.category.toLowerCase()
              )}
            />
          ))}
        </div>
        <Footer />
      </div>
      {addColumnModalOpen && (
        <AddColumnModal setAddColumnModalOpen={setAddColumnModalOpen} />
      )}
      {addTaskModalOpen && (
        <AddTaskModal
          setAddTaskModalOpen={setAddTaskModalOpen}
          columns={columns}
        />
      )}
    </>
  );
}

export default App;
