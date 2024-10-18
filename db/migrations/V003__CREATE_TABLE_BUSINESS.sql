CREATE TABLE business (
    uuid UUID PRIMARY KEY,
    owner_uuid UUID REFERENCES person(uuid),
    phone VARCHAR(50),
    email VARCHAR(75)
);

-- Create a contact table for business