-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: wickedSales
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cartItems`
--

DROP TABLE IF EXISTS `cartItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cartItems` (
  `cartItemId` int(11) NOT NULL AUTO_INCREMENT,
  `cartId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`cartItemId`)
) ENGINE=InnoDB AUTO_INCREMENT=2269 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartItems`
--

LOCK TABLES `cartItems` WRITE;
/*!40000 ALTER TABLE `cartItems` DISABLE KEYS */;
INSERT INTO `cartItems` VALUES (2105,79,10,42999),(2135,84,13,7999),(2144,90,10,42999),(2148,94,11,7900),(2149,95,10,42999),(2150,96,10,42999),(2158,103,13,7999),(2168,113,10,42999),(2205,136,11,7900),(2207,138,13,7999),(2226,147,8,4999),(2227,147,8,4999),(2228,147,8,4999),(2229,147,8,4999),(2230,147,8,4999),(2231,147,8,4999),(2232,147,8,4999),(2242,149,7,1954),(2243,150,13,7999),(2259,152,7,1954),(2260,152,7,1954),(2261,153,7,1954),(2262,154,12,1999),(2263,155,6,9500),(2264,156,6,9500),(2265,157,12,1999),(2266,158,12,1999),(2267,159,5,4999),(2268,159,7,1954);
/*!40000 ALTER TABLE `cartItems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `cartId` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`cartId`)
) ENGINE=InnoDB AUTO_INCREMENT=160 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,'2019-11-21 18:45:46'),(2,'2019-11-21 23:17:08'),(3,'2019-11-30 04:47:57'),(4,'2019-11-30 05:02:23'),(5,'2019-11-30 05:55:26'),(6,'2019-11-30 06:13:11'),(7,'2019-11-30 06:18:58'),(8,'2019-11-30 06:26:18'),(9,'2019-11-30 06:28:25'),(10,'2019-11-30 18:46:08'),(11,'2019-11-30 18:47:01'),(12,'2019-11-30 18:50:48'),(13,'2019-11-30 18:53:23'),(14,'2019-12-16 20:21:22'),(15,'2019-12-16 20:27:05'),(16,'2019-12-16 20:34:57'),(17,'2019-12-16 20:40:25'),(18,'2019-12-16 20:47:08'),(19,'2019-12-16 20:48:35'),(20,'2019-12-16 20:55:02'),(21,'2019-12-16 21:22:19'),(22,'2019-12-17 00:52:00'),(23,'2019-12-17 01:39:21'),(24,'2019-12-17 01:40:03'),(25,'2019-12-17 18:38:36'),(26,'2019-12-17 21:14:42'),(27,'2019-12-17 21:14:50'),(28,'2019-12-17 23:32:10'),(29,'2019-12-18 00:45:27'),(30,'2019-12-18 01:42:44'),(31,'2019-12-18 02:58:51'),(32,'2019-12-19 19:20:26'),(33,'2019-12-19 19:23:43'),(34,'2019-12-22 03:10:31'),(35,'2019-12-22 03:14:36'),(36,'2019-12-23 13:38:53'),(37,'2019-12-24 01:02:10'),(38,'2019-12-25 04:10:46'),(39,'2019-12-25 05:24:43'),(40,'2019-12-25 05:45:21'),(41,'2019-12-26 04:44:06'),(42,'2019-12-26 05:12:11'),(43,'2019-12-26 21:59:06'),(44,'2019-12-26 22:10:13'),(45,'2019-12-31 03:18:03'),(46,'2020-01-06 20:43:41'),(47,'2020-01-06 20:43:41'),(48,'2020-01-06 20:50:26'),(49,'2020-01-06 22:52:26'),(50,'2020-01-07 21:48:02'),(51,'2020-01-08 02:56:50'),(52,'2020-01-08 04:00:15'),(53,'2020-01-08 20:08:33'),(54,'2020-01-08 20:19:23'),(55,'2020-01-08 20:32:30'),(56,'2020-01-09 20:59:57'),(57,'2020-01-09 21:01:09'),(58,'2020-01-09 21:12:55'),(59,'2020-01-09 21:13:07'),(60,'2020-01-19 02:00:32'),(61,'2020-01-24 03:09:28'),(62,'2020-01-28 01:23:53'),(63,'2020-01-28 03:13:32'),(64,'2020-01-28 18:44:07'),(65,'2020-01-29 22:32:50'),(66,'2020-01-30 22:37:04'),(67,'2020-01-30 22:40:22'),(68,'2020-01-30 22:47:45'),(69,'2020-01-30 22:57:26'),(70,'2020-01-30 22:58:19'),(71,'2020-01-30 23:09:07'),(72,'2020-01-30 23:17:35'),(73,'2020-01-30 23:24:14'),(74,'2020-01-30 23:29:53'),(75,'2020-01-30 23:30:27'),(76,'2020-01-30 23:32:41'),(77,'2020-01-31 01:55:01'),(78,'2020-01-31 01:59:55'),(79,'2020-01-31 02:01:20'),(80,'2020-01-31 02:05:52'),(81,'2020-01-31 02:09:23'),(82,'2020-01-31 02:12:34'),(83,'2020-01-31 02:14:29'),(84,'2020-01-31 02:16:57'),(85,'2020-01-31 02:19:46'),(86,'2020-01-31 02:25:02'),(87,'2020-01-31 02:33:46'),(88,'2020-01-31 02:34:47'),(89,'2020-01-31 02:36:59'),(90,'2020-01-31 02:41:19'),(91,'2020-01-31 02:50:46'),(92,'2020-01-31 02:53:13'),(93,'2020-01-31 02:54:23'),(94,'2020-01-31 02:55:31'),(95,'2020-01-31 02:55:58'),(96,'2020-01-31 02:56:50'),(97,'2020-01-31 02:58:38'),(98,'2020-01-31 02:59:04'),(99,'2020-01-31 03:02:33'),(100,'2020-01-31 03:03:06'),(101,'2020-01-31 03:05:07'),(102,'2020-01-31 03:11:29'),(103,'2020-01-31 03:15:27'),(104,'2020-01-31 18:59:05'),(105,'2020-01-31 19:04:38'),(106,'2020-01-31 19:06:22'),(107,'2020-01-31 19:09:23'),(108,'2020-01-31 19:27:40'),(109,'2020-01-31 19:28:54'),(110,'2020-01-31 19:30:57'),(111,'2020-01-31 19:31:50'),(112,'2020-01-31 19:39:45'),(113,'2020-01-31 19:41:40'),(114,'2020-01-31 19:47:26'),(115,'2020-01-31 19:50:32'),(116,'2020-01-31 19:52:17'),(117,'2020-01-31 19:53:01'),(118,'2020-01-31 19:54:21'),(119,'2020-01-31 19:56:05'),(120,'2020-01-31 20:07:29'),(121,'2020-01-31 20:10:23'),(122,'2020-01-31 20:27:08'),(123,'2020-01-31 20:28:35'),(124,'2020-01-31 20:36:42'),(125,'2020-01-31 20:37:19'),(126,'2020-01-31 20:41:03'),(127,'2020-01-31 20:50:52'),(128,'2020-01-31 20:59:08'),(129,'2020-01-31 21:07:07'),(130,'2020-01-31 21:11:54'),(131,'2020-01-31 21:14:26'),(132,'2020-01-31 21:15:31'),(133,'2020-01-31 21:16:23'),(134,'2020-01-31 21:17:58'),(135,'2020-01-31 21:21:14'),(136,'2020-01-31 21:23:54'),(137,'2020-01-31 21:27:02'),(138,'2020-01-31 21:27:59'),(139,'2020-01-31 21:33:55'),(140,'2020-01-31 21:34:52'),(141,'2020-01-31 21:36:18'),(142,'2020-01-31 21:39:27'),(143,'2020-01-31 21:45:20'),(144,'2020-01-31 21:56:09'),(145,'2020-01-31 21:57:25'),(146,'2020-01-31 22:04:02'),(147,'2020-01-31 22:28:33'),(148,'2020-01-31 23:10:35'),(149,'2020-02-01 01:53:41'),(150,'2020-02-01 02:06:01'),(151,'2020-02-03 04:54:13'),(152,'2020-02-03 05:02:37'),(153,'2020-02-03 05:50:35'),(154,'2020-02-03 05:51:33'),(155,'2020-02-03 05:52:01'),(156,'2020-02-03 05:54:40'),(157,'2020-02-03 05:57:42'),(158,'2020-02-03 13:49:37'),(159,'2020-02-03 14:10:35');
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL AUTO_INCREMENT,
  `cartId` int(11) NOT NULL,
  `name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `creditCard` varchar(24) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shippingAddress` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB AUTO_INCREMENT=148 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,4,'','','','2019-11-30 05:42:50'),(2,5,'','','','2019-11-30 05:59:34'),(3,10,'James Cobbler','12345678','Irvine,CA','2019-11-30 18:46:28'),(4,11,'James Cobbler','12345678','Irvine,CA','2019-11-30 18:47:37'),(5,12,'James Cobbler','12345678','Irvine,CA','2019-11-30 18:51:05'),(6,13,'James Cobbler','12345678','Irvine,CA','2019-11-30 18:54:08'),(7,14,'James Cobbler','12345678','Irvine,CA','2019-12-16 20:22:11'),(8,15,'Tim Davis','12345678','123 Mian street','2019-12-16 20:27:36'),(9,16,'Tim Davis','12345678','123 Mian street','2019-12-16 20:35:18'),(10,17,'Tim Davis','12345678','123 Mian street','2019-12-16 20:40:40'),(11,18,'Tim Davis','12345678','123 Mian street','2019-12-16 20:47:24'),(12,19,'Tim Davis','12345678','123 Mian street','2019-12-16 20:48:43'),(13,20,'Tim Davis','12345678','123 Mian street','2019-12-16 20:55:06'),(14,21,'Tim Davis','12345678','123 Mian street','2019-12-16 21:22:49'),(15,22,'hhhh','123345','jhgdfksdhf','2019-12-17 01:32:37'),(16,23,'abcd','12345667','agfgfjhg','2019-12-17 01:39:54'),(17,24,'Vandana','123455667','123 Main strret','2019-12-17 18:26:41'),(18,25,'Vandana Khaparde','000 0000 0000','123 Mainstreet,\nTrvine,Ca','2019-12-17 19:30:09'),(19,27,'Tim Davis','000 000 0000','1234 view street,\nIrvine,CA','2019-12-17 23:01:35'),(20,28,'Tillu ','1111','bsdkbskgjrh','2019-12-17 23:46:19'),(21,29,'Rish','123123123','wererte','2019-12-18 01:34:41'),(22,30,'Ajit Khaparde','0000000000','Irvine','2019-12-18 01:43:18'),(23,31,'Xyz','000 0000 00000','Irvine','2019-12-18 16:57:25'),(24,32,'Uzair','13123123','16550 Copper Kettle Way','2019-12-19 19:23:26'),(25,34,'Vandana','0000000000000000','324 Quail Meadow','2019-12-22 03:11:16'),(26,35,'ChuckyCheese','000000000','Irnine','2019-12-23 13:38:17'),(27,36,'abcd','000000000','Irvine','2019-12-23 22:59:57'),(28,37,'ChuckyCheese','00000000000','Irvine','2019-12-25 04:09:39'),(29,38,'abcd','000000000','Irvine','2019-12-25 05:24:33'),(30,39,'ChuckyCheese','00000000000','Irvine','2019-12-25 05:45:15'),(31,40,'abcd','0000000000','Irvine','2019-12-26 04:43:57'),(32,41,'abcd','0000000000','Irvine','2019-12-26 05:10:55'),(33,42,'abcd','000000000','Irvine','2019-12-26 05:14:40'),(34,43,'abcd','0000','Irvine','2019-12-26 22:09:37'),(35,44,'ChuckyCheese','000000','324 Quail Meadow','2019-12-31 03:12:39'),(36,45,'ChuckyCheese','000000000','324 Quail Meadow','2020-01-06 20:18:14'),(37,47,'ChuckyCheese','0000000000','324 Quail Meadow','2020-01-06 20:46:06'),(38,48,'ChuckyCheese','000000000','Irvine','2020-01-06 22:01:45'),(39,49,'ChuckyCheese','000000000','324 Quail Meadow','2020-01-07 01:12:21'),(40,50,'ChuckyCheese','222220000000','324 Quail Meadow\nAustin\n','2020-01-08 02:56:40'),(41,52,'ChuckyCheese','00000000000000','324 Quail Meadow','2020-01-08 20:08:27'),(42,53,'ChuckyCheese','00000000000000000','324 Quail Meadow,\nTrvine,\nCalifornia 9241652512768','2020-01-08 20:19:20'),(43,54,'ChuckyCheese','0000000','Irvine','2020-01-08 20:26:16'),(44,55,'ChuckyCheese','000000000','324 Quail Meadow','2020-01-08 20:33:11'),(45,56,'Chucky','000000000000','123 street, Irvine','2020-01-09 21:00:59'),(46,57,'jhkjk','0000000000','oiqwpoeiwepor','2020-01-09 21:01:23'),(47,58,'hhlk',',,mn.,m;l','jhlk','2020-01-09 21:13:05'),(48,59,'nbkbjl','.lml','sdas','2020-01-09 21:13:17'),(49,60,'hkjhkjlk','00000000000','abcd, Irvine','2020-01-19 02:01:08'),(50,61,'abcd','00000000000','Irvine','2020-01-28 01:00:23'),(51,62,'abcd','00000000000000','Irvie','2020-01-28 03:10:30'),(52,63,'aaaa','22222','wwwwwwww','2020-01-28 05:58:36'),(53,64,'aaaaaa','000000000000','kjsdhjsdhflkj','2020-01-29 22:15:38'),(54,65,'aaa','333','sss','2020-01-30 22:34:33'),(55,66,'aa','222','qqqq','2020-01-30 22:38:56'),(56,67,'aaa','333','ssss','2020-01-30 22:40:36'),(57,68,'aa','4444','sssss','2020-01-30 22:47:57'),(58,69,'aaa','2222','sssss','2020-01-30 22:57:38'),(59,70,'aaa','111','ddd','2020-01-30 22:58:36'),(60,71,'qq','5555','dddd','2020-01-30 23:09:15'),(61,72,'aa','44444','dddd','2020-01-30 23:17:45'),(62,73,'aaaaaaa','2','wwww','2020-01-30 23:24:27'),(63,74,'aaa','3333333','ssss','2020-01-30 23:30:03'),(64,75,'a','33','aaa','2020-01-30 23:30:36'),(65,76,'aaa','33333','qqqq','2020-01-31 01:48:44'),(66,77,'aaa','222','qqqq','2020-01-31 01:58:24'),(67,78,'aa','111','qqq','2020-01-31 02:00:04'),(68,79,'aaa','2222','aaaa','2020-01-31 02:05:06'),(69,80,'aaa','222','aa','2020-01-31 02:07:33'),(70,81,'aaa','222','aaaa','2020-01-31 02:10:26'),(71,82,'aa','111','qqq','2020-01-31 02:14:22'),(72,83,'qqq','1111111','aaaa','2020-01-31 02:14:59'),(73,84,'aaa','111','aaa','2020-01-31 02:18:16'),(74,85,'aa','222','aaa','2020-01-31 02:19:57'),(75,86,'aaa','111','aaa','2020-01-31 02:30:05'),(76,87,'aaaa','11','aaa','2020-01-31 02:34:23'),(77,88,'aaa','111','aaa','2020-01-31 02:34:57'),(78,89,'aa','111','aaa','2020-01-31 02:39:28'),(79,90,'aaa','111','aaa','2020-01-31 02:42:22'),(80,91,'aaaa','11111','qqqq','2020-01-31 02:50:59'),(81,92,'qqq','11111','aaaa','2020-01-31 02:53:24'),(82,93,'11','222','qqq','2020-01-31 02:54:38'),(83,94,'qqq','5555','aaa','2020-01-31 02:55:41'),(84,95,'aaa','111','sss','2020-01-31 02:56:12'),(85,96,'qqq','777','ddd','2020-01-31 02:57:01'),(86,97,'eeeeee','2222','111dfgdf','2020-01-31 02:58:51'),(87,98,'ssss','2222','ssss','2020-01-31 02:59:47'),(88,99,'aaa','555','aaa','2020-01-31 03:02:42'),(89,100,'aa','33','4444','2020-01-31 03:03:47'),(90,101,'www','55555','sdfsd','2020-01-31 03:05:17'),(91,102,'aaaa','222','wwwww','2020-01-31 03:11:41'),(92,103,'aa','2222','aaa','2020-01-31 18:55:55'),(93,104,'aa','333','aaaa','2020-01-31 18:59:29'),(94,105,'dfgds','44444','asdasda','2020-01-31 19:04:49'),(95,106,'sdasd','4444','dsdf','2020-01-31 19:06:32'),(96,107,'aa','6666','sa','2020-01-31 19:25:32'),(97,108,'dfgdf','44444','dfgdfg','2020-01-31 19:27:48'),(98,109,'sss','554','dfsdf','2020-01-31 19:29:11'),(99,110,'cadas','222','asas','2020-01-31 19:31:05'),(100,111,'aaaa','222','dfsdf','2020-01-31 19:38:11'),(101,112,'Za','111','asxas','2020-01-31 19:39:54'),(102,113,'aaa','657675','dasdas','2020-01-31 19:44:13'),(103,114,'aaa','3222','sas','2020-01-31 19:47:57'),(104,115,'aaa','32234','dfsd','2020-01-31 19:50:46'),(105,116,'asda','222','sdfsd','2020-01-31 19:52:26'),(106,117,'hhhh','5555','bgkj','2020-01-31 19:53:11'),(107,118,'aaa','22222','dfsdfsd','2020-01-31 19:54:46'),(108,119,'aaa','343333','sdsd','2020-01-31 19:56:18'),(109,120,'aa','453453','zxasd','2020-01-31 20:07:38'),(110,121,'sdasd','222','sdasd','2020-01-31 20:10:32'),(111,122,'axas','222','aas','2020-01-31 20:28:27'),(112,123,'dsfs','333','dff','2020-01-31 20:34:30'),(113,124,'asds','444','asdsa','2020-01-31 20:36:59'),(114,125,'aSas','222','saa','2020-01-31 20:40:48'),(115,126,'asd','222','aasdas','2020-01-31 20:49:49'),(116,127,'sdfds','3434','dfsd','2020-01-31 20:58:22'),(117,128,'adfsdf','1234234','sdsdfs','2020-01-31 21:06:33'),(118,129,'xc','453','sdfsd','2020-01-31 21:11:20'),(119,130,'dasdaasdsa','123123','sdasd','2020-01-31 21:13:53'),(120,131,'dasdasd','2222','cvsv','2020-01-31 21:14:47'),(121,132,'asdas','222','asdasd','2020-01-31 21:15:53'),(122,133,'asda','1213','dsfsd','2020-01-31 21:16:30'),(123,134,'saS','23423','DSD','2020-01-31 21:18:09'),(124,135,'FSDFSDF','345345','gdf','2020-01-31 21:22:08'),(125,136,'df','45','gerte','2020-01-31 21:25:55'),(126,137,'qweqw','46554','zxc','2020-01-31 21:27:30'),(127,138,'wer','333','dfsd','2020-01-31 21:33:17'),(128,139,'asdasd','4534','sdfsd','2020-01-31 21:34:22'),(129,140,'sdsd','3123','cxvxc','2020-01-31 21:35:50'),(130,141,'sdas','212','sdas','2020-01-31 21:37:02'),(131,142,'ssa','23','csd','2020-01-31 21:44:45'),(132,143,'asda4','21312','asdas','2020-01-31 21:55:32'),(133,144,'sdas4','324234235351251','aSas','2020-01-31 21:57:18'),(134,145,'asdas','1','sasas','2020-01-31 21:57:54'),(135,146,'dfds2323','23','asdasd','2020-01-31 22:28:03'),(136,147,'asdasd','423423','sdfsdfsdf','2020-01-31 22:31:24'),(137,148,'asdas','345345','SDFSDFSDF','2020-01-31 23:10:59'),(138,149,'zumba','12397023079','paratha','2020-02-01 01:55:19'),(139,150,'sddfsdfsdf','2341','dfsdfsdfsdfdsfsdf','2020-02-01 02:06:48'),(140,151,'dfsdfsdfsfdf','43534534534534534534534','sdfsdfdfdsfsdfsdfs','2020-02-03 05:00:55'),(141,152,'ddfdsfsdfds','0000000000000000','sdfsdfcvsdfsdfdsfsdfsdfsdfsdf','2020-02-03 05:50:26'),(142,153,'aas4444','000000000000000000','sdsw','2020-02-03 05:51:11'),(143,154,'vsdffsf','00000000000000000','dfgdfgdfgfdfgdfgdfgfddfgd','2020-02-03 05:51:58'),(144,155,'arrrrrrrr','0000000000000000','bbb','2020-02-03 05:52:50'),(145,156,'sdfsdfsdf','0000000000000000','jj','2020-02-03 05:55:23'),(146,157,'sdfiiiii','000000000000000','dfsd','2020-02-03 05:58:40'),(147,158,'dfsdiiiiii','0000000000','sads','2020-02-03 14:08:10');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `productId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shortDescription` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `longDescription` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (5,'Blender',4999,'/images/blender.jpeg','Oster Classic Series Blender with Travel Smoothie Cup','Powerful blender features 700 power watts and 450 blending watts; 8 speeds including high, medium, low, and pulse let you make smoothies and shakes, shred and grate cheese, grind coffee beans, puree fresh vegetables and fruit, and more...\r\nDurable stainless Steel Crush Pro 4® blade design.\r\n3-year satisfaction guarantee.\r\nIncludes 20 oz. Blend-N-Go smoothie cup, so you can take your smoothie with you on the go.\r\n6-cup dishwasher-safe glass jar with built in markings for easy measuring'),(6,'InstantPot',9500,'/images/instantpot.jpg','Instant Pot Duo 60 7-in-1 Multi-Use Programmable Pressure','The best-selling Instant Pot® Duo™ multicooker not only replaces 7 appliances, but it also speeds up cooking by 2-6 times and saves up to 70% of the energy used in traditional cooking methods. The Duo™ line features a solid range of Smart Programs and features that will revolutionize the way you cook.\r\n\r\nThe Instant Pot Duo 7-in-1 comes in 3 convenient sizes to suit the way you cook: 3, 6 and 8 Quarts. All sizes come with 11 standard one-touch Smart Programs — Soup/Broth, Meat/Stew, Bean/Chili, Slow Cook, Sauté, Rice, Porridge, Steam, Yogurt, Keep Warm, and Pressure Cook, while the 6 and 8-Quart Duo boast two extra presets for Multigrain and Poultry.'),(7,'Toaster',1954,'/images/toaster2.jpg','Bonsenkitchen 2-slice Black Toaster Small Compact Bread Toaster for Space Saving.','Bonsenkitchen TR8701 toaster is a brilliant kitchen assistant to make your home breakfast and office afternoon tea easier.\r\n\r\n2-slice and compact design is space-saving and perfect for your kitchen. 7 shade selection settings from the lightest stage 1 to darkest stage 7 and defrost, reheat, cancel function with red indication lights meet your variable toasting demands.\r\n\r\nThe toaster will switch off immediately once the toasting setting has been reached, then the toasted bread will be popped up automatically for safe reach.\r\n\r\nWith a sliding crumb tray, it is easy to clean up the toaster once toasting is finished and the machine has been cool down.'),(8,'WaffleMaker',4999,'/images/wafflemkr.jpeg','Cusinart Flip Belgian Waffle Maker with Removable Grids ','Imagine tasting fluffy, Belgian-style waffles for breakfast every morning. Then, imagine the satisfaction of being able to make a vanilla waffle one day and add nuts, fruit or even dessert toppings to your batter on the next. Now, envision this breakfast experience with no mess and effortless cleanup. You can stop dreaming and wake up, the Cusinart Flip Belgian Waffle Maker is in the kitchen and expecting you for breakfast. With an ultra flip design, this waffle maker expertly bakes golden brown, fluffy waffles and gives you total flipping control so you can create restaurant-quality results right at home. Make your waffle just the way you want it – lighter or darker – in just minutes. Designed for the thickest batter and most complex waffle, the Cusinart Flip Belgian Waffle Maker has Belgian-style grids with deep pockets to hold plenty of toppings. Even better, the nonstick grids are removable to go in the dishwasher for easy cleanup afterwards. '),(9,'WaterFilter',4699,'/images/britafilter.jpg','Ultra Max with Longlast Filters, Extra Large 18 Cup, Black by Brita\r\n','BPA REDUCE WASTE & SAVE: One Brita Longlast Filter can replace 900 standard 16 oz. water bottles. You’ll stay hydrated, save money, and reduce plastic waste Free.\r\nThe Brita standard filter reduces chlorine (taste and odor), copper, mercury, zinc and cadmium impurities found in tap water for cleaner great tasting water for the whole family.\r\n'),(10,'Cookware Set',42999,'/images/calphalon.jpg','Calphalon Tri-Ply Stainless Steel Classic Pots And Pans Set, 13-Piece Cookware Set','Perfect gourmet results. Combining the long-lasting radiance of stainless steel with the superior performance of a highly conductive, heavy-gauge aluminum core, Calphalon Tri-Ply cookware makes it easy to prepare mouthwatering meals day after day -- each more memorable than the last. Lifetime warranty.\r\n\r\n13-piece set includes:\r\n8\" omelette pan\r\n10\" omelette pan\r\n12\" omelette pan\r\n1.5-qt. saucepan and lid\r\n2-qt. saucepan and lid\r\n3-qt. chef\'s pan and lid\r\n3-qt. sauté pan and lid\r\n6-qt. stockpot and lid'),(11,'Coffee Maker',7900,'/images/coffeemaker2.jpg','Black Decker Coffee Maker, Single Serve K-Cup Pod Coffee Brewer.','The Black Decker single serve coffee maker combines sleek design and more intuitive features to help you brew your perfect cup every single time. It features four brew sizes, so you can brew 6, 8, 10, or up to 12 oz. of your favorite coffee, tea, hot cocoa, or iced beverage with the touch of a button. And for those who like a stronger cup of coffee, the Black Decker brewer is the perfect choice. The Strong Brew feature kicks up your coffee’s strength and intensity, so you can enjoy a bolder brew. Choose from hundreds of delicious varieties of K-Cup pods, or brew your own ground coffee with the My-K-Cup Universal Reusable Coffee Filter (sold separately). With this brewer, you can brew 5 cups between refills of the large 52 oz. water reservoir.'),(12,'Sandwich Grill',1999,'/images/sandwich.jpg','Cuisinart WM-SW2N Dual-Sandwich Nonstick Electric Grill ','The versatile Cuisinart Sandwich Grill does more than just lunch; press sandwiches, grill omelets, and even crisp French toast in one product! Perfect for dorm rooms and cozy kitchens, the Sandwich Grill can make two items at once, with a lock-down lid guaranteeing both sides cook evenly while the nonstick plates seal in your favorite ingredients. Sizzling cheese sandwiches and fluffy omelets come out perfectly every time with dual indicator lights letting you know when the grill is ready to cook and your meal is ready to eat. The nonstick plates wipe clean after use and the lid lock and cord wrap make storage easy.\r\n\r\n'),(13,'Dinner Set',7999,'/images/dinnerset.jpg','Zanzibar Dinnerware Set (16-Piece)','Featuring bright and colorful artisan-inspired designs, this versatile and durable dinnerware set is ideal for everyday or party use.\r\nDesigned in Europe.\r\nMade from high fired earthenware material.\r\n');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-03 14:54:28
