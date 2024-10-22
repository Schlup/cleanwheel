CREATE TABLE business_contact (
    business_uuid UUID PRIMARY KEY REFERENCES business(uuid),
    email VARCHAR(75) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL
);
