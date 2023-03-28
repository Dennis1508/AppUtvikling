Create Table users (
id serial Primary key,
email VARCHAR(255) UNIQUE NOT NULL
password VARCHAR(255) NOT NULL
);

Insert INTO users (email, password) Values ('user@example.com', 'password');