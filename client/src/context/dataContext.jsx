import { createContext, useState, useEffect } from "react";

const DataContext = createContext({
  tasks: [],
  columns: [],
});

const DataProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [columns, setColumns] = useState([
    "Backlog",
    "To Do",
    "In Progress",
    "Done",
  ]);

  useEffect(() => {
    const getTasks = async () => {
      const res = await fetch("http://localhost:5000/tasks");
      const resJson = await res.json();
      setTasks(resJson);
    };

    getTasks();
  }, []);

  return (
    <DataContext.Provider value={{ tasks, columns }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
