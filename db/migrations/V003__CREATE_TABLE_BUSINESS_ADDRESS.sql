CREATE TABLE business_address (
    id SERIAL PRIMARY KEY,
    street_name VARCHAR(50),
    complement VARCHAR(50),
    neighborhood VARCHAR(50),
    city VARCHAR(50),
    state VARCHAR(50),
    country VARCHAR(50),
    postal_code VARCHAR(10)
);