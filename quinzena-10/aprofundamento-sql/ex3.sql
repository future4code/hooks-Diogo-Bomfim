-- QUESTÃO 03

-- A)
ALTER TABLE Projetos
DROP COLUMN title;

-- B) 
ALTER TABLE Projetos
CHANGE date dueDate DATE NOT NULL;

-- C)
ALTER TABLE Funcionarios
MODIFY email VARCHAR(255) NOT NULL UNIQUE;

DESCRIBE Funcionarios


