CREATE TABLE carwash_employees (
    business_uuid UUID REFERENCES business(uuid),
    person_uuid UUID REFERENCES person(uuid),
    role_id INT REFERENCES carwash_roles(id),
    CONSTRAINT carwash_employees_uuid PRIMARY KEY (business_uuid, person_uuid, role_id)
);