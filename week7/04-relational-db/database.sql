CREATE TABLE IF NOT EXISTS categories (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS posts3 (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  category_id INTEGER REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS tags (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS posts_tags (
  post_id INTEGER REFERENCES posts3(id),
  tag_id INTEGER REFERENCES tags(id),
  PRIMARY KEY (post_id, tag_id)
);

INSERT INTO tags(name) VALUES('Programming');
INSERT INTO tags(name) VALUES('Health');
INSERT INTO tags(name) VALUES('Education');

INSERT INTO posts_tags(post_id, tag_id) VALUES(1, 1);
INSERT INTO posts_tags(post_id, tag_id) VALUES(2, 2);
INSERT INTO posts_tags(post_id, tag_id) VALUES(3, 3);

SELECT posts3.title, posts3.content, categories.name AS category
FROM posts3
JOIN categories ON posts3.category_id = categories.id;

SELECT posts3.title, posts3.content, categories.name AS category
FROM posts3
JOIN categories ON posts3.category_id = categories.id
WHERE categories.id = 1;

SELECT posts3.title, posts3.content, categories.name AS category
FROM posts3
JOIN categories ON posts3.category_id = categories.id
WHERE categories.name = 'Technology';

SELECT posts3.title, posts3.content, categories.name AS category, tags.name AS tag
FROM posts3
JOIN categories ON posts3.category_id = categories.id
JOIN posts_tags ON posts3.id = posts_tags.post_id
JOIN tags ON posts_tags.tag_id = tags.id;

INSERT INTO posts_tags(post_id, tag_id) VALUES(1, 2);

SELECT posts3.title, posts3.content, categories.name AS category, tags.name AS tag
FROM posts3
JOIN categories ON posts3.category_id = categories.id
JOIN posts_tags ON posts3.id = posts_tags.post_id
JOIN tags ON posts_tags.tag_id = tags.id;

SELECT posts3.title, ARRAY_AGG(tags.name) AS tags
FROM posts3
JOIN posts_tags ON posts3.id = posts_tags.post_id
JOIN tags ON posts_tags.tag_id = tags.id
GROUP BY posts3.title;