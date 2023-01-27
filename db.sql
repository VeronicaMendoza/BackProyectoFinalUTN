create database pasteleria;
use pasteleria;
CREATE TABLE productos (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(40) NOT NULL,
    precio VARCHAR(40),
    descripcion VARCHAR(300),
    done BOOLEAN NOT NULL DEFAULT 0,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);