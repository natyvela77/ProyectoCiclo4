-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.9.2-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando estructura para tabla bienes_raices.alquiler
CREATE TABLE IF NOT EXISTS `alquiler` (
  `idalquiler` int(11) NOT NULL AUTO_INCREMENT,
  `idpropiedad` int(11) DEFAULT NULL,
  `area` decimal(5,1) DEFAULT NULL,
  `ciudad` varchar(100) DEFAULT NULL,
  `estrato` int(1) DEFAULT NULL,
  `antiguedad` int(3) DEFAULT NULL,
  `tipovivienda` varchar(100) DEFAULT NULL,
  `habitaciones` int(2) DEFAULT NULL,
  `banos` int(2) DEFAULT NULL,
  `centrocomercial` tinyint(1) DEFAULT NULL,
  `parque` tinyint(1) DEFAULT NULL,
  `valorarriendo` decimal(22,2) DEFAULT NULL,
  `valorventa` decimal(22,2) DEFAULT NULL,
  `valormetro` decimal(22,2) DEFAULT NULL,
  PRIMARY KEY (`idalquiler`) USING BTREE,
  KEY `FK_alquiler_bienes` (`idpropiedad`) USING BTREE,
  CONSTRAINT `FK_alquiler_bienes` FOREIGN KEY (`idpropiedad`) REFERENCES `bienes` (`idpropiedad`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bienes_raices.alquiler: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `alquiler` DISABLE KEYS */;
/*!40000 ALTER TABLE `alquiler` ENABLE KEYS */;

-- Volcando estructura para tabla bienes_raices.bienes
CREATE TABLE IF NOT EXISTS `bienes` (
  `idpropiedad` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `area` decimal(5,1) DEFAULT NULL,
  `ciudad` varchar(100) DEFAULT NULL,
  `estrato` int(1) DEFAULT NULL,
  `antiguedad` int(3) DEFAULT NULL,
  `tipovivienda` varchar(100) DEFAULT NULL,
  `habitaciones` int(2) DEFAULT NULL,
  `banos` int(2) DEFAULT NULL,
  `centrocomercial` varchar(100) DEFAULT NULL,
  `parque` varchar(100) DEFAULT NULL,
  `valorarriendo` decimal(22,2) DEFAULT NULL,
  `valorventa` decimal(22,2) DEFAULT NULL,
  `valormetro` decimal(22,2) DEFAULT NULL,
  PRIMARY KEY (`idpropiedad`) USING BTREE,
  KEY `FK_bienes_usuarios` (`username`),
  CONSTRAINT `FK_bienes_usuarios` FOREIGN KEY (`username`) REFERENCES `usuarios` (`username`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bienes_raices.bienes: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `bienes` DISABLE KEYS */;
INSERT INTO `bienes` (`idpropiedad`, `username`, `area`, `ciudad`, `estrato`, `antiguedad`, `tipovivienda`, `habitaciones`, `banos`, `centrocomercial`, `parque`, `valorarriendo`, `valorventa`, `valormetro`) VALUES
	(6, 'daoo', 50.0, 'cali', 3, 40, 'casa', 4, 3, 'si', 'si', 965717.00, 166502903.00, 2775048.00),
	(7, 'Pipe1', 40.0, 'bogota', 3, 30, 'casa', 4, 1, 'no', 'no', 1102000.00, 189999970.00, 3166666.00);
/*!40000 ALTER TABLE `bienes` ENABLE KEYS */;

-- Volcando estructura para tabla bienes_raices.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `username` varchar(100) NOT NULL,
  `contrasena` varchar(100) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bienes_raices.usuarios: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`username`, `contrasena`, `nombre`, `apellidos`, `email`) VALUES
	('daoo', '1234567', 'David', 'Olano', 'david@gmail.com'),
	('Gisell1', '7654321', 'Gisell', 'Hoyos', 'Gisell@gmail.com'),
	('Natyw', 'abcdefg', 'Nataly', 'Vela', 'Nata@gmail.com'),
	('Pipe1', 'abcde1234', 'Felipe', 'Buitrago', 'pipe@gmail.com');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
