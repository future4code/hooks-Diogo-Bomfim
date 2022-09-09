-- QUESTÃO 05

-- A)
SELECT *
FROM Projetos
ORDER BY dueDATE DESC;

-- B) 
SELECT name, dueDate
FROM Projetos
ORDER BY dueDATE ASC
LIMIT 2;