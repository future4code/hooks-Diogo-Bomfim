SELECT * FROM Funcionarios;

SELECT id AS identifier, nome FROM Funcionarios;

SELECT * FROM Funcionarios WHERE id = "04";

SELECT * FROM Funcionarios WHERE nome LIKE "%a%";

SELECT * FROM Funcionarios WHERE nome NOT LIKE "%r%" AND email LIKE "%u%";