CREATE TABLE service (
    id SERIAL PRIMARY KEY,
    service VARCHAR(50),
    service_description VARCHAR(150)
);

INSERT INTO service (service, service_description) VALUES
    ('Lavagem Completa', 'Limpeza externa e interna detalhada do veículo, incluindo aspiração e lavagem de carpetes'),
    ('Polimento e Espelhamento', 'Polimento da pintura para remover arranhões leves e restaurar o brilho'),
    ('Higienização Interna', 'Limpeza profunda de bancos, carpetes e teto, eliminando sujeiras e odores'),
    ('Cristalização de Pintura', 'Aplicação de camada protetora que intensifica o brilho e protege a pintura contra sujeira'),
    ('Enceramento', 'Aplicação de cera para proteção e brilho, prolongando a durabilidade da pintura'),
    ('Proteção de Para-brisa', 'Tratamento repelente de água que melhora a visibilidade em dias chuvosos'),
    ('Remoção de Odor', 'Uso de produtos especializados para eliminar odores persistentes do interior do veículo'),
    ('Vitrificação de Pintura', 'Tratamento avançado para criar uma camada protetora com durabilidade superior'),
    ('Revitalização de Faróis', 'Polimento para remover amarelamento e arranhões dos faróis, melhorando a iluminação'),
    ('Limpeza de Motor', 'Limpeza detalhada da área do motor, removendo sujeira e óleo acumulados'),
    ('Descontaminação de Pintura', 'Remoção de impurezas invisíveis ao toque que aderem à pintura, melhorando o aspecto'),
    ('Aplicação de PPF', 'Filme protetor aplicado sobre a pintura para prevenir arranhões e desgaste'),
    ('Hidratação de Couro', 'Aplicação de hidratantes específicos para restaurar a maciez e a aparência do couro'),
    ('Proteção de Rodas', 'Aplicação de produtos que repelem sujeira e protegem as rodas contra corrosão'),
    ('Remoção de Manchas', 'Tratamento para remover manchas difíceis de tecidos e estofamentos do veículo');