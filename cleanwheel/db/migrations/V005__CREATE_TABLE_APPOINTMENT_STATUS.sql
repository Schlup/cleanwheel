CREATE TABLE appointment_status (
    id SERIAL PRIMARY KEY,
    status VARCHAR(50)
);

INSERT INTO appointment_status (status) VALUES ('Pendente');
INSERT INTO appointment_status (status) VALUES ('Confirmado');
INSERT INTO appointment_status (status) VALUES ('Cancelado pelo Cliente');
INSERT INTO appointment_status (status) VALUES ('Cancelado pelo Fornecedor');
INSERT INTO appointment_status (status) VALUES ('Em Andamento');
INSERT INTO appointment_status (status) VALUES ('Concluído');
INSERT INTO appointment_status (status) VALUES ('Não Compareceu');