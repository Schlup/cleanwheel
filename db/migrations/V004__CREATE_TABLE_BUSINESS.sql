CREATE TABLE business (
    uuid UUID PRIMARY KEY,
    address_id INT REFERENCES business_address(id),
    phone VARCHAR(50),
    email VARCHAR(50)
);
