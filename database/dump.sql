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
) ENGINE=InnoDB AUTO_INCREMENT=274 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartItems`
--

LOCK TABLES `cartItems` WRITE;
/*!40000 ALTER TABLE `cartItems` DISABLE KEYS */;
INSERT INTO `cartItems` VALUES (1,1,9,9900),(2,1,8,999),(3,1,7,2900),(4,2,6,2595),(5,2,7,2900),(6,2,10,830),(7,2,10,830),(8,2,9,9900),(9,2,5,2999),(10,2,5,2999),(11,2,6,2595),(12,2,8,999),(13,2,7,2900),(14,2,7,2900),(15,2,6,2595),(16,2,9,9900),(17,2,5,2999),(18,2,6,2595),(19,2,6,2595),(20,3,6,2595),(21,3,5,2999),(22,3,9,9900),(23,4,9,9900),(24,4,10,830),(25,4,6,2595),(26,5,6,2595),(27,5,7,2900),(28,5,8,999),(29,6,6,2595),(30,6,7,2900),(31,6,8,999),(32,7,9,9900),(33,7,10,830),(34,8,6,2595),(35,8,5,2999),(36,8,7,2900),(37,9,5,2999),(38,9,6,2595),(39,10,6,2595),(40,10,7,2900),(41,10,8,999),(42,11,8,999),(43,11,9,9900),(44,11,7,2900),(45,12,7,2900),(46,12,9,9900),(47,13,9,9900),(48,13,10,830),(49,14,8,999),(50,14,9,9900),(51,14,10,830),(52,15,10,830),(53,15,7,2900),(54,15,8,999),(55,16,8,999),(56,16,9,9900),(57,17,9,9900),(58,17,10,830),(59,18,10,830),(60,19,10,830),(61,20,10,830),(62,21,7,2900),(63,21,8,999),(64,22,7,2900),(65,22,5,2999),(66,22,6,2595),(67,22,8,999),(68,23,7,2900),(69,23,5,2999),(70,23,10,830),(71,24,5,2999),(72,24,6,2595),(73,24,7,2900),(74,24,6,2595),(75,24,10,830),(76,25,5,2999),(77,25,9,9900),(78,25,6,2595),(79,26,5,2999),(80,27,7,2900),(81,27,5,2999),(82,27,5,2999),(83,27,5,3999),(84,27,7,1954),(85,27,7,1954),(86,27,5,3999),(87,27,6,9500),(88,28,10,42999),(89,28,10,42999),(90,28,12,1999),(91,28,10,42999),(92,28,10,42999),(93,28,5,4999),(94,28,5,4999),(95,28,5,4999),(96,28,5,4999),(97,29,10,42999),(98,29,6,9500),(99,29,13,7999),(100,29,13,7999),(101,30,13,7999),(102,31,5,4999),(103,31,5,4999),(104,31,5,4999),(105,31,7,1954),(106,31,9,4699),(107,31,9,4699),(108,32,5,4999),(109,33,7,1954),(110,34,5,4999),(111,34,6,9500),(112,35,6,9500),(113,35,7,1954),(114,35,5,4999),(115,35,5,4999),(116,35,6,9500),(117,36,7,1954),(118,36,6,9500),(119,36,12,1999),(120,36,12,1999),(121,37,5,4999),(122,37,6,9500),(123,37,6,9500),(124,37,6,9500),(125,37,7,1954),(126,37,13,7999),(127,37,13,7999),(128,37,13,7999),(129,37,6,9500),(130,37,5,4999),(131,38,6,9500),(132,38,6,9500),(133,38,7,1954),(134,38,7,1954),(135,38,7,1954),(136,38,7,1954),(137,38,5,4999),(138,38,5,4999),(139,38,5,4999),(140,38,5,4999),(141,38,7,1954),(142,38,9,4699),(143,38,10,42999),(144,38,10,42999),(145,38,11,7900),(146,38,11,7900),(147,38,11,7900),(148,38,13,7999),(149,38,5,4999),(150,38,6,9500),(151,38,6,9500),(152,38,7,1954),(153,38,6,9500),(154,38,6,9500),(155,38,8,4999),(156,38,5,4999),(157,38,6,9500),(158,38,6,9500),(159,38,6,9500),(160,38,6,9500),(161,38,6,9500),(162,38,7,1954),(163,38,13,7999),(164,38,13,7999),(165,38,13,7999),(166,38,11,7900),(167,38,5,4999),(168,38,6,9500),(169,38,7,1954),(170,38,8,4999),(171,38,10,42999),(172,38,13,7999),(173,38,6,9500),(174,38,5,4999),(175,38,7,1954),(176,38,9,4699),(177,38,12,1999),(178,38,9,4699),(179,38,11,7900),(180,38,13,7999),(181,38,13,7999),(182,38,13,7999),(183,38,13,7999),(184,38,13,7999),(185,38,13,7999),(186,38,13,7999),(187,38,13,7999),(188,38,13,7999),(189,38,13,7999),(190,38,13,7999),(191,38,13,7999),(192,38,13,7999),(193,38,6,9500),(194,39,5,4999),(195,39,5,4999),(196,39,5,4999),(197,39,5,4999),(198,39,5,4999),(199,40,6,9500),(200,40,6,9500),(201,40,6,9500),(202,40,6,9500),(203,40,6,9500),(204,40,6,9500),(205,40,7,1954),(206,40,7,1954),(207,40,7,1954),(208,40,6,9500),(209,40,7,1954),(210,40,6,9500),(211,40,6,9500),(212,40,7,1954),(213,40,7,1954),(214,40,5,4999),(215,40,5,4999),(216,40,7,1954),(217,40,7,1954),(218,40,8,4999),(219,40,8,4999),(220,40,8,4999),(221,40,10,42999),(222,40,9,4699),(223,40,9,4699),(224,40,9,4699),(225,40,12,1999),(226,40,12,1999),(227,40,12,1999),(228,40,12,1999),(229,40,12,1999),(230,40,13,7999),(231,40,13,7999),(232,40,13,7999),(233,40,13,7999),(234,40,13,7999),(235,40,11,7900),(236,40,11,7900),(237,40,11,7900),(238,40,11,7900),(239,40,11,7900),(240,40,5,4999),(241,40,5,4999),(242,40,5,4999),(243,40,5,4999),(244,41,5,4999),(245,41,5,4999),(246,41,5,4999),(247,41,6,9500),(248,41,6,9500),(249,41,7,1954),(250,41,7,1954),(251,42,5,4999),(252,42,5,4999),(253,42,5,4999),(254,42,5,4999),(255,42,5,4999),(256,42,5,4999),(257,42,5,4999),(258,42,5,4999),(259,42,6,9500),(260,42,6,9500),(261,42,6,9500),(262,42,6,9500),(263,42,6,9500),(264,42,6,9500),(265,42,6,9500),(266,43,5,4999),(267,43,5,4999),(268,43,5,4999),(269,43,6,9500),(270,44,6,9500),(271,44,7,1954),(272,44,6,9500),(273,44,5,4999);
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
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,'2019-11-21 18:45:46'),(2,'2019-11-21 23:17:08'),(3,'2019-11-30 04:47:57'),(4,'2019-11-30 05:02:23'),(5,'2019-11-30 05:55:26'),(6,'2019-11-30 06:13:11'),(7,'2019-11-30 06:18:58'),(8,'2019-11-30 06:26:18'),(9,'2019-11-30 06:28:25'),(10,'2019-11-30 18:46:08'),(11,'2019-11-30 18:47:01'),(12,'2019-11-30 18:50:48'),(13,'2019-11-30 18:53:23'),(14,'2019-12-16 20:21:22'),(15,'2019-12-16 20:27:05'),(16,'2019-12-16 20:34:57'),(17,'2019-12-16 20:40:25'),(18,'2019-12-16 20:47:08'),(19,'2019-12-16 20:48:35'),(20,'2019-12-16 20:55:02'),(21,'2019-12-16 21:22:19'),(22,'2019-12-17 00:52:00'),(23,'2019-12-17 01:39:21'),(24,'2019-12-17 01:40:03'),(25,'2019-12-17 18:38:36'),(26,'2019-12-17 21:14:42'),(27,'2019-12-17 21:14:50'),(28,'2019-12-17 23:32:10'),(29,'2019-12-18 00:45:27'),(30,'2019-12-18 01:42:44'),(31,'2019-12-18 02:58:51'),(32,'2019-12-19 19:20:26'),(33,'2019-12-19 19:23:43'),(34,'2019-12-22 03:10:31'),(35,'2019-12-22 03:14:36'),(36,'2019-12-23 13:38:53'),(37,'2019-12-24 01:02:10'),(38,'2019-12-25 04:10:46'),(39,'2019-12-25 05:24:43'),(40,'2019-12-25 05:45:21'),(41,'2019-12-26 04:44:06'),(42,'2019-12-26 05:12:11'),(43,'2019-12-26 21:59:06'),(44,'2019-12-26 22:10:13');
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
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,4,'','','','2019-11-30 05:42:50'),(2,5,'','','','2019-11-30 05:59:34'),(3,10,'James Cobbler','12345678','Irvine,CA','2019-11-30 18:46:28'),(4,11,'James Cobbler','12345678','Irvine,CA','2019-11-30 18:47:37'),(5,12,'James Cobbler','12345678','Irvine,CA','2019-11-30 18:51:05'),(6,13,'James Cobbler','12345678','Irvine,CA','2019-11-30 18:54:08'),(7,14,'James Cobbler','12345678','Irvine,CA','2019-12-16 20:22:11'),(8,15,'Tim Davis','12345678','123 Mian street','2019-12-16 20:27:36'),(9,16,'Tim Davis','12345678','123 Mian street','2019-12-16 20:35:18'),(10,17,'Tim Davis','12345678','123 Mian street','2019-12-16 20:40:40'),(11,18,'Tim Davis','12345678','123 Mian street','2019-12-16 20:47:24'),(12,19,'Tim Davis','12345678','123 Mian street','2019-12-16 20:48:43'),(13,20,'Tim Davis','12345678','123 Mian street','2019-12-16 20:55:06'),(14,21,'Tim Davis','12345678','123 Mian street','2019-12-16 21:22:49'),(15,22,'hhhh','123345','jhgdfksdhf','2019-12-17 01:32:37'),(16,23,'abcd','12345667','agfgfjhg','2019-12-17 01:39:54'),(17,24,'Vandana','123455667','123 Main strret','2019-12-17 18:26:41'),(18,25,'Vandana Khaparde','000 0000 0000','123 Mainstreet,\nTrvine,Ca','2019-12-17 19:30:09'),(19,27,'Tim Davis','000 000 0000','1234 view street,\nIrvine,CA','2019-12-17 23:01:35'),(20,28,'Tillu ','1111','bsdkbskgjrh','2019-12-17 23:46:19'),(21,29,'Rish','123123123','wererte','2019-12-18 01:34:41'),(22,30,'Ajit Khaparde','0000000000','Irvine','2019-12-18 01:43:18'),(23,31,'Xyz','000 0000 00000','Irvine','2019-12-18 16:57:25'),(24,32,'Uzair','13123123','16550 Copper Kettle Way','2019-12-19 19:23:26'),(25,34,'Vandana','0000000000000000','324 Quail Meadow','2019-12-22 03:11:16'),(26,35,'ChuckyCheese','000000000','Irnine','2019-12-23 13:38:17'),(27,36,'abcd','000000000','Irvine','2019-12-23 22:59:57'),(28,37,'ChuckyCheese','00000000000','Irvine','2019-12-25 04:09:39'),(29,38,'abcd','000000000','Irvine','2019-12-25 05:24:33'),(30,39,'ChuckyCheese','00000000000','Irvine','2019-12-25 05:45:15'),(31,40,'abcd','0000000000','Irvine','2019-12-26 04:43:57'),(32,41,'abcd','0000000000','Irvine','2019-12-26 05:10:55'),(33,42,'abcd','000000000','Irvine','2019-12-26 05:14:40'),(34,43,'abcd','0000','Irvine','2019-12-26 22:09:37');
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
INSERT INTO `products` VALUES (5,'Blender',4999,'/images/blender.jpeg','Oster Classic Series Blender with Travel Smoothie Cup','Powerful blender features 700 power watts and 450 blending watts; 8 speeds including high, medium, low, and pulse let you make smoothies and shakes, shred and grate cheese, grind coffee beans, puree fresh vegetables and fruit, and more...\r\nDurable stainless Steel Crush Pro 4® blade design.\r\n3-year satisfaction guarantee.\r\nIncludes 20 oz. Blend-N-Go smoothie cup, so you can take your smoothie with you on the go.\r\n6-cup dishwasher-safe glass jar with built in markings for easy measuring'),(6,'InstantPot',9500,'/images/instantpot.jpg','Instant Pot Duo 60 7-in-1 Multi-Use Programmable Pressure','The best-selling Instant Pot® Duo™ multicooker not only replaces 7 appliances, but it also speeds up cooking by 2-6 times and saves up to 70% of the energy used in traditional cooking methods. The Duo™ line features a solid range of Smart Programs and features that will revolutionize the way you cook.\r\n\r\nThe Instant Pot Duo 7-in-1 comes in 3 convenient sizes to suit the way you cook: 3, 6 and 8 Quarts. All sizes come with 11 standard one-touch Smart Programs — Soup/Broth, Meat/Stew, Bean/Chili, Slow Cook, Sauté, Rice, Porridge, Steam, Yogurt, Keep Warm, and Pressure Cook, while the 6 and 8-Quart Duo boast two extra presets for Multigrain and Poultry.'),(7,'Toaster',1954,'/images/toaster.jpeg','Bonsenkitchen 2-slice Black Toaster Small Compact Bread Toaster for Space Saving.','Bonsenkitchen TR8701 toaster is a brilliant kitchen assistant to make your home breakfast and office afternoon tea easier.\r\n\r\n2-slice and compact design is space-saving and perfect for your kitchen. 7 shade selection settings from the lightest stage 1 to darkest stage 7 and defrost, reheat, cancel function with red indication lights meet your variable toasting demands.\r\n\r\nThe toaster will switch off immediately once the toasting setting has been reached, then the toasted bread will be popped up automatically for safe reach.\r\n\r\nWith a sliding crumb tray, it is easy to clean up the toaster once toasting is finished and the machine has been cool down.'),(8,'WaffleMaker',4999,'/images/wafflemaker.jpeg','Hamilton Beach Flip Belgian Waffle Maker with Removable Grids ','Imagine tasting fluffy, Belgian-style waffles for breakfast every morning. Then, imagine the satisfaction of being able to make a vanilla waffle one day and add nuts, fruit or even dessert toppings to your batter on the next. Now, envision this breakfast experience with no mess and effortless cleanup. You can stop dreaming and wake up, the Hamilton Beach Flip Belgian Waffle Maker is in the kitchen and expecting you for breakfast. With an ultra flip design, this waffle maker expertly bakes golden brown, fluffy waffles and gives you total flipping control so you can create restaurant-quality results right at home. Make your waffle just the way you want it – lighter or darker – in just minutes. Designed for the thickest batter and most complex waffle, the Hamilton Beach Flip Belgian Waffle Maker has Belgian-style grids with deep pockets to hold plenty of toppings. Even better, the nonstick grids are removable to go in the dishwasher for easy cleanup afterwards. '),(9,'WaterFilter',4699,'/images/britafilter.jpg','Ultra Max with Longlast Filters, Extra Large 18 Cup, Black by Brita\r\n','BPA REDUCE WASTE & SAVE: One Brita Longlast Filter can replace 900 standard 16 oz. water bottles. You’ll stay hydrated, save money, and reduce plastic waste Free.\r\nThe Brita standard filter reduces chlorine (taste and odor), copper, mercury, zinc and cadmium impurities found in tap water for cleaner great tasting water for the whole family.\r\n'),(10,'Cookware Set',42999,'/images/calphalon.jpg','Calphalon Tri-Ply Stainless Steel Classic Pots And Pans Set, 13-Piece Cookware Set','Perfect gourmet results. Combining the long-lasting radiance of stainless steel with the superior performance of a highly conductive, heavy-gauge aluminum core, Calphalon Tri-Ply cookware makes it easy to prepare mouthwatering meals day after day -- each more memorable than the last. Lifetime warranty.\r\n\r\n13-piece set includes:\r\n8\" omelette pan\r\n10\" omelette pan\r\n12\" omelette pan\r\n1.5-qt. saucepan and lid\r\n2-qt. saucepan and lid\r\n3-qt. chef\'s pan and lid\r\n3-qt. sauté pan and lid\r\n6-qt. stockpot and lid'),(11,'Coffee Maker',7900,'/images/coffeemaker.jpg','Keurig K-Select Coffee Maker, Single Serve K-Cup Pod Coffee Brewer, With Strength Control and Hot Water On Demand, Matte Black','The Keurig K-Select single serve coffee maker combines sleek design and more intuitive features to help you brew your perfect cup every single time. It features four brew sizes, so you can brew 6, 8, 10, or up to 12 oz. of your favorite coffee, tea, hot cocoa, or iced beverage with the touch of a button. And for those who like a stronger cup of coffee, the Keurig K-Select brewer is the perfect choice. The Strong Brew feature kicks up your coffee’s strength and intensity, so you can enjoy a bolder brew. Choose from hundreds of delicious varieties of K-Cup pods, or brew your own ground coffee with the My-K-Cup Universal Reusable Coffee Filter (sold separately). With the K-Select brewer, you can brew 5 cups between refills of the large 52 oz. water reservoir.'),(12,'Sandwich Grill',1999,'/images/sandwichgrill.jpg','Cuisinart WM-SW2N Dual-Sandwich Nonstick Electric Grill ','The versatile Cuisinart Sandwich Grill does more than just lunch; press sandwiches, grill omelets, and even crisp French toast in one product! Perfect for dorm rooms and cozy kitchens, the Sandwich Grill can make two items at once, with a lock-down lid guaranteeing both sides cook evenly while the nonstick plates seal in your favorite ingredients. Sizzling cheese sandwiches and fluffy omelets come out perfectly every time with dual indicator lights letting you know when the grill is ready to cook and your meal is ready to eat. The nonstick plates wipe clean after use and the lid lock and cord wrap make storage easy.\r\n\r\n'),(13,'Dinner Set',7999,'/images/dinnerset.jpg','Zanzibar Dinnerware Set (16-Piece)','Featuring bright and colorful artisan-inspired designs, this versatile and durable dinnerware set is ideal for everyday or party use.\r\nDesigned in Europe.\r\nMade from high fired earthenware material.\r\n');
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

-- Dump completed on 2019-12-26 23:59:58
