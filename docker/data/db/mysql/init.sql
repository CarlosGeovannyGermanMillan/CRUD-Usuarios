INSERT INTO mysql.user (Host, User, Password) VALUES ('%', 'root', password('root'));
GRANT ALL ON *.* TO 'root'@'%' WITH GRANT OPTION;
CREATE DATABASE IF NOT EXISTS `coppel`;
USE `coppel`;
CREATE TABLE IF NOT EXISTS `USUARIOS` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(45) NOT NULL,
    `apellidos` VARCHAR(45) NOT NULL,
    `correo` VARCHAR(45) NOT NULL,
    `edad` INT(3) NOT NULL,
    PRIMARY KEY (`id`));

INSERT INTO `USUARIOS` (nombre, apellidos, correo, edad) 
VALUES
('Javier','Millan','javi@gmail.com',44),
('Carlos','Millan','carlos@gmail.com',22),
('Paul','Millan','paul28@gmail.com',25),
('Abraham','Gaxiola','gaxabram@gmail.com',25);
