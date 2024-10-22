CREATE TABLE person (
    uuid UUID PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50),
    email VARCHAR(75) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL, --encrypted
    cpf INT UNIQUE
);