CREATE TABLE appointment (
    uuid UUID PRIMARY KEY,
    business_uuid UUID REFERENCES business(uuid),
    person_uuid UUID REFERENCES person(uuid),
    status_id INT REFERENCES appointment_status(id),
    service_id INT REFERENCES service(id),
    date DATE,
    time TIME
);