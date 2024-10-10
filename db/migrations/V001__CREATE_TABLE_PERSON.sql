CREATE TABLE person (
    uuid UUID PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50),
    password VARCHAR(50) NOT NULL,
    cpf INT
);