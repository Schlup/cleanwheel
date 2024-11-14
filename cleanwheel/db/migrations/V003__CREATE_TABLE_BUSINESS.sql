CREATE TABLE business (
    uuid UUID PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    owner_uuid UUID REFERENCES person(uuid)
);