-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 11, 2026 at 09:14 AM
-- Server version: 10.11.16-MariaDB
-- PHP Version: 8.3.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cinecollect`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `movie_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `genre` varchar(100) NOT NULL,
  `release_year` int(11) NOT NULL,
  `runtime` varchar(20) NOT NULL,
  `image_url` varchar(500) DEFAULT NULL,
  `rating` decimal(2,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`movie_id`, `title`, `description`, `genre`, `release_year`, `runtime`, `image_url`, `rating`) VALUES
(1, 'Interstellar', 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity survives.', 'Sci-Fi', 2014, '169 min', 'http://localhost/cinecollect-api/images/interstellar.jpg', 8.9),
(2, 'Dune', 'Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis.', 'Sci-Fi', 2021, '155 min', 'http://localhost/cinecollect-api/images/dune.jpg', 8.3),
(3, 'Blade Runner 2049', 'A young blade runner discovers a secret that could change society.', 'Sci-Fi', 2017, '164 min', 'http://localhost/cinecollect-api/images/bladerunner2049.jpg', 8.0),
(4, 'John Wick', 'An ex-hitman seeks vengeance against those who wronged him.', 'Action', 2014, '101 min', 'http://localhost/cinecollect-api/images/johnwick.jpg', 7.4),
(5, 'The Conjuring', 'Paranormal investigators help a family haunted by dark forces.', 'Horror', 2013, '112 min', 'http://localhost/cinecollect-api/images/conjuring.jpg', 7.5);

-- --------------------------------------------------------

--
-- Table structure for table `movie_cast`
--

CREATE TABLE `movie_cast` (
  `cast_id` int(11) NOT NULL,
  `movie_id` int(11) DEFAULT NULL,
  `actor_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movie_cast`
--

INSERT INTO `movie_cast` (`cast_id`, `movie_id`, `actor_name`) VALUES
(1, 1, 'Matthew McConaughey'),
(2, 1, 'Anne Hathaway'),
(3, 1, 'Jessica Chastain'),
(4, 2, 'Timothee Chalamet'),
(5, 2, 'Zendaya'),
(6, 2, 'Rebecca Ferguson'),
(7, 3, 'Ryan Gosling'),
(8, 3, 'Harrison Ford'),
(9, 3, 'Ana de Armas'),
(10, 3, 'Ryan Gosling'),
(11, 3, 'Harrison Ford'),
(12, 3, 'Ana de Armas'),
(13, 5, 'Vera Farmiga'),
(14, 5, 'Patrick Wilson'),
(15, 5, 'Lili Taylor');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `review_id` int(11) NOT NULL,
  `movie_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `review_text` text DEFAULT NULL,
  `review_rating` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`review_id`, `movie_id`, `user_id`, `review_text`, `review_rating`, `created_at`) VALUES
(1, 1, 1, 'Amazing visuals and storytelling.', 5, '2026-11-10 08:15:08'),
(2, 1, 2, 'One of the best sci-fi films ever made.', 5, '2026-11-10 08:15:08'),
(3, 3, 1, 'Beautiful cinematography.', 5, '2026-11-10 08:15:08'),
(4, 3, 1, 'A visually stunning sci-fi masterpiece.', 5, '2026-11-11 07:37:51'),
(5, 3, 2, 'Ryan Gosling was excellent.', 4, '2026-11-11 07:37:51'),
(6, 5, 1, 'One of the scariest horror movies ever made.', 5, '2026-11-11 07:37:51'),
(7, 5, 2, 'Great performances and atmosphere.', 4, '2026-11-11 07:37:51');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `password`) VALUES
(1, 'Lindy', 'lindy@gmail.com', 'LINDY110802'),
(2, 'Test', 'test@gmail.com', 'TEST1'),
(3, 'lol', 'lo@outlook.com', 'lol1'),
(4, 'lin', 'moviefan@yahoo.com', 'MovieFan2026');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`movie_id`);

--
-- Indexes for table `movie_cast`
--
ALTER TABLE `movie_cast`
  ADD PRIMARY KEY (`cast_id`),
  ADD KEY `movie_id` (`movie_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `movie_id` (`movie_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `movie_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `movie_cast`
--
ALTER TABLE `movie_cast`
  MODIFY `cast_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `movie_cast`
--
ALTER TABLE `movie_cast`
  ADD CONSTRAINT `movie_cast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`),
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
