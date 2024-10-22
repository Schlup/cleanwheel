CREATE TABLE business (
    uuid UUID PRIMARY KEY,
    owner_uuid UUID REFERENCES person(uuid)
);