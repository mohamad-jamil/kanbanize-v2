const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// GET: get all tasks
app.get("/tasks", async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM tasks ORDER BY id");

    res.json(response.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// GET: get specific task
app.get("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await pool.query("SELECT * FROM tasks WHERE id=$1", [id]);

    res.json(response.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// GET: get next ID
app.get("/next-id", async (req, res) => {
  try {
    const response = await pool.query(
      "SELECT last_value + 1 AS next_id FROM tasks_id_seq;"
    );

    res.json(response.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// POST: add new task
app.post("/tasks", async (req, res) => {
  try {
    const { category, title, description } = req.body;
    const response = await pool.query(
      "INSERT INTO tasks (category, title, description) VALUES($1, $2, $3) RETURNING *",
      [category, title, description]
    );

    res.json(response.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// PUT: update specific task
app.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { category, title, description } = req.body;
    const response = await pool.query(
      "UPDATE tasks SET category=$1, title=$2, description=$3 WHERE id=$4 RETURNING *",
      [category, title, description, id]
    );

    res.json(response.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// DELETE: delete specific task
app.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await pool.query(
      "DELETE FROM tasks WHERE id=$1 RETURNING *",
      [id]
    );

    res.json(response.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000.");
});
