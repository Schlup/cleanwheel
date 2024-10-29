CREATE TABLE business_contact (
    business_uuid UUID PRIMARY KEY REFERENCES business(uuid),
    email VARCHAR(75) UNIQUE,
    phone VARCHAR(20)
);
