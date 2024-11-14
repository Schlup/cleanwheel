CREATE TABLE business_address (
    business_uuid UUID PRIMARY KEY REFERENCES business(uuid),
    street_name VARCHAR(50),
    complement VARCHAR(50),
    neighborhood VARCHAR(50),
    city VARCHAR(50),
    state VARCHAR(50),
    country VARCHAR(50),
    postal_code VARCHAR(10)
);