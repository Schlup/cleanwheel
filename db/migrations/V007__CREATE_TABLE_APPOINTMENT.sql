CREATE TABLE appointment (
    uuid UUID PRIMARY KEY,
    business_uuid UUID REFERENCES business(uuid), -- Prestador
    person_uuid UUID REFERENCES person(uuid), -- Tomador do serviço
    status_id INT REFERENCES appointment_status(id) NOT NULL, -- Em andamento, cancelado, concluido etc...
    service_id INT REFERENCES service(id) NOT NULL, -- Qual serviço foi pretado, polimento, lavação etc...
    date DATE,
    time TIME
);