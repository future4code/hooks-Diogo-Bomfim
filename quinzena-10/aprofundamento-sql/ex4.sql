-- QUESTÃO 04

-- A) 
ALTER TABLE Projetos
ADD description VARCHAR(255) NOT NULL;

DESCRIBE Projetos;

-- B)
UPDATE Projetos
SET description = "Projeto de sistema em nuvem da Labenu."
WHERE id = "001";

UPDATE Projetos
SET description = "Projeto de sistema de gerenciamento de músicas da Labenu."
WHERE id = "002";

UPDATE Projetos
SET description = "Projeto de rede de comunicação da Labenu."
WHERE id = "003";

SELECT * FROM Projetos