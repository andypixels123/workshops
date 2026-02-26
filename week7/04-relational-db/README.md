
Relational Databases and more SQL Queries
Overview

Relational databases allow us to store our objects in rows in tables according to the defined schema.

We can also represent relationships between this data using a column in the table known as a “foreign key”. This is a column that contains a reference to another row in another table. For example, a posts table might have a category_id foreign key column that references the ID of a row in a categories table.

Imagine a database containing three tables: a Categories table, listing various categories; a Posts table, containing all posts with a reference to the category they belong to; and a Tags table, listing different tags. Each of these entities is distinct but closely related. You’ll often want to show all posts in a category or all tags associated with a post.

Organising this data effectively in the database is known as “database normalisation”. It’s the process of structuring data to minimise duplication and thus reduce storage needs, while also enhancing the ease of querying the data for display in an application.

There are three main types of relationships in relational databases:

    One to One: This relationship links two items directly on a one-to-one basis. For example, a user has one profile, and a profile belongs to one user. This type of relationship is less common in this context but is important in database design.

    One to Many: This relationship is where one item is linked to multiple items. For instance, a category has many posts, and each post belongs to one category. This is a common relationship in content management systems, where multiple pieces of content are categorised under a single theme.

    Many to Many: In this relationship, many items are linked to many other items. For example, a post can have multiple tags, and a tag can be associated with multiple posts. This scenario is typical in situations where categorisation is not exclusive, and items need to be cross-referenced with multiple other items.

By understanding and applying these relationships, you can structure a database that is efficient, scalable, and aligns well with the needs of web applications, making data retrieval and manipulation more straightforward.
Class Plan

    Demo: Types of database relationships and how to query common relationships.
    Workshop: Querying a database with one to many and many to many relationships.

Language Objectives

    What is a one to one relationship?
    What is a one to many relationship?
    What is a many to many relationship?
    How to query data using a one to many relationship
    How to query data using a many to many relationship

Success Criteria

    I can give examples of use cases for the three different types of relationships.
    I can create tables and connect them using primary and foreign keys.
    I can insert data into the tables using the SQL editor.
    I can select data across two or more tables using a JOIN query in the SQL editor.
    “Add your own personal success criterion.”

Required Knowledge

    JavaScript
    SQL
    Relational databases

Resources

    SQL Cheat Sheet
    SQL Joins

Workshop
DB Setup

Using Supabase and Postgres, we can use the graphical interface or the SQL Query editor in the Dashboard to create and populate our tables. We can simply write SQL statements in the Query editor and run them to create tables, populate the data and delete the tables to start again.

⛳️ Run the following SQL to create the tables:

Categories

CREATE TABLE IF NOT EXISTS categories (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL
);

Posts

CREATE TABLE IF NOT EXISTS posts3 (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  category_id INTEGER REFERENCES categories(id)
);

Tags

CREATE TABLE IF NOT EXISTS tags (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL
);

Posts Tags Junction table

CREATE TABLE IF NOT EXISTS posts_tags (
  post_id INTEGER REFERENCES posts3(id),
  tag_id INTEGER REFERENCES tags(id),
  PRIMARY KEY (post_id, tag_id)
);

👀 In the Supabase dashboard you can view a visual representation of your tables and relationships in the Schema Visualiser tab. It’s under Database on the left.

⛳️ Run the following SQL to populate the tables with some test data:

Categories

INSERT INTO categories(name) VALUES('Technology');
INSERT INTO categories(name) VALUES('Lifestyle');
INSERT INTO categories(name) VALUES('Education');

Posts

INSERT INTO posts3(title, content, category_id) VALUES('Introduction to Node.js', 'Node.js is a JavaScript runtime...', 1);
INSERT INTO posts3(title, content, category_id) VALUES('Daily Yoga Practices', 'Yoga is beneficial for health...', 2);
INSERT INTO posts3(title, content, category_id) VALUES('Learning SQL Basics', 'SQL is a standard language for...', 3);

Tags

INSERT INTO tags(name) VALUES('Programming');
INSERT INTO tags(name) VALUES('Health');
INSERT INTO tags(name) VALUES('Education');

Posts Tags

INSERT INTO posts_tags(post_id, tag_id) VALUES(1, 1);
INSERT INTO posts_tags(post_id, tag_id) VALUES(2, 2);
INSERT INTO posts_tags(post_id, tag_id) VALUES(3, 3);

👀 Our database is now created, and populated with some test data. The foreign keys are set up to reference ID columns in the other tables. Now we can query the data and see how the relationships work.
One to Many: Retrieve all the posts, including a column for their assigned category

Use a JOIN to match the category_id in the posts table with the id in the categories table. A JOIN combines the two tables together, matching the rows in the right table with the rows in the left table. The ON clause specifies which column in the left table to match with which column in the right table. The result is a table with the columns from both tables, joined together. The columns from the right table are added to the end of the columns from the left table.

Database are able to optimise this relationship if we specify

⛳️ Run the following SQL with the SQL Editor to show the posts with their accompanying category:

SELECT posts3.title, posts3.content, categories.name AS category
FROM posts3
JOIN categories ON posts3.category_id = categories.id;

👀 You should see the following output:
title 	                    content 	                        category
Introduction to Node.js     Node.js is a JavaScript runtime 	Technology
Daily Yoga Practices 	    Yoga is beneficial for health 	    Lifestyle
Learning SQL Basics 	    SQL is a standard language for  	Education

💭 the AS keyword allows you to rename the column for the category, because the category.name column would be ambiguous. You don’t have to use AS but it can help to name the field in a more meaningful way.
One to Many: Get all posts associated with a category

Often we will want to list out all of the posts that belong to a particular category. We can do this by using a WHERE clause to filter the results by the category. The query in natural language would be “Select all the posts where the category name is Technology”. If we know the category ID we can directly query the posts table and use the WHERE clause to specify the category ID. If we only know the category name, we will have to use a JOIN to look up the category ID first.

Here’s how we would do it if we know the category ID:

⛳️ Run the following SQL the SQL Editor to show the posts with their accompanying category:

SELECT posts3.title, posts3.content, categories.name AS category
FROM posts3
JOIN categories ON posts3.category_id = categories.id
WHERE categories.id = 1;

👀 You should see the following output:
title 	                content 	                    category
Introduction to Node.js Node.js is a JavaScript runtime Technology

Here’s how we would do it if we only know the category name:

⛳️ Run the following SQL the SQL Editor to show the posts with their accompanying category:

SELECT posts3.title, posts3.content, categories.name AS category
FROM posts3
JOIN categories ON posts3.category_id = categories.id
WHERE categories.name = 'Technology';

⛳️
Many to Many: Retrieve all the posts with their assigned category and tags

To work with our many to many tag relationships - where a post can have more than one tag associated with it - we have to join twice via our posts_tags junction table. We select the posts, the categories.name AS the category and the tags.name AS the tag. We join the posts table to the posts_tags table on the post_id and then join the posts_tags table to the tags table on the tag_id. This makes a connection between all the posts and the tags via the posts_tags table. Look at the Schema Visualiser to map how this works and how these values are connected.

⛳️ Run the following SQL the SQL Editor to show the posts with their accompanying category and tags:

SELECT posts3.title, posts3.content, categories.name AS category, tags.name AS tag
FROM posts3
JOIN categories ON posts3.category_id = categories.id
JOIN posts_tags ON posts3.id = posts_tags.post_id
JOIN tags ON posts_tags.tag_id = tags.id;

👀 You should see the following output:
title 	                content 	                        category 	tag
Introduction to Node.js Node.js is a JavaScript runtime     Technology 	Programming
Daily Yoga Practices 	Yoga is beneficial for health 	    Lifestyle 	Health
Learning SQL Basics 	SQL is a standard language for 	    Education 	Education

👀 This works because in our test data each post only has one tag, but what happens when we add another relationship to the posts_tags table?

⛳️ Run the following SQL the SQL Editor to add another tag to the posts_tags table:

INSERT INTO posts_tags(post_id, tag_id) VALUES(1, 2);

💭 This will set up another relationship between the post with ID 1 and the tag with ID 2.

⛳️ Run the same query again to see how it changes the output:

SELECT posts3.title, posts3.content, categories.name AS category, tags.name AS tag
FROM posts3
JOIN categories ON posts3.category_id = categories.id
JOIN posts_tags ON posts3.id = posts_tags.post_id
JOIN tags ON posts_tags.tag_id = tags.id;

👀 You should see the following output:
title 	                content 	                    category 	tag
Introduction to Node.js Node.js is a JavaScript runtime Technology 	Programming
Introduction to Node.js Node.js is a JavaScript runtime Technology 	Health
Daily Yoga Practices 	Yoga is beneficial for health 	Lifestyle 	Health
Learning SQL Basics 	SQL is a standard language for 	Education 	Education

👀 Notice that the post that has two tags associated with it is now listed twice. This is because we have two rows in the posts_tags table that connect the post with ID 1 to the tags table. We’ll see how to collapse this into one result for the post with an array of tags soon.
Many to Many: Collect the tags together

Often for many to many relationships we want to collect the tags together into an array, and return only one row for each post title, plus a list of the tags associated with it. In Postgres we do this by using the ARRAY_AGG function in combination with the GROUP BY clause.

We can use the ARRAY_AGG function to collect the tags together into an array. This will collapse the results into one row for each post, with an array of tags.

⛳️ Run the following SQL the SQL Editor to show the posts with their accompanying category and tags:

SELECT posts3.title, ARRAY_AGG(tags.name) AS tags
FROM posts3
JOIN posts_tags ON posts3.id = posts_tags.post_id
JOIN tags ON posts_tags.tag_id = tags.id
GROUP BY posts3.title;

👀 You should see the following output:
title 	                tags
Introduction to Node.js [Programming,Health]
Daily Yoga Practices 	[Health]
Learning SQL Basics 	[Education]

💭 The GROUP BY clause is used to group the results by the title of the post. This means that the results are collapsed into one row for each post title, and the tags are collected into an array. There are other such functions
