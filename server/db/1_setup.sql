DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  username VARCHAR(50) NOT NULL,
  story VARCHAR(2000) NOT NULL,
  link VARCHAR(40),
  enteredAt VARCHAR(40)

);
