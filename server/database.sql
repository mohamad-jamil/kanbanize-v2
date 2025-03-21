CREATE DATABASE kanbanizev2;

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    category VARCHAR(20) CHECK (category IN ('backlog', 'to do', 'in progress', 'done')),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);