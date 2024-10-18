CREATE TABLE contact (
    person_uuid UUID PRIMARY KEY REFERENCES person(uuid),
    email VARCHAR(75) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL
);