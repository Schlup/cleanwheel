CREATE TABLE carwash_employees (
    id SERIAL PRIMARY KEY,
    business_uuid UUID REFERENCES business(uuid),
    person_uuid UUID REFERENCES person(uuid),
    role_id INT REFERENCES carwash_roles(id)
);