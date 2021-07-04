/*
 Navicat Premium Data Transfer

 Source Server         : test
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : localhost:3306
 Source Schema         : catcafe

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 04/07/2021 08:45:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cat_dict_initial_cost
-- ----------------------------
DROP TABLE IF EXISTS `cat_dict_initial_cost`;
CREATE TABLE `cat_dict_initial_cost`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of cat_dict_initial_cost
-- ----------------------------
INSERT INTO `cat_dict_initial_cost` VALUES (1, '猫');
INSERT INTO `cat_dict_initial_cost` VALUES (2, '疫苗');
INSERT INTO `cat_dict_initial_cost` VALUES (3, '驱虫');
INSERT INTO `cat_dict_initial_cost` VALUES (4, '绝育');
INSERT INTO `cat_dict_initial_cost` VALUES (5, '猫砂盆');
INSERT INTO `cat_dict_initial_cost` VALUES (6, '猫碗');
INSERT INTO `cat_dict_initial_cost` VALUES (7, '饮水机');
INSERT INTO `cat_dict_initial_cost` VALUES (8, '猫抓板');
INSERT INTO `cat_dict_initial_cost` VALUES (9, '猫窝');
INSERT INTO `cat_dict_initial_cost` VALUES (10, '猫笼');
INSERT INTO `cat_dict_initial_cost` VALUES (11, '空运箱');
INSERT INTO `cat_dict_initial_cost` VALUES (12, '伍德氏灯');
INSERT INTO `cat_dict_initial_cost` VALUES (13, '指甲钳');
INSERT INTO `cat_dict_initial_cost` VALUES (14, '玩具');
INSERT INTO `cat_dict_initial_cost` VALUES (15, '猫毛梳');
INSERT INTO `cat_dict_initial_cost` VALUES (16, '清洁湿巾');
INSERT INTO `cat_dict_initial_cost` VALUES (17, '猫砂<br>&nbsp;&nbsp;&nbsp;   （一月用量）');
INSERT INTO `cat_dict_initial_cost` VALUES (18, '猫粮<br> &nbsp;&nbsp;&nbsp;  （一月用量）');
INSERT INTO `cat_dict_initial_cost` VALUES (19, '清洁剂<br>&nbsp;&nbsp;&nbsp;   （一瓶）');
INSERT INTO `cat_dict_initial_cost` VALUES (20, '垃圾袋<br> &nbsp;&nbsp;&nbsp;  （一件）');
INSERT INTO `cat_dict_initial_cost` VALUES (21, '粘毛滚筒<br>&nbsp;&nbsp;&nbsp;   （一件）');

-- ----------------------------
-- Table structure for cat_dict_irregular_cost
-- ----------------------------
DROP TABLE IF EXISTS `cat_dict_irregular_cost`;
CREATE TABLE `cat_dict_irregular_cost`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of cat_dict_irregular_cost
-- ----------------------------
INSERT INTO `cat_dict_irregular_cost` VALUES (1, '洗澡');
INSERT INTO `cat_dict_irregular_cost` VALUES (2, '看病');
INSERT INTO `cat_dict_irregular_cost` VALUES (3, '疫苗');
INSERT INTO `cat_dict_irregular_cost` VALUES (4, '驱虫');
INSERT INTO `cat_dict_irregular_cost` VALUES (5, '零食');
INSERT INTO `cat_dict_irregular_cost` VALUES (6, '玩具');

-- ----------------------------
-- Table structure for cat_dict_monthly_cost
-- ----------------------------
DROP TABLE IF EXISTS `cat_dict_monthly_cost`;
CREATE TABLE `cat_dict_monthly_cost`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of cat_dict_monthly_cost
-- ----------------------------
INSERT INTO `cat_dict_monthly_cost` VALUES (1, '猫砂');
INSERT INTO `cat_dict_monthly_cost` VALUES (2, '猫粮');
INSERT INTO `cat_dict_monthly_cost` VALUES (3, '清洁剂');
INSERT INTO `cat_dict_monthly_cost` VALUES (4, '垃圾袋');
INSERT INTO `cat_dict_monthly_cost` VALUES (5, '粘毛滚筒');
INSERT INTO `cat_dict_monthly_cost` VALUES (6, '清洁湿巾');

SET FOREIGN_KEY_CHECKS = 1;
