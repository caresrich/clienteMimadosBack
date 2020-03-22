CREATE DATABASE DBMimados;

use DBMimados;


CREATE TABLE clientes
(
    idCliente INT(6) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidoP VARCHAR(50) NOT NULL,
    apellidoM VARCHAR(50),
    estadoCli BOOLEAN,
    fechaRegCli DATETIME
);

CREATE TABLE ventas
(
    idVenta INT(6) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    idCliente INT(6),
    FOREIGN KEY (idCliente) REFERENCES clientes (idCliente),
    estadoVen BOOLEAN,
    fechaRegVen DATETIME
);

CREATE TABLE ventaPrendas
(
    idVentaPrenda INT(6) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    idVenta INT(6),
    FOREIGN KEY (idVenta) REFERENCES ventas (idVenta),
    idPrenda INT(6),
    FOREIGN KEY (idPrenda) REFERENCES prendas (idPrenda),
    detalle VARCHAR(255) NOT NULL,
    cantidad INT(6) UNSIGNED NOT NULL,
    precio DECIMAL UNSIGNED NOT NULL,
    estadoVenPre BOOLEAN,
    fechaRegVenPre DATETIME
);

CREATE TABLE prendas
(
    idPrenda INT(6) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    codigoPren VARCHAR(50),
    marca VARCHAR(50) NOT NULL,
    talla VARCHAR(50)NOT NULL,
    precio DECIMAL UNSIGNED NOT NULL,
    color VARCHAR(50),
    caracteristicas VARCHAR(255),
    estadoPre BOOLEAN,
    fechaRegPre DATETIME
);


INSERT INTO clientes (nombre,apellidoP,apellidoM,estadoCli,fechaRegCli)
VALUES ('RICHARD','CARMONA','ESTRADA',TRUE,'2019-10-04');

INSERT INTO ventas (idCliente,estadoVen,fechaRegVen)
VALUES (1,TRUE,'2019-10-04');

INSERT INTO prendas (codigoPren,marca,talla,precio,color,caracteristicas,estadoPre,fechaRegPre)
VALUES ('M1','GENERICO','5T',10,'GENERICO','PRENDA GENERICA',TRUE,'2019-10-04');

INSERT INTO ventaPrendas (idVenta,idPrenda,detalle,cantidad,precio,estadoVenPre,fechaRegVenPre)
VALUES (2,1,'PANTALON CAFE ADIDAS',1,200,TRUE,'2019-10-04');

/*La siguiente instruccion es para añadir un foreign key en caso ya no queramos crear nuevamente la tabla
ALTER TABLE saldos foreign key (idCliente) REFERENCES clientes(idCliente);*/