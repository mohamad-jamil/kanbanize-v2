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

// GET: get next task ID
app.get("/next-task-id", async (req, res) => {
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

// GET: get all columns
app.get("/columns", async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM columns ORDER BY id");

    res.json(response.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// GET: get specific column
app.get("/columns/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await pool.query("SELECT * FROM columns WHERE id=$1", [
      id,
    ]);

    res.json(response.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// GET: get next column ID
app.get("/next-column-id", async (req, res) => {
  try {
    const response = await pool.query(
      "SELECT last_value + 1 AS next_id FROM columns_id_seq;"
    );

    res.json(response.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// POST: add new column
app.post("/columns", async (req, res) => {
  try {
    const { category } = req.body;
    const response = await pool.query(
      "INSERT INTO columns (category) VALUES ($1) RETURNING *",
      [category]
    );

    res.json(response.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// PUT: edit specific column
app.put("/columns/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { category } = req.body;
    const response = await pool.query(
      "UPDATE columns SET category=$1 WHERE id=$2 RETURNING *",
      [category, id]
    );

    res.json(response.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// DELETE: delete specific column
app.delete("/columns/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await pool.query(
      "DELETE FROM columns WHERE id=$1 RETURNING *",
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
