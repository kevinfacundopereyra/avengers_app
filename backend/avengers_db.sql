CREATE DATABASE avengers_db;
USE avengers_db;
CREATE TABLE avengers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    alias VARCHAR(100),
    actor VARCHAR(100)
);
CREATE TABLE habilidades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    avenger_id INT,
    habilidad VARCHAR(100),
    FOREIGN KEY (avenger_id) REFERENCES avengers(id)
);


-- Tony Stark
INSERT INTO avengers (nombre, alias, actor)
VALUES ('Tony Stark', 'Iron Man', 'Robert Downey Jr.');
SET @last_id = LAST_INSERT_ID();
INSERT INTO habilidades (avenger_id, habilidad)
VALUES
(@last_id, 'genio'),
(@last_id, 'millonario'),
(@last_id, 'experto en tecnología'),
(@last_id, 'traje blindado');

-- Steve Rogers
INSERT INTO avengers (nombre, alias, actor)
VALUES ('Steve Rogers', 'Captain America', 'Chris Evans');
SET @last_id = LAST_INSERT_ID();
INSERT INTO habilidades (avenger_id, habilidad)
VALUES
(@last_id, 'fuerza sobrehumana'),
(@last_id, 'liderazgo'),
(@last_id, 'uso de escudo');

-- Thor
INSERT INTO avengers (nombre, alias, actor)
VALUES ('Thor', 'Thor', 'Chris Hemsworth');
SET @last_id = LAST_INSERT_ID();
INSERT INTO habilidades (avenger_id, habilidad)
VALUES
(@last_id, 'dios del trueno'),
(@last_id, 'control del rayo'),
(@last_id, 'fuerza sobrehumana'),
(@last_id, 'Mjolnir');

-- Bruce Banner
INSERT INTO avengers (nombre, alias, actor)
VALUES ('Bruce Banner', 'Hulk', 'Mark Ruffalo');
SET @last_id = LAST_INSERT_ID();
INSERT INTO habilidades (avenger_id, habilidad)
VALUES
(@last_id, 'fuerza extrema'),
(@last_id, 'resistencia'),
(@last_id, 'cambio de forma al enojarse');

-- Natasha Romanoff
INSERT INTO avengers (nombre, alias, actor)
VALUES ('Natasha Romanoff', 'Black Widow', 'Scarlett Johansson');
SET @last_id = LAST_INSERT_ID();
INSERT INTO habilidades (avenger_id, habilidad)
VALUES
(@last_id, 'espionaje'),
(@last_id, 'combate cuerpo a cuerpo'),
(@last_id, 'armas de fuego');

-- Clint Barton
INSERT INTO avengers (nombre, alias, actor)
VALUES ('Clint Barton', 'Hawkeye', 'Jeremy Renner');
SET @last_id = LAST_INSERT_ID();
INSERT INTO habilidades (avenger_id, habilidad)
VALUES
(@last_id, 'puntería perfecta'),
(@last_id, 'arco y flechas'),
(@last_id, 'táctico');

-- Wanda Maximoff
INSERT INTO avengers (nombre, alias, actor)
VALUES ('Wanda Maximoff', 'Scarlet Witch', 'Elizabeth Olsen');
SET @last_id = LAST_INSERT_ID();
INSERT INTO habilidades (avenger_id, habilidad)
VALUES
(@last_id, 'telequinesis'),
(@last_id, 'manipulación de energía'),
(@last_id, 'magia del caos');

-- Vision
INSERT INTO avengers (nombre, alias, actor)
VALUES ('Vision', 'Vision', 'Paul Bettany');
SET @last_id = LAST_INSERT_ID();
INSERT INTO habilidades (avenger_id, habilidad)
VALUES
(@last_id, 'inteligencia artificial'),
(@last_id, 'vuelo'),
(@last_id, 'proyección de energía'),
(@last_id, 'intangible');

-- Peter Parker
INSERT INTO avengers (nombre, alias, actor)
VALUES ('Peter Parker', 'Spider-Man', 'Tom Holland');
SET @last_id = LAST_INSERT_ID();
INSERT INTO habilidades (avenger_id, habilidad)
VALUES
(@last_id, 'sentido arácnido'),
(@last_id, 'agilidad'),
(@last_id, 'lanzar telarañas'),
(@last_id, 'escalar paredes');