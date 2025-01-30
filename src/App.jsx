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

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center gap-8 py-8">
        {columns.map((column, index) => (
          <Column key={index} columnName={column} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
