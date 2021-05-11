DROP DATABASE IF EXISTS todo;
CREATE DATABASE todo;

\c todo;

DROP TABLE IF EXISTS todos;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  todo VARCHAR(255),
  completed BOOLEAN DEFAULT false
);
