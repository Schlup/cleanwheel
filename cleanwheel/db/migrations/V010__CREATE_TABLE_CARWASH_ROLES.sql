CREATE TABLE carwash_roles (
    id SERIAL PRIMARY KEY,
    role VARCHAR(50) NOT NULL,
    description VARCHAR(75)
);

INSERT INTO carwash_roles (role, description) VALUES
    ('Atendente', 'Atendimento ao cliente e pedidos'),
    ('Lavador', 'Lavagem externa e interna dos veículos'),
    ('Polidor', 'Polimento e aplicação de ceras'),
    ('Técnico de Higienização', 'Limpeza e higienização interna'),
    ('Especialista em Vitrificação', 'Aplicação de vitrificação e cristalização'),
    ('Aplicador de Película', 'Instalação de películas protetivas'),
    ('Hidratação de Couro', 'Limpeza e hidratação de bancos de couro'),
    ('Especialista em Proteção de Faróis', 'Polimento e revitalização de faróis'),
    ('Gerente de Operações', 'Supervisão de operações e equipe'),
    ('Especialista em Detalhamento de Motor', 'Limpeza detalhada do motor');