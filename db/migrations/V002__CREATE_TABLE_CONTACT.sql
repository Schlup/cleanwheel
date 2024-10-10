CREATE TABLE contact (
    person_uuid UUID PRIMARY KEY REFERENCES person(uuid),
    email VARCHAR(50),
    phone VARCHAR(20)
);