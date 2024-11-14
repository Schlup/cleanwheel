CREATE TABLE person (
    uuid UUID PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50),
    email VARCHAR(75) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL, --encrypted
    cpf VARCHAR(11) UNIQUE,
    role VARCHAR(12) NOT NULL-- OWNER or USER, adicionar o NOT NULL dnv dps
);