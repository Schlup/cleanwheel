CREATE TABLE person (
    uuid UUID PRIMARY KEY,
    name VARCHAR(50),
    lastname VARCHAR(50),
    password VARCHAR(100),
    cpf INT UNIQUE
);