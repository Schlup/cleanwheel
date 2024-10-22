CREATE TABLE contact (
    person_uuid UUID PRIMARY KEY REFERENCES person(uuid),
    phone VARCHAR(20) NOT NULL
);

-- create table only for "phone"