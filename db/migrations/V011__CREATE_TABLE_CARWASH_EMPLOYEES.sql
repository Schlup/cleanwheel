CREATE TABLE carwash_employees (
    business_uuid UUID REFERENCES business(uuid),
    person_uuid UUID REFERENCES person(uuid),
    role_id INT REFERENCES carwash_roles(id),
    PRIMARY KEY (business_uuid, person_uuid, role_id)
);