-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 23, 2021 at 06:19 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `athwala`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers_helpstack`
--

CREATE TABLE `answers_helpstack` (
  `ans_id` int(11) NOT NULL,
  `answer` varchar(1000) NOT NULL,
  `answer_by` int(11) NOT NULL,
  `q_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `answers_helpstack`
--

INSERT INTO `answers_helpstack` (`ans_id`, `answer`, `answer_by`, `q_id`) VALUES
(1, 'If you want to download any JRE or JDK without signing into Oracle, go to the downloads page for the version you want (such as https://www.oracle.com/java/technologies/jdk12-downloads.html) and right-click on the Download link of your choice. Select \"Copy Link Location\" and then paste it into a text editor like Notepad. You\'ll see the link points to something like oracle.com/webapps/redirect/signon, but it has a query attached that starts with \"nexturl=\". The URL that follows nexturl= is the actual link that will download the file to your computer.', 1, 1),
(2, 'in the next url,you need to replace otn in the URL with otn-pub and get the next url ', 1, 1),
(3, 'same as previous answer.', 1, 1),
(4, 'Thanks for the tip about using \"otn-pub\" in the URL. I needed a legacy version (12) for Mac, and the following worked for me:\n\nwget -c --no-cookies --header \"Cookie: oraclelicense=accept-securebackup-cookie\" https://download.oracle.com/otn-pub/java/jdk/12.0.2+10/e482c34c86bd4bf8b56c0b35558996b9/jdk-12.0.2_osx-x64_bin.dmg', 1, 1),
(5, 'I got mine by replacing otn in the URL with otn-pub, maybe that might help someone?\n\nawesome, worked for me (linux64, java lates LTS version jdk-11.0.6_linux-x64_bin.tar.gz). Heres the modified link:\n\nhttps://download.oracle.com/otn-pub/java/jdk/11.0.6+8/90eb79fb590d45c8971362673c5ab495/jdk-11.0.6_linux-x64_bin.tar.gz', 1, 1),
(6, 'You can achieve this with label and hiding the input.You need to of course style it properly and write a handleFile function.\n\n<div>\n     <label onChange={handleFile} htmlFor=\"formId\">\n         <input name=\"\" type=\"file\" id=\"formId\" hidden />\n          <Icon>\n     </label>\n </div>', 1, 1),
(7, 'Making sure that user\'s input is really an integer is quite tricky in C, and scanf() isn\'t gonna help you much (even if used correctly, it still won\'t warn you about integer overflows, for instance).\n\nOne alternative is to read a line using fgets() and then parse it with atoi(), but fgets() will give you headaches when input line is longer than maximum length. Also, atoi() won\'t let you know if the number is valid or not (technically it does catch some errors, but you cannot distinguish them from 0), so it may be replaced with strtol().', 1, 1),
(8, 'You can use atoi for your purpose.', 1, 1),
(9, 'sffsfsfsf', 2, 3),
(10, 'dsdsfsgasgsafdfdfd\n', 2, 3),
(11, 'NJnsljvsvs', 2, 3),
(12, 'I tried several methods . but not working', 14, 4),
(13, 'There are several methods. you can study them on 2nd year.', 14, 5),
(14, 'By this, we mean that either the entire transaction takes place at once or doesn’t happen at all. There is no midway i.e. transactions do not occur partially. Each transaction is considered as one unit and either runs to completion or is not executed at all. It involves the following two operations. \n—Abort: If a transaction aborts, changes made to database are not visible. \n—Commit: If a transaction commits, changes made are visible. \nAtomicity is also known as the ‘All or nothing rule’. \n ', 14, 6),
(15, 'Downloald from oracal ', 2, 1),
(16, 'Try some google\n', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `auction`
--

CREATE TABLE `auction` (
  `auction_id` int(10) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `year` varchar(255) NOT NULL,
  `baseprice` int(10) NOT NULL,
  `date` date NOT NULL,
  `student_id` int(10) NOT NULL,
  `status` int(10) NOT NULL DEFAULT 0,
  `img` varchar(255) NOT NULL DEFAULT '1',
  `bid` int(10) NOT NULL DEFAULT 0,
  `bid1` int(10) NOT NULL DEFAULT 0,
  `bidder_id` int(10) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `auction`
--

INSERT INTO `auction` (`auction_id`, `title`, `description`, `year`, `baseprice`, `date`, `student_id`, `status`, `img`, `bid`, `bid1`, `bidder_id`) VALUES
(9, 'Laptop', 'Intel i 5 laptop 8Gb Ram 2GB Nvedia MX130 VGA Good Condition ', 'First Year', 20000, '2021-09-23', 1, 1, '1', 40000, 40000, 2),
(12, 'Laptop', 'Asus I3 Processor 4GB ram 2GB Intel VGA ', 'First Year', 1000, '2021-09-15', 2, 2, '1', 1, 100, 2),
(13, 'Charger', 'brand new charger For Apple iphone 10', 'Second Year', 1500, '2021-09-24', 2, 2, '1', 10000, 10000, 1),
(14, 'Charger', '3.7h charger For Samsung j8 mobile phone.', 'Second Year', 1200, '2021-09-16', 1, 1, '1', 1001, 1001, 2),
(29, 'Samsung Galaxy S10', 'International models of the S10 use the Exynos 9820 system-on-chip, while the U.S. and Chinese models use the Qualcomm Snapdragon 855. The two devices are sold with 128 or 512 GB of internal storage along with 8GB of RAM, with the S10+ also being sold in ', 'Third Year', 12000, '2021-09-30', 1, 1, '1', 0, 0, 0),
(31, 'charger 2A Fast', 'charger 2A Fast Samsung', 'Second Year', 350, '2021-09-29', 2, 0, '1', 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `auction_details`
--

CREATE TABLE `auction_details` (
  `id` int(10) NOT NULL,
  `auction_id` int(10) NOT NULL,
  `student_id` int(10) NOT NULL,
  `biduser` int(10) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `auction_details`
--

INSERT INTO `auction_details` (`id`, `auction_id`, `student_id`, `biduser`) VALUES
(44, 13, 2, 10000),
(72, 9, 2, 20000),
(73, 9, 2, 30000),
(74, 9, 2, 40000);

-- --------------------------------------------------------

--
-- Table structure for table `authtokens`
--

CREATE TABLE `authtokens` (
  `token` int(11) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cloth`
--

CREATE TABLE `cloth` (
  `donation_id` int(11) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `size` varchar(3) NOT NULL,
  `before_date` date NOT NULL,
  `cloth_type` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Not Received'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cloth`
--

INSERT INTO `cloth` (`donation_id`, `gender`, `size`, `before_date`, `cloth_type`, `status`) VALUES
(15, 'Male', 'L', '2021-09-25', 'Trouser', 'Pending'),
(21, 'Female', 'M', '2021-09-28', 'Blazer', 'Not Received'),
(25, 'Female', 'M', '2021-09-28', 'Skirt', 'Not Received');

-- --------------------------------------------------------

--
-- Table structure for table `device`
--

CREATE TABLE `device` (
  `donation_id` int(11) NOT NULL,
  `model` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `before_date` date NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Not Received'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `device`
--

INSERT INTO `device` (`donation_id`, `model`, `brand`, `before_date`, `status`) VALUES
(16, 'Dell i3', 'Dell', '2021-09-28', 'Pending'),
(22, 'Bose 700', 'JBL', '2021-09-29', 'Not Received');

-- --------------------------------------------------------

--
-- Table structure for table `don`
--

CREATE TABLE `don` (
  `donationID` int(11) NOT NULL,
  `donationType` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `don`
--

INSERT INTO `don` (`donationID`, `donationType`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(5, 'fsfs', 'sfsfs', 'dsdsdfinfsnifsn', '2021-08-29 05:34:45', '2021-08-29 05:34:45'),
(6, 'fsfs', 'sfsfs', 'dsdsdfinfsnifsn', '2021-08-29 05:34:45', '2021-08-29 05:34:45'),
(5, 'fsfs', 'sfsfs', 'dsdsdfinfsnifsn', '2021-08-29 05:34:45', '2021-08-29 05:34:45'),
(6, 'fsfs', 'sfsfs', 'dsdsdfinfsnifsn', '2021-08-29 05:34:45', '2021-08-29 05:34:45');

-- --------------------------------------------------------

--
-- Table structure for table `donations`
--

CREATE TABLE `donations` (
  `donationID` int(11) NOT NULL,
  `donationType` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `student_id` int(11) NOT NULL,
  `active` int(11) NOT NULL DEFAULT 1,
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `donations`
--

INSERT INTO `donations` (`donationID`, `donationType`, `title`, `description`, `createdAt`, `updatedAt`, `student_id`, `active`, `status`) VALUES
(14, 'note', 'Request of HCI Lecture Note', 'I\'m a third year student at UCSC. I\'m following HCI course. I\'m unable to participate several lectures because I was in my quarantine period I want lecture notes that is written during the lecture time. Please Donate me', '2021-09-23 00:21:01', '2021-09-23 00:21:01', 2, 1, 0),
(15, 'cloth', 'Request of Office Trouser', 'I am a third year student. I have a presentation on this Monday. Since I was not staying at home now, I\'m unable to find office trouser. if any one have trouser, Please donate me.', '2021-09-23 00:26:45', '2021-09-23 00:26:45', 2, 1, 1),
(16, 'device', 'Request for Laptop', 'I\'m a third year student in UCSC. I have presentation on next week. but unfortunately, my laptop is break down. so, I am unable to do any my works and it\'s hard to buy new one. so if anyone have old laptop can you please donate me.', '2021-09-23 00:34:02', '2021-09-23 00:34:02', 2, 1, 1),
(17, 'money', 'Request for Course fees', 'I\'m a third year student. I am following java course. I have some difficulties to find my course fees for this month. I need to pay Rs.2500.00 before this month. please help me by donating. ', '2021-09-23 00:43:14', '2021-09-23 00:43:14', 2, 1, 0),
(18, 'other', 'Request for medicine', 'I\'m a third year student. I\'m founding some Ayurveda medicine called \'Triphala\' and Brahmi for my brother. but its really hard to find those medicines. if these are in your house, Please Donate me. ', '2021-09-23 00:55:00', '2021-09-23 00:55:00', 2, 0, 1),
(19, 'note', 'Request Compiler Theory Note', 'I\'m a third year student at UCSC. I\'m following compiler theory course. I\'m unable to participate several lectures because I was in my quarantine period I want lecture notes that is written during the lecture time. Please Donate me', '2021-09-23 01:07:06', '2021-09-23 01:07:06', 1, 1, 0),
(20, 'note', 'Request Middleware Note', 'I\'m a third year student at UCSC. I\'m following Middleware course. I\'m unable to participate several lectures because I was in my quarantine period I want lecture notes that is written during the lecture time. Please Donate me', '2021-09-23 01:09:07', '2021-09-23 01:09:07', 1, 1, 2),
(21, 'cloth', 'Request Blazer ', 'I\'m third year student at UCSC. Next week I\'m going to presenting a workshop in campus. but i don\'t have blazer for that. if anyone who is willing to help, Please help me.', '2021-09-23 01:14:35', '2021-09-23 01:14:35', 1, 1, 0),
(22, 'device', 'Request Headset', 'I\'m a third year student. my headset is broken. if anyone have additional \nold one please contact me. ', '2021-09-23 01:21:05', '2021-09-23 01:21:05', 1, 1, 0),
(23, 'money', 'Money for spectacles', 'I am third year student. Doctors recommend to buy spectacles since my eye vision is not good. But currently I\'m unable to buy spectacles. Please help me to buy a spectacles.', '2021-09-23 01:31:14', '2021-09-23 01:31:14', 1, 1, 0),
(24, 'other', 'Request Musical Instrument', 'I\'m a third year student. I have a singing competition next week. I need to find a flute before next week. if anyone has a flute and like to donate, please donate me.', '2021-09-23 01:43:04', '2021-09-23 01:43:04', 1, 1, 0),
(25, 'cloth', 'Request Blue Skirt', 'I am third year student. i have presentation next week. please if you have blue skirt donate me', '2021-09-23 02:24:06', '2021-09-23 02:24:06', 1, 1, 0),
(26, 'money', 'Foot ball practice fees', 'I am a third year student. i am in the foot ball team. i have to pay fees for this month. but i am unable to pay. please help me', '2021-09-23 03:28:42', '2021-09-23 03:28:42', 1, 1, 0),
(27, 'money', 'Purchase a server', 'I am a third year student. we have third year group project. we need to host the server for project. so we need money for that. Please give your donation.', '2021-09-23 03:31:22', '2021-09-23 03:31:22', 1, 1, 0),
(28, 'money', 'Bording Fees', 'I have to pay boarding fees in this month. but I can\'t  afford that fees. can you please help me. ', '2021-09-23 03:34:12', '2021-09-23 03:34:12', 1, 1, 0),
(29, 'money', 'Entry fees', 'I am third year student. i get a chance to enter he basketball tournament. but i could not afford that payment. can you help me ', '2021-09-23 03:37:23', '2021-09-23 03:37:23', 1, 1, 0),
(30, 'money', 'Purchase a chassie', 'i am a third year student. i need to purchase chassie for the Robofest.\ncan you please donate me', '2021-09-23 03:39:33', '2021-09-23 03:39:33', 1, 1, 0),
(31, 'note', 'DSA Lecture Note', 'I want a DSA lecs', '2021-09-23 09:01:50', '2021-09-23 09:01:50', 2, 1, 2),
(32, 'note', 'SQA lecture note ', 'i need SQA lectur', '2021-09-23 10:45:56', '2021-09-23 10:45:56', 2, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `doners`
--

CREATE TABLE `doners` (
  `id` int(11) NOT NULL,
  `donation_id` int(11) NOT NULL,
  `doner_id` int(11) NOT NULL,
  `donate_at` datetime NOT NULL DEFAULT current_timestamp(),
  `tel` int(10) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `amount` int(11) NOT NULL,
  `history` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `doners`
--

INSERT INTO `doners` (`id`, `donation_id`, `doner_id`, `donate_at`, `tel`, `address`, `amount`, `history`) VALUES
(26, 20, 2, '2021-09-23 01:57:15', NULL, NULL, 0, 1),
(27, 17, 1, '2021-09-23 03:41:52', NULL, NULL, 500, 1),
(28, 15, 1, '2021-09-23 03:42:35', 762345198, 'No 685,, Anikat Road,, Veyangoda', 0, 1),
(29, 17, 0, '2021-09-23 03:45:40', NULL, NULL, 100, 1),
(30, 16, 1, '2021-09-23 03:51:18', 762345198, 'No 685,, Anikat Road,, Veyangoda', 0, 1),
(31, 31, 1, '2021-09-23 09:04:51', NULL, NULL, 0, 0),
(32, 23, 2, '2021-09-23 09:08:33', NULL, NULL, 100, 1),
(33, 18, 1, '2021-09-23 09:10:13', 771110052, 'Galle', 0, 1),
(34, 32, 1, '2021-09-23 10:48:29', NULL, NULL, 0, 1),
(35, 23, 2, '2021-09-23 10:50:42', NULL, NULL, 500, 1);

-- --------------------------------------------------------

--
-- Table structure for table `fundraising`
--

CREATE TABLE `fundraising` (
  `fundID` int(11) NOT NULL,
  `fundName` varchar(255) NOT NULL,
  `fundDescription` varchar(255) NOT NULL,
  `fundImage` varchar(255) NOT NULL,
  `fundStartedBy` varchar(255) NOT NULL,
  `fundEndedBy` varchar(255) NOT NULL,
  `fundStartAmount` varchar(255) NOT NULL,
  `fundCurrentAmount` varchar(255) NOT NULL,
  `fundGoalAmount` varchar(255) NOT NULL,
  `fundStartDate` date NOT NULL,
  `fundStartTime` time NOT NULL,
  `fundExpireDate` date NOT NULL,
  `fundExpireTime` time NOT NULL,
  `fundStatus` int(11) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fundraising`
--

INSERT INTO `fundraising` (`fundID`, `fundName`, `fundDescription`, `fundImage`, `fundStartedBy`, `fundEndedBy`, `fundStartAmount`, `fundCurrentAmount`, `fundGoalAmount`, `fundStartDate`, `fundStartTime`, `fundExpireDate`, `fundExpireTime`, `fundStatus`) VALUES
(83, 'UCSC Gammadawa 2021', 'Gammaddawa is an event which is organized by the 2nd year batch of UCSC. It will be great oppurtunity to create the bond among the batches. ', 'dsadjdskad.ww', 'Dumindu', 'Chamal', '200.00', '3000', '20000.00', '2021-09-19', '23:02:51', '2021-11-21', '00:00:08', 2),
(84, 'Waniwila Tamil event 2021', 'Waniwila is a tamil event which is organised by UCSC 1st year batch. All the people who are engaging with the UCSC will participiate for this amazing event', 'dsadjdskad.ww', 'Uthpala', 'Ruwanara', '500.00', '4000', '20000.00', '2021-08-19', '00:00:40', '2021-09-10', '00:00:08', 0),
(85, 'Wasanthaya Awidin 2020', 'Wasanthaya Awidin is a Sinhala and Tamil new year cultural event. This event will help us to reduce the mental stress of the students and it will be a great medium to show up their potential talents.', 'dsadjdskad.ww', 'Dhanu', 'Anjana', '600.00', '8000', '10000.00', '2021-03-19', '23:02:51', '2021-08-21', '00:00:08', 0),
(87, 'UCSC Padura 2021', 'UCSC Padura is a musical event which is organized by the 2nd year students of the UCSC for the 3rd year students. This event will be more helpful to showcase extra-curriculum talents and create the bond among the batches.', 'dsadjdskad.ww', 'Anuradha', 'Wicramasignhe', '800', '9500', '10000', '2021-09-19', '23:02:51', '2021-09-15', '00:00:08', 1),
(92, 'Annual pirith ceremony 2021', 'The Pirith Ceremony is the main annual event in UCSC which was conducted by 3rd year students. It will provide a great platform to build the harmony among the batchmates   ', 'dsadjdskad.ww', 'AbisesWeerasekara', 'AbisesWeerasekera', '500.00', '1000', '23000', '2021-09-21', '14:49:42', '2021-09-30', '22:40:00', 2),
(95, 'UCSC Padura', 'UCSC Padura is a musical event which is organized by the 2nd year students of the UCSC for the 3rd year students. This event will be more helpful to showcase extra-curriculum talents and create a bond among the batches.', 'dsadjdskad.ww', 'Anuradha', 'Wicramasignhe', '800', '9500', '10000', '2021-09-19', '23:02:51', '2021-09-25', '00:00:08', 1),
(96, 'Idorayata Pini Wessak 2020', 'Idorayata Pini wessak is a cultural show \n			which is oraganised by the 1st year \n			batchmates of the UCSC. It will be a great oppurtunity  ', 'asdasd.asdasd', 'AbisesWeerasekara', '', '100', '', '100000', '2021-09-23', '09:27:32', '2021-09-24', '12:30:00', 2);

-- --------------------------------------------------------

--
-- Table structure for table `job_vacancy`
--

CREATE TABLE `job_vacancy` (
  `jobpost_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `company` varchar(255) NOT NULL,
  `post_at` datetime NOT NULL DEFAULT current_timestamp(),
  `req1` varchar(500) DEFAULT NULL,
  `req2` varchar(255) DEFAULT NULL,
  `req3` varchar(255) DEFAULT NULL,
  `req4` varchar(255) DEFAULT NULL,
  `reqOther` varchar(255) DEFAULT NULL,
  `tel` int(10) DEFAULT NULL,
  `mail` varchar(100) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `linkdin` varchar(255) DEFAULT NULL,
  `posted_by` int(11) NOT NULL,
  `deleted` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `job_vacancy`
--

INSERT INTO `job_vacancy` (`jobpost_id`, `title`, `description`, `company`, `post_at`, `req1`, `req2`, `req3`, `req4`, `reqOther`, `tel`, `mail`, `website`, `linkdin`, `posted_by`, `deleted`) VALUES
(4, 'Digital Account Manager', 'Digital account managers optimize a client\'s online presence through digital marketing strategies. Their duties include creating digital campaigns, monitoring clients\' social media, and measuring the success of marketing strategies. Their goals are to cre', 'Spreader Technology', '2021-09-23 02:58:45', 'Determining client needs by conducting in-person or electronic meetings to outline their digital goals.', 'Developing and implementing a comprehensive digital strategy for assigned clients.', 'A bachelor\'s degree in marketing, communication, or a related field.', 'At least 3 years of experience as a digital account manager, or a similar role.', 'Excellent knowledge of digital best practices, marketing strategies, and social media management.', 762345198, 'Spreader@carrer.lk', 'www.Spreader.lk', 'https://www.linkedin.com/spreader', 4, 0),
(5, 'Expatriate Administrator', 'Expatriate administrators manage the human resources of employees placed internationally. Also known as global mobility and immigration administrators or integration specialists, expatriate administrators are responsible for obtaining visas, housing, tax ', 'Amazing IT Center', '2021-09-23 03:02:10', 'Reviewing and preparing all the salary and other HR-related documents before submission to the head of human resources', 'Reviewing and processing expenses and reimbursements due to expats.', 'Strong verbal and written communication skills.', 'Outstanding problem-solving and organizational skills.', 'Good working knowledge of Microsoft Office products.', 771257811, 'amazing@career.lk', 'www.amazing.lk', 'https://www.linkedin.com/amazing', 4, 0),
(6, 'Programming Assistance Director', 'Programming Assistance Director, or media programming directors, oversee the distribution of content for media houses and media distribution companies. They create program schedules, ensure optimal viewership, and analyze indicators, such as focus-group f', 'Vintage Solutions', '2021-09-23 03:08:24', 'Reviewing content and monitoring the production of content.', 'Managing and coordinating activities between advertising, production, planning, and editing.', 'Identifying key opportunities for the business to increase content impact.', 'Excellent written and verbal communication skills.', 'Creative, tactical, and results driven.', 771257811, 'vintage@career.com', 'www.vintage.lk', 'https://www.linkedin.com/vintage', 4, 0),
(7, 'Android Developer', 'We are looking for an Android Developer who possesses a passion for pushing mobile technologies to the limits. This Android app developer will work with our team of talented engineers to design and build the next generation of our mobile applications. And', 'Guidance IT Center', '2021-09-23 03:15:01', 'Design and build advanced applications for the Android platform', 'Work with outside data sources and APIs', 'BS/MS degree in Computer Science, Engineering or a related subject', 'Have published at least one original Android app', 'Experience with Android SDK', 762345198, 'guidance@career.lk', 'https://guidance.lk', 'https://www.linkedin.com/guidance', 4, 0),
(8, 'Back-end Developer', 'We are looking for an experienced Back-end developer to join our IT team. You will be responsible for the server side of our web applications.\n\nIf you have excellent programming skills and a passion for developing applications or improving existing ones, ', 'Modern Transition', '2021-09-23 03:20:27', 'Participate in the entire application lifecycle, focusing on coding and debugging', 'Write clean code to develop functional web applications', 'Working knowledge of CMS framework', 'Familiarity with front-end languages (e.g. HTML, JavaScript and CSS)', 'Teamwork skills with a problem-solving attitude', 762345198, 'modern@career.lk', 'http://www.modern.lk', 'https://www.linkedin.com/modern', 4, 0),
(9, 'Senior Software Engineer', 'We are looking for a Senior Software Engineer to produce and implement functional software solutions. You will work with upper management to define software requirements and take the lead on operational and technical projects.', 'Salorix Systems', '2021-09-23 03:23:45', 'Develop high-quality software design and architecture', 'Collaborate with internal teams and vendors to fix and improve products', 'Experience using system monitoring tools (e.g. New Relic) and automated testing frameworks', 'Analytical mind with problem-solving aptitude', 'In-depth knowledge of relational databases (e.g. PostgreSQL, MySQL) and NoSQL databases (e.g. MongoDB)', 762345198, 'salorix@career.lk', 'https://www.salorix.com', 'https://www.linkedin.com/solarix', 4, 0),
(10, 'Senior Software Engineer', 'We are looking for a Senior Software Engineer to produce and implement functional software solutions. You will work with upper management to define software requirements and take the lead on operational and technical projects.', 'Salorix Systems', '2021-09-23 03:23:45', 'Develop high-quality software design and architecture', 'Collaborate with internal teams and vendors to fix and improve products', 'Experience using system monitoring tools (e.g. New Relic) and automated testing frameworks', 'Analytical mind with problem-solving aptitude', 'In-depth knowledge of relational databases (e.g. PostgreSQL, MySQL) and NoSQL databases (e.g. MongoDB)', 762345198, 'salorix@career.lk', 'https://www.salorix.com', 'https://www.linkedin.com/solarix', 4, 0);

-- --------------------------------------------------------

--
-- Table structure for table `learning_groups`
--

CREATE TABLE `learning_groups` (
  `lgId` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `url` varchar(1024) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `learning_groups`
--

INSERT INTO `learning_groups` (`lgId`, `created_by`, `title`, `url`, `status`, `created_at`) VALUES
(35, 2, 'DSA Group Assigment Discussion', 'DSAGroupAssigmentDiscussion617', 1, '2021-09-22'),
(36, 1, 'Database Compulsary Assignment Group 1', 'DatabaseCompulsaryAssignmentGroup1142', 1, '2021-09-22'),
(37, 2, 'DB Kuppi', 'DBKuppi461', 1, '2021-09-22'),
(38, 2, '1478', '1478418', 1, '2021-09-22'),
(39, 2, '311', '311525', 1, '2021-09-22'),
(40, 2, '1234', '1234731', 1, '2021-09-22'),
(41, 2, 'Abc', 'Abc63', 1, '2021-09-22'),
(42, 2, '12345', '12345295', 1, '2021-09-22'),
(43, 2, 'DAS therene naaa', 'DAStherenenaaa431', 1, '2021-09-22'),
(44, 2, 'DAS therene naaa', 'DAStherenenaaa628', 1, '2021-09-22'),
(45, 2, 'Mata baaa', 'Matabaaa462', 1, '2021-09-22'),
(46, 2, '125', '125404', 1, '2021-09-22'),
(47, 2, 'UThfpn;kfsfsf', 'UThfpn;kfsfsf530', 1, '2021-09-22'),
(48, 2, '147', '147633', 1, '2021-09-22'),
(49, 1, 'Group Project 3rd Year G45', 'GroupProject3rdYearG45548', 1, '2021-09-23'),
(50, 2, 'DSA Arrays', 'DSAArrays114', 1, '2021-09-23'),
(51, 2, 'SQA SR', 'SQASR273', 1, '2021-09-23');

-- --------------------------------------------------------

--
-- Table structure for table `lg_users`
--

CREATE TABLE `lg_users` (
  `lgId` int(11) NOT NULL,
  `uId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lg_users`
--

INSERT INTO `lg_users` (`lgId`, `uId`) VALUES
(22, 1),
(23, 1),
(24, 1),
(25, 2),
(30, 2),
(32, 2),
(33, 2),
(22, 2),
(22, 2),
(34, 2),
(28, 2),
(22, 1),
(23, 1),
(24, 1),
(25, 2),
(30, 2),
(32, 2),
(33, 2),
(22, 2),
(22, 2),
(34, 2),
(28, 2),
(49, 1),
(50, 2),
(51, 2),
(51, 115);

-- --------------------------------------------------------

--
-- Table structure for table `money`
--

CREATE TABLE `money` (
  `donation_id` int(11) NOT NULL,
  `amount` float NOT NULL,
  `current_amount` float NOT NULL,
  `note` varchar(255) NOT NULL,
  `before_date` date NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Not Received'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `money`
--

INSERT INTO `money` (`donation_id`, `amount`, `current_amount`, `note`, `before_date`, `status`) VALUES
(17, 2500, 600, 'immediately ', '2021-09-30', 'Not Received'),
(23, 3500, 600, 'spectacles', '2021-09-26', 'Not Received'),
(26, 500, 0, 'immediately ', '2021-09-25', 'Not Received'),
(27, 5000, 0, 'immediately ', '2021-09-28', 'Not Received'),
(28, 6500, 0, 'immediately ', '2021-09-30', 'Not Received'),
(29, 6000, 0, 'immediately ', '2021-09-29', 'Not Received'),
(30, 1000, 0, 'immediately ', '2021-09-28', 'Not Received');

-- --------------------------------------------------------

--
-- Table structure for table `note`
--

CREATE TABLE `note` (
  `donation_id` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `lesson` varchar(255) NOT NULL,
  `before_date` date NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Not Received'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `note`
--

INSERT INTO `note` (`donation_id`, `year`, `subject`, `lesson`, `before_date`, `status`) VALUES
(14, 3, 'Human Computer Interaction ', 'User Centered Design', '2021-09-24', 'Not Received'),
(19, 3, 'Compiler Theory ', 'Lex', '2021-09-27', 'Not Received'),
(20, 3, 'Middleware', 'RPC bacis', '2021-09-28', 'Received'),
(31, 2, 'DSA', 'DSA Arrays', '2021-09-29', 'Received'),
(32, 2, 'SQA', 'Software Quality challenge before date:', '2021-09-30', 'Received');

-- --------------------------------------------------------

--
-- Table structure for table `other`
--

CREATE TABLE `other` (
  `donation_id` int(11) NOT NULL,
  `reason` varchar(255) NOT NULL,
  `before_date` date NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Not Received'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `other`
--

INSERT INTO `other` (`donation_id`, `reason`, `before_date`, `status`) VALUES
(18, 'my brother is in sick condition. ', '2021-09-28', 'Pending'),
(24, 'for a singing competing', '2021-09-28', 'Not Received');

-- --------------------------------------------------------

--
-- Table structure for table `pay_product`
--

CREATE TABLE `pay_product` (
  `payment_id` int(100) NOT NULL,
  `product_id` int(100) NOT NULL,
  `user_id` int(100) NOT NULL,
  `pay_date` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `active` int(10) NOT NULL DEFAULT 1,
  `is_history` int(10) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pay_product`
--

INSERT INTO `pay_product` (`payment_id`, `product_id`, `user_id`, `pay_date`, `active`, `is_history`) VALUES
(13, 84, 1, '2021-09-23 05:10:25.830554', 1, 1),
(14, 104, 2, '2021-09-23 09:19:25.954567', 1, 1),
(15, 99, 2, '2021-09-23 09:19:49.295214', 1, 1),
(16, 88, 1, '2021-09-23 09:54:58.826368', 1, 1),
(17, 89, 2, '2021-09-23 10:51:46.358063', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(10) NOT NULL,
  `product_type` varchar(255) NOT NULL,
  `price` int(255) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `title` varchar(255) NOT NULL,
  `postdate` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `show_or_hide_details` int(10) NOT NULL,
  `is_pay` int(10) NOT NULL DEFAULT 0,
  `user_id` int(10) NOT NULL,
  `active` int(10) NOT NULL DEFAULT 1,
  `is_history` int(10) NOT NULL DEFAULT 1,
  `block` int(10) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_type`, `price`, `description`, `title`, `postdate`, `show_or_hide_details`, `is_pay`, `user_id`, `active`, `is_history`, `block`) VALUES
(84, 'device', 40000, '– AMD Athlon Silver 3050U\n– 4GB DDR4 Ram\n– 128GB SSD Hard Drive\n– 15.6″ HD Display\n– Windows 10 Home 64 Bit\n– Free Microsoft office 365\n– Free Hp wireless mouse\n– Free Hp 15” sleeve', 'Laptop', '2021-09-23 01:47:49.002072', 0, 1, 2, 1, 1, 0),
(85, 'device', 30000, '– Intel Core i3 11th Gen\n– 4GB DDR4 Ram\n– 1TB Hard Drive\n– 15.6 FHD Dispaly\n– Windows 10', 'ACER Laptop', '2021-09-23 02:08:34.201258', 0, 0, 2, 1, 1, 0),
(86, 'note', 100, 'Tree represents the nodes connected by edges. We will discuss binary tree or binary search tree specifically.\nBinary Tree is a special data structure used for data storage purposes. A binary tree has a special condition that each node can have a maximum of two children. ', 'DSA lecture note', '2021-09-23 02:21:11.664922', 0, 0, 2, 1, 1, 0),
(87, 'device', 10000, '- Chipset - Qualcomm SM6115 Snapdragon 662 (11 nm)\n- OS - Android 11\n- Colors - Prism Black, Midnight Blue\n- ROM - 128GB\n- RAM - 6GB\n- Expandable Memory - 256GB\n- Screen - AMOLED capacitive touchscreen\n- Screen Type - Punch Hole\n- PPI - 409\n- 6GB RAM \n- 128GB ROM', 'Mobile Phone OPPO ', '2021-09-23 03:01:56.612785', 0, 0, 2, 1, 1, 1),
(88, 'other', 3000, 'This helmet was bought  in 2020. Need to buy a new one.  No damages.  Whiser is also in good condition.  With original hook.', 'Full Face helmet', '2021-09-23 03:09:13.811598', 0, 1, 2, 1, 1, 0),
(89, 'device', 10000, '- 48MP+5MP+2MP+2MP \n- Multi Role Quad Camera-48MP (F1.8) main camera\n- Ultra Wide Camera 5MP (F2.2) \n- Refined Macro Camera 2MP(F2.4)\n- Depth Camera 2MP(F2.4) 8MP Selfie Camera (F2.2)', 'Samsung Mobile Phone', '2021-09-23 03:16:58.753862', 0, 1, 2, 1, 0, 0),
(90, 'note', 70, 'A relationship, I think, is like a shark you know? It has to constantly move forward or it dies. And I think what we got on our hands is a dead shark.', 'Database Lecture Note', '2021-09-23 03:21:40.344492', 0, 0, 2, 1, 1, 0),
(91, 'device', 30000, '– Ryzen 7 4700U Processor\n– 8GB Ram\n– 512GB SSD\n– 15.6 FHD\n– Windows 10 Home', 'Lenovo Laptop', '2021-09-23 03:25:34.674294', 0, 0, 2, 1, 1, 0),
(92, 'note', 200, 'C is highly portable and is used for scripting system applications which form a major part of Windows, UNIX, and Linux operating system. C is a general-purpose programming language and can efficiently work on enterprise applications, games, graphics, and applications requiring calculations, etc.', 'C Note', '2021-09-23 03:28:32.660061', 0, 0, 2, 1, 1, 0),
(93, 'other', 2000, ' MAC Selena Lip Gloss Lipstick Collection Set Of 12 Colours', 'MAC Selena Lip Lipstick ', '2021-09-23 03:33:28.582322', 0, 0, 2, 1, 1, 0),
(94, 'device', 10000, '- Slim design\n- Automatic backup - easy to use\n- Password protection + 256-bit AES hardware encryption\n- WD Discovery software for WD Backup, password protection and drive management\n- SuperSpeed USB port; USB 2.0 compatible', 'WD My Passport ', '2021-09-23 03:38:29.230317', 0, 0, 2, 1, 1, 0),
(95, 'device', 10000, '- OLED touch screen that supports swipes (in different directions)\n- Fitness Sleep\n- Compatible with Many Smartphones\n- 1 x Huawei Band My Perfect Fit', 'Huawei Smart Watch ', '2021-09-23 03:46:09.430777', 0, 0, 2, 1, 1, 0),
(96, 'device', 50000, '- 13.3-inch\n- Apple M1 Chip\n- 8GB unified memory\n- 256GB SSD\n- 8-core CPU / 7-core GPU\n- Operating System: macOS\n- Retina Display with True Tone', 'Apple MacBook Air Laptop', '2021-09-23 04:04:33.515192', 0, 0, 1, 1, 1, 0),
(97, 'other', 500, '100% brand new and high quality\nMade of high quality stainless steel, safe, environmental protection, thermostable, high strength.\nEasy to clean and not easy to damage.\nPerfect for decorating cup cake, cookie, pastry,etc', 'Cake Icing Nozzle Set', '2021-09-23 04:12:07.310725', 0, 0, 1, 1, 1, 0),
(98, 'note', 200, 'Protocol, in computer science, a set of rules or procedures for transmitting data between electronic devices, such as computers. In order for computers to exchange information, there must be a preexisting agreement as to how the information will be structured and how each side will send and receive it.', 'Network Lecture Note', '2021-09-23 04:14:43.014777', 0, 0, 1, 1, 1, 0),
(99, 'device', 50000, '- Product name - HP Laptop 14-dq2055wm\n- Microprocessor - Intel® Core™ i3-1115G4 (up to 4.1 GHz with Intel® --- Turbo Boost Technology, 6 MB L3 cache, 2 cores)\n- Chipset - Intel® Integrated SoC\n- Memory, standard - 4 GB DDR4-2666 MHz RAM (1 x 4 GB)\n- Hard drive - 256 GB PCIe® NVMe™ M.2 SSD', 'HP 14 Laptop', '2021-09-23 04:21:48.158432', 0, 1, 1, 1, 1, 0),
(100, 'device', 5000, '- Flexible\n- Answer and end calls\n- Lightweight, comfortable fit and durable design.\n- Music control\n- Adopt true wireless technology, enjoy your wireless sports and driving', 'Bluetooth Heads', '2021-09-23 04:32:33.336783', 0, 0, 1, 1, 1, 0),
(101, 'other', 500, '- En chanteur Enticing has been made using French perfume-making techniques.\n- It is infused with the sophisticated fragrance of roses, magnolias, freesia and bergamot.\n- Feminine fragrance.\n- Imported from France.\n- For best results, rub the roller on your pulse points.\n- En chanteur\'s French fragrances are loved by women in 40+ countries', 'Perfume', '2021-09-23 04:37:48.439251', 0, 0, 1, 1, 1, 0),
(102, 'device', 30000, '- 5000mAh Massive Battery\n- 2 GB RAM 32GB ROM\n- 3-Card Slots\n- 2 SIM + 1 microSD\n- 1080P Video Recording', 'realme Mobile Phone', '2021-09-23 04:44:09.628730', 0, 0, 1, 1, 1, 0),
(103, 'note', 100, 'One of the main motivations why we develop (computer) programs to automate various\nkinds of processes. Originally developed as a subfield of Artificial Intelligence (AI), one of\nthe goals behind machine learning was to replace the need for developing computer programs\n“manually.” Considering that programs are being developed to automate processes, we can\nthink of machine learning as the process of “automating automation.”', 'Machine Learning Note', '2021-09-23 04:49:43.064581', 0, 0, 1, 1, 1, 0),
(104, 'device', 50000, '\n-Celeron N4500 Speed: 1.1GHz\n-RAM: 4GB\n-128GB eMMC\n-Windows 10 Home in S Mode\n-15.6 FHD Display', 'HPLaptop', '2021-09-23 09:15:47.619169', 0, 1, 2, 1, 1, 0),
(105, 'device', 50000, '-Celeron N4500 Speed: 1.1GHz\n-RAM: 4GB\n-128GB eMMC\n-Windows 10 Home in S Mode\n-15.6 FHD Display\n', 'ACER Laptop', '2021-09-23 10:53:06.878770', 0, 0, 2, 1, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `p_device`
--

CREATE TABLE `p_device` (
  `product_id` int(100) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `image` varchar(255) DEFAULT 'hihjkj',
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `p_device`
--

INSERT INTO `p_device` (`product_id`, `brand`, `image`, `model`) VALUES
(84, 'HP', '', 'HP 15 (AMD Athlon)'),
(85, 'ACER ', '', 'ACER A315 i3 11th Gen'),
(87, 'OPPO', '', 'OPPO F19'),
(89, 'Samsung Galaxy A12', '', 'Samsung'),
(91, 'Lenovo', '', 'Lenovo Ideapad 3 ( Ryzen 7 )'),
(94, 'WDBPKJ0040BBK', '', 'WD'),
(95, 'MY PERFECT FIT', '', 'Huawei'),
(96, 'Apple MacBook', '', 'Apple MacBook A2337'),
(99, 'HP', '', 'HP 14 - DQ2055WM'),
(100, 'SAMSUNG', '', 'Bluetooth Earpod S530'),
(102, 'realme', '', 'realme C11 (2021)'),
(104, 'HP', '', 'Pavilion'),
(105, 'ACER', '', 'ACER A115-32-C28P');

-- --------------------------------------------------------

--
-- Table structure for table `p_note`
--

CREATE TABLE `p_note` (
  `product_id` int(100) NOT NULL,
  `year` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `lesson` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT 'hngnf'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `p_note`
--

INSERT INTO `p_note` (`product_id`, `year`, `subject`, `lesson`, `image`) VALUES
(86, '2 year', 'Data Structure and Algorithms ', 'Tree Data Structure', ''),
(90, '1 year', 'Database', 'Entity-Relationship Diagrams and the Relational Mode', ''),
(92, '1 year', 'C programming Language', 'All lesson', ''),
(98, '2 year', 'Network', 'Protocols', ''),
(103, '3 year', 'Machine Learning', 'Clustering', '');

-- --------------------------------------------------------

--
-- Table structure for table `p_other`
--

CREATE TABLE `p_other` (
  `product_id` int(100) NOT NULL,
  `information_product` varchar(1000) NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT 'nhgnn'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `p_other`
--

INSERT INTO `p_other` (`product_id`, `information_product`, `image`) VALUES
(88, '- SLS approved - Black matt colour - Modern look- Quality punch- Made in srilanka -', ''),
(93, 'Affordable Price MAC Matte Lipstick Collection Set of 12 Colours is High Quality Product. Include All Professional and Hot Colours Collection is Presents By Mac in the Market. long lasting and Natural look.', ''),
(97, '- Easy to clean.\n- Good Quality\n- 100% Safe\n- Genuine Product', ''),
(101, 'Eau de Perfume En chanteur Enticing 6 ml Pocket Size Mini Roller ball Bottle for Women French Fragrance', '');

-- --------------------------------------------------------

--
-- Table structure for table `question_helpstack`
--

CREATE TABLE `question_helpstack` (
  `q_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `question` varchar(1000) NOT NULL,
  `ask_at` datetime NOT NULL DEFAULT current_timestamp(),
  `ansCount` int(11) NOT NULL DEFAULT 0,
  `ask_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `question_helpstack`
--

INSERT INTO `question_helpstack` (`q_id`, `title`, `question`, `ask_at`, `ansCount`, `ask_by`) VALUES
(1, 'Download java 11 without oracle account', 'I need download java 11 without creating oracle account. but it does not provide any option to do that. is there any way to do that? ', '2021-09-14 16:14:57', 8, 2),
(2, 'React js customizing the input of type file using CSS', 'I have an input of type file that needs to be customized. I need to add an icon in the input button, change the button\'s name and finally hide the selected file\'s name. I tried different methods like using a or but the problem is that I need to transfer the selected file to json format. So invoking the browsing action via JavaScript is causing an error in conversion. I need to use a customizable input of type file\n\n  <input type=\"file\"/>', '2021-09-19 00:50:33', 1, 2),
(3, 'Checking if user-provided value is integer and if not asking for a correct value', 'I am looking for some help with scanned user-provided values. In my code below I want to check if every entered value is integer (ca, ta, dd, gs), and if not - loop a message about it to the point where it will be. I saw few old questions about it, but I couldn\'t get it to work anyways. I am fairly new to programming, so I don\'t know much. I appreciate every answer.', '2021-09-19 00:53:49', 5, 2),
(4, 'React JS Hooks', 'There was an error when i tried to use  \"const userData = JSON.parse(localStorage.getItem(\"userData\")); \" with in my code. It says userData Not defined. Help me!', '2021-09-23 01:59:39', 1, 14),
(5, 'DSA Trees', 'When considering the RBT, What are the data retrieving methods', '2021-09-23 02:02:23', 1, 14),
(6, 'What is ACID property', 'A transaction is a single logical unit of work that accesses and possibly modifies the contents of a database. Transactions access data using read and write operations. \nIn order to maintain consistency in a database, before and after the transaction, certain properties are followed. These are called ACID properties. ', '2021-09-23 02:18:03', 1, 14);

-- --------------------------------------------------------

--
-- Table structure for table `q_and_a`
--

CREATE TABLE `q_and_a` (
  `q_id` int(10) NOT NULL,
  `answer` varchar(1000) NOT NULL,
  `questions` varchar(1000) NOT NULL,
  `tag` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `q_and_a`
--

INSERT INTO `q_and_a` (`q_id`, `answer`, `questions`, `tag`) VALUES
(1, 'Be a global leader in computing, advancing the frontiers of new knowledge through learning and research.', 'vission of the UCSC', ''),
(2, 'To advance and enhan computing knowledge,fostering global strategic alliances,promoting crossdisciplinary research,producing socially responsibleprofessionalswith entrepreneurial skills,leadership qualities and integrity contributing to position the country  as a knowledge hub in the region.', 'Mission of the UCSC', ''),
(3, 'Bachelor of Science in Computer Science (BSc. in CS) , Bachelor of Science Honours in Computer Science (BSc. (Hons) in CS) , Bachelor of Science Honours in Software Engineering (BSc. (Hons) in SE) , Bachelor of Science in Information Systems (BSc. in IS) , Bachelor of Science Honours in Information Systems (BSc. (Hons) in IS)', 'Internal Undergraduate Degree Programmes', ''),
(4, 'Master of Computer Science (MCS) , Master of Science in Computer Science (MSc. in CS) , Master of Information Technology (MIT) , Master of Information Security (MIS) , Master of Business Analytics (MBAnalytics) , Master of Cybersecurity (MC)', 'Postgraduate Degree Programmes', ''),
(5, 'UCSC Building Complex, 35 Reid Ave, Colombo 00700', 'What is ucsc address', ''),
(18, 'Check Out the UCSC Library \nhttps://www.youtube.com/watch?v=A2xK_YtLT3c', 'Is UCSC have its Own Library?', 'non-academic'),
(19, 'Minimum 18 Credits mustbe  completed', 'How many Credits that need to complete in 3rd Year 1st Semester', 'academic'),
(20, 'Professor V. K. Samaranayake is the founder of UCSC', 'Who is the Founder of UCSC', 'academic'),
(21, 'Yes ! there is a well maintaind canteen facility with UCSC', 'Is there a Canteen inside the UCSC', 'non-academic'),
(22, '50 Students can do the Hons Degree Programme ', 'How many students can do 4th Year CS degree Programme?', 'academic');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `userType` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  `contactnumber` varchar(15) NOT NULL,
  `status` varchar(128) NOT NULL DEFAULT 'active',
  `alumnistatus` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `fname`, `lname`, `userType`, `email`, `password`, `isActive`, `contactnumber`, `status`, `alumnistatus`, `createdAt`, `updatedAt`) VALUES
(0, 'PUBLICUSER', 'PUBLIC', 'USER', 'PUBLIC', 'PUBLIC@PUBLIC.COM', 'public1234', 1, '0771110052', 'active', 0, '2021-09-22 17:00:36', '2021-09-22 17:00:36'),
(1, 'AbisesWeerasekara', 'Abises', 'Weerasekara', 'UNIONST', '2018CS145@STU.UCSC.CMB.AC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0777852456', 'active', 0, '2021-09-20 07:34:04', '2021-09-20 07:34:04'),
(2, 'UthpalaRuwanara', 'Uthpala', 'Ruwanara', 'STUDENT', '2018CS150@STU.UCSC.CMB.AC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0771110052', 'active', 0, '2021-09-20 07:04:14', '2021-09-20 07:04:14'),
(4, 'NimashaSupunpraba', 'Nimasha', 'Supunpraba', 'ALUMNI', '2018CS170@UCSC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0773952465', 'active', 0, '2021-09-20 07:07:14', '2021-09-20 07:07:14'),
(8, 'AnurdaWichramasinghe', 'Anurda', 'Wichramasinghe', 'STUDENT', '2018CS160@UCSC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0779876542', 'active', 0, '2021-09-20 07:06:01', '2021-09-20 07:06:01'),
(11, 'DhanuAnjana', 'Dhanu', 'Anjana', 'ADMIN', 'ADMIN@UCSC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0777852456', 'active', 0, '2021-09-20 07:10:29', '2021-09-20 07:10:29'),
(14, 'ManulMadara', 'Manul', 'Madara', 'STUDENT', '2018CS180@STU.UCSC.CMB.AC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0777852456', 'active', 0, '2021-09-20 12:20:42', '2021-09-20 12:20:42'),
(100, 'GihanSenevirathne', 'Gihan', 'Senevirathne', 'COUNSELLOR', 'PGP@UCSC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0777852456', 'active', 0, '2021-09-21 11:07:49', '2021-09-21 11:07:49'),
(101, 'ThamaraWeerasinghe', 'Thamara', 'Weerasinghe', 'COUNSELLOR', 'TWT@UCSC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0777852456', 'notactive', 0, '2021-09-21 11:08:32', '2021-09-21 11:08:32'),
(102, 'NilaniThushanthika', 'Nilani', 'Thushanthika', 'COUNSELLOR', 'NTM@ucsc.lk', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0777852456', 'deactive', 0, '2021-09-21 11:09:10', '2021-09-21 11:09:10'),
(111, 'Anjana Dodampe', 'Anjana ', 'Dodampe', 'STUDENT', '2019CS548@UCSC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0778963214', 'deactive', 0, '2021-09-22 11:48:10', '2021-09-22 11:48:10'),
(112, 'SudeshiUthpala', 'Sudeshi', 'Uthpala', 'STUDENT', '2018CS365@STU.UCSC.CMB.AC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0714545963', 'active', 0, '2021-09-22 11:50:23', '2021-09-22 11:50:23'),
(113, 'PramodManeesha', 'Pramod', 'Maneesha', 'STUDENT', '2019IS125@UCSC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0758964569', 'active', 1, '2021-09-22 11:51:18', '2021-09-22 11:51:18'),
(114, 'Dasun Gamage', 'Dasun ', 'Gamage', 'STUDENT', '2018CS985@STU.UCSC.CMB.AC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0721578945', 'active', 0, '2021-09-22 11:52:02', '2021-09-22 11:52:02'),
(115, 'IshanGamage', 'Ishan', 'Gamage', 'STUDENT', '2018CS378@STU.UCSC.CMB.AC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0761141147', 'active', 0, '2021-09-22 11:53:11', '2021-09-22 11:53:11'),
(116, 'NimalJayasekara', 'Nimal', 'Jayasekara', 'STUDENT', '2019IS789@UCSC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0717894565', 'active', 0, '2021-09-22 11:53:54', '2021-09-22 11:53:54'),
(117, 'HeshaniChamindi', 'Heshani', 'Chamindi', 'STUDENT', '2019CS478@UCSC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0763571479', 'active', 0, '2021-09-22 11:54:53', '2021-09-22 11:54:53'),
(118, 'MalithMandara', 'Malith', 'Mandara', 'STUDENT', '2020CS147@UCSC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0787787878', 'active', 0, '2021-09-22 11:55:56', '2021-09-22 11:55:56'),
(119, 'KuvinduMendis', 'Kuvindu', 'Mendis', 'ALUMNI', 'KMENDIS@GMAIL.COM', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0771110052', 'deactive', 0, '2021-09-22 11:56:58', '2021-09-22 11:56:58'),
(120, 'DiwangaAmasith', 'Diwanga', 'Amasith', 'ALUMNI', 'DAMASITH@GMAIL.COM', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0776754125', 'active', 0, '2021-09-22 11:57:45', '2021-09-22 11:57:45'),
(121, 'OsandaLelum', 'Osanda', 'Lelum', 'ALUMNI', 'OSA@GMAIL.COM', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '077895412', 'notactive', 0, '2021-09-22 11:58:14', '2021-09-22 11:58:14'),
(122, 'Eranga Jeewantha', 'Eranga ', 'Jeewantha', 'ALUMNI', 'ERANGA@YAHOO.COM', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0787747575', 'notactive', 0, '2021-09-22 11:58:50', '2021-09-22 11:58:50'),
(123, 'KasunDeemantha', 'Kasun', 'Deemantha', 'ALUMNI', 'KASUN@GMAIL.COM', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0774561478', 'notactive', 0, '2021-09-22 11:59:28', '2021-09-22 11:59:28'),
(124, 'NiroshanDickwella', 'Niroshan', 'Dickwella', 'ALUMNI', 'NIRODICKWELLA@GMAIL.COM', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '074123789', 'notactive', 0, '2021-09-22 12:00:11', '2021-09-22 12:00:11'),
(125, 'IsurangaWishwa', 'Isuranga', 'Wishwa', 'STUDENT', '2018CS741@STU.UCSC.CMB.AC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0719631487', 'active', 0, '2021-09-22 12:00:48', '2021-09-22 12:00:48'),
(126, 'ThinupaJayalath', 'Thinupa', 'Jayalath', 'STUDENT', '2019CS334@STU.UCSC.CMB.AC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0747747751', 'active', 1, '2021-09-22 12:01:29', '2021-09-22 12:01:29'),
(127, 'NimeshJayakodi', 'Nimesh', 'Jayakodi', 'STUDENT', '2019CS667@UCSC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0783321145', 'active', 0, '2021-09-22 12:02:19', '2021-09-22 12:02:19'),
(128, 'NimanthaWeerasinghe', 'Nimantha', 'Weerasinghe', 'STUDENT', '2020IS789@UCSC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0776872415', 'active', 0, '2021-09-22 12:03:01', '2021-09-22 12:03:01'),
(129, 'IrushikaYatawara', 'Irushika', 'Yatawara', 'STUDENT', '2018CS978@STU.UCSC.CMB.AC.LK', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0787749696', 'active', 0, '2021-09-22 12:03:53', '2021-09-22 12:03:53'),
(130, 'Mahendrapererea', 'Mahendra', 'pererea', 'ALUMNI', 'MAHENDRA@GMAIL.COM', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0778774774', 'notactive', 0, '2021-09-22 12:04:46', '2021-09-22 12:04:46'),
(131, 'NipunaIndrajith', 'Nipuna', 'Indrajith', 'ALUMNI', 'NIPUNAINA@GMAIL.COM', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0796696695', 'notactive', 0, '2021-09-22 12:05:29', '2021-09-22 12:05:29'),
(132, 'PawanMigara', 'Pawan', 'Migara', 'ALUMNI', 'PAWAN@GMAIL.COM', 'e9cee71ab932fde863338d08be4de9dfe39ea049bdafb342ce659ec5450b69ae', 1, '0719638745', 'notactive', 0, '2021-09-22 12:06:22', '2021-09-22 12:06:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers_helpstack`
--
ALTER TABLE `answers_helpstack`
  ADD PRIMARY KEY (`ans_id`),
  ADD KEY `answer_by` (`answer_by`),
  ADD KEY `q_id` (`q_id`);

--
-- Indexes for table `auction`
--
ALTER TABLE `auction`
  ADD PRIMARY KEY (`auction_id`);

--
-- Indexes for table `auction_details`
--
ALTER TABLE `auction_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `authtokens`
--
ALTER TABLE `authtokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `cloth`
--
ALTER TABLE `cloth`
  ADD PRIMARY KEY (`donation_id`);

--
-- Indexes for table `device`
--
ALTER TABLE `device`
  ADD PRIMARY KEY (`donation_id`);

--
-- Indexes for table `donations`
--
ALTER TABLE `donations`
  ADD PRIMARY KEY (`donationID`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `doners`
--
ALTER TABLE `doners`
  ADD PRIMARY KEY (`id`),
  ADD KEY `doner_id` (`doner_id`),
  ADD KEY `donation_id` (`donation_id`);

--
-- Indexes for table `fundraising`
--
ALTER TABLE `fundraising`
  ADD PRIMARY KEY (`fundID`);

--
-- Indexes for table `job_vacancy`
--
ALTER TABLE `job_vacancy`
  ADD PRIMARY KEY (`jobpost_id`),
  ADD KEY `posted_by` (`posted_by`);

--
-- Indexes for table `learning_groups`
--
ALTER TABLE `learning_groups`
  ADD PRIMARY KEY (`lgId`);

--
-- Indexes for table `money`
--
ALTER TABLE `money`
  ADD PRIMARY KEY (`donation_id`);

--
-- Indexes for table `note`
--
ALTER TABLE `note`
  ADD PRIMARY KEY (`donation_id`);

--
-- Indexes for table `other`
--
ALTER TABLE `other`
  ADD PRIMARY KEY (`donation_id`);

--
-- Indexes for table `pay_product`
--
ALTER TABLE `pay_product`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `test6` (`user_id`),
  ADD KEY `test5` (`product_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `test4` (`user_id`);

--
-- Indexes for table `p_device`
--
ALTER TABLE `p_device`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `p_note`
--
ALTER TABLE `p_note`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `p_other`
--
ALTER TABLE `p_other`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `question_helpstack`
--
ALTER TABLE `question_helpstack`
  ADD PRIMARY KEY (`q_id`),
  ADD KEY `ask_by` (`ask_by`);

--
-- Indexes for table `q_and_a`
--
ALTER TABLE `q_and_a`
  ADD PRIMARY KEY (`q_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers_helpstack`
--
ALTER TABLE `answers_helpstack`
  MODIFY `ans_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `auction`
--
ALTER TABLE `auction`
  MODIFY `auction_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `auction_details`
--
ALTER TABLE `auction_details`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `donations`
--
ALTER TABLE `donations`
  MODIFY `donationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `doners`
--
ALTER TABLE `doners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `fundraising`
--
ALTER TABLE `fundraising`
  MODIFY `fundID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT for table `job_vacancy`
--
ALTER TABLE `job_vacancy`
  MODIFY `jobpost_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `learning_groups`
--
ALTER TABLE `learning_groups`
  MODIFY `lgId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `pay_product`
--
ALTER TABLE `pay_product`
  MODIFY `payment_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT for table `question_helpstack`
--
ALTER TABLE `question_helpstack`
  MODIFY `q_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `q_and_a`
--
ALTER TABLE `q_and_a`
  MODIFY `q_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=136;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers_helpstack`
--
ALTER TABLE `answers_helpstack`
  ADD CONSTRAINT `answers_helpstack_ibfk_1` FOREIGN KEY (`answer_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `answers_helpstack_ibfk_2` FOREIGN KEY (`q_id`) REFERENCES `question_helpstack` (`q_id`);

--
-- Constraints for table `cloth`
--
ALTER TABLE `cloth`
  ADD CONSTRAINT `cloth_ibfk_1` FOREIGN KEY (`donation_id`) REFERENCES `donations` (`donationID`);

--
-- Constraints for table `pay_product`
--
ALTER TABLE `pay_product`
  ADD CONSTRAINT `test5` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  ADD CONSTRAINT `test6` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `p_device`
--
ALTER TABLE `p_device`
  ADD CONSTRAINT `test1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- Constraints for table `p_note`
--
ALTER TABLE `p_note`
  ADD CONSTRAINT `test3` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- Constraints for table `p_other`
--
ALTER TABLE `p_other`
  ADD CONSTRAINT `test2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
