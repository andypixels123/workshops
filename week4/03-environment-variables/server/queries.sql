create table staff (
  id INT primary key generated always as identity,
  name VARCHAR(255),
  location VARCHAR(255),
  age INT,
  bio TEXT
);

INSERT into staff (name, location, age, bio)
values
  ('Manny','Norwich',29,'Software Dev instructor with lots of enthusiasm'),
  ('Bertie','Leicester',100,'Teaching assistant with lots of charisma'),
  ('Tim','Norwich',45,'course director');
  -- single quotes required for strings

SELECT name, location, age, bio from staff;
SELECT name, bio from staff;

UPDATE staff
SET bio = 'Course Pupil'
WHERE name = 'Tim';