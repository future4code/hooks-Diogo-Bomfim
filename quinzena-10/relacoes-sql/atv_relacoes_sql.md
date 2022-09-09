-- EXERCÍCIO 01
-- a) Uma FK é uma chave que vem de uma tabela externa

-- b)
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES("01", "Filme bão até", 7.6, "001"),
("02", "Filme muito bão", 10, "002"),
("03", "Filme ruim", 4, "003"),
("04", "Filme ruim demais", 1, "004");

-- c) Não foi cadastrado porquê a FK não existe
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES("06", "Filme bão até", 7.6, "012");

-- d) 
ALTER TABLE Movie
DROP COLUMN rating;

-- e) Não deletou pois a FK está vinculada a outra tabela
DELETE FROM Movie
WHERE id = "004";

-- EXERCÍCIO 02
-- a) Ela possui duas FK e usa essa relação entre as duas para formar o elenco

-- b)
INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("001", "002"),
("001", "001"),
("002", "003"),
("003", "004"),
("004", "001"),
("004", "002");

-- c) Deu erro pois a FK de Ator inserida não existe na tabela de atores
INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("001", "012");

-- d) Não deletou pois o ator tem relação com outra tabela
DELETE FROM Actor
WHERE id = "002";

-- EXERCÍCIO 03
-- a) O ON serve para que a query traga apenas o que tem "match" na coluna movie_id

-- b) 
SELECT Movie.id, Movie.title, rate FROM Movie
JOIN Rating ON Movie.id = Rating.movie_id
ORDER BY Movie.id ASC;

