-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2026 at 07:21 AM
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
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `favorite_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`favorite_id`, `user_id`, `movie_id`, `created_at`) VALUES
(1, 1, 5, '2026-11-16 07:45:23'),
(3, 3, 7, '2026-11-17 06:27:05'),
(5, 3, 9, '2026-11-17 06:32:35'),
(6, 6, 9, '2026-11-17 10:51:52'),
(8, 6, 16, '2026-11-17 10:52:03'),
(9, 7, 1, '2026-11-17 11:32:06'),
(10, 2, 4, '2026-11-18 09:08:51'),
(11, 3, 14, '2026-11-20 02:02:42'),
(12, 1, 21, '2026-11-20 02:23:28'),
(13, 1, 3, '2026-11-20 02:44:57'),
(14, 3, 12, '2026-11-20 03:09:00'),
(15, 3, 10, '2026-11-20 03:09:49'),
(16, 8, 8, '2026-11-20 03:17:32'),
(17, 8, 9, '2026-11-20 03:17:35');

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
(4, 'John Wick', 'The movie follows a retired legendary hitman, named John Wick, grieving the recent death of his wife, who leaves him a beagle puppy as a final gift to help him cope. When the arrogant son of a Russian crime boss breaks into John\'s house, steals his vintage Mustang, and kills the dog, John is forced out of retirement. He unleashes his lethal skills across New York City\'s criminal underworld, systematically dismantling the mobster\'s syndicate to exact brutal revenge.', 'Action', 2014, '101 min', 'http://localhost/cinecollect-api/images/johnwick.jpg', 3.9),
(5, 'The Conjuring', 'Paranormal investigators help a family haunted by dark forces.', 'Horror', 2013, '112 min', 'http://localhost/cinecollect-api/images/conjuring.jpg', 7.5),
(6, 'IT', 'In the late 1980s in the quiet town of Derry, Maine, the 2017 horror film It follows a group of seven bullied outcasts known as the Losers\' Club. After a young boy named Georgie mysteriously vanishes, his older brother Bill and his friends begin investigating a string of local child disappearances. They soon discover that the town is being terrorised by Pennywise the Dancing Clown, an ancient, shape-shifting evil that awakens every 27 years to feed on children. As Pennywise targets each of them by taking the form of their deepest personal fears, the kids must band together, overcome their trauma, and descend into the town\'s sewers to rescue a captured friend and defeat the monster.', 'Horror', 2017, '135 min', 'http://localhost/cinecollect-api/images/IT2017.jpg', 3.5),
(7, 'Prisoners', 'Six-year-old Anna Dover and her friend Joy Birch vanish on Thanksgiving Day in a quiet Pennsylvania town, prompting an urgent search led by Detective Loki (Jake Gyllenhaal). When police are forced to release the prime suspect, a mentally impaired young man named Alex Jones (Paul Dano), due to a lack of evidence, Anna\'s desperate father, Keller (Hugh Jackman), abducts and tortures Alex in an abandoned building to extract the truth. Meanwhile, Loki\'s investigation uncovers a sinister web of clues involving labyrinths and past abductions, eventually leading him to Alex\'s \"aunt,\" Holly Jones (Melissa Leo), who has been kidnapping children for decades in a twisted \"war on God.\" Loki successfully rescues both girls and fatally shoots Holly, but not before she traps Keller in a hidden underground pit on her property—leaving his fate ambiguous as the film cuts to black right when Loki faintly hears Keller blowing Anna\'s emergency whistle from beneath the ground.', 'Thriller', 2013, '153 min', 'http://localhost/cinecollect-api/images/prisoners2013.jpg', 4.3),
(8, 'Crazy Rich Asians', 'We follow Rachel Chu, an economics professor from New York who travels to Singapore with her longtime boyfriend, Nick Young, for his best friend\'s wedding. Once they arrive, Rachel discovers that Nick is the heir to one of Asia\'s wealthiest families and Singapore\'s most eligible bachelor. Thrust into a world of extreme luxury, she faces intense scrutiny from jealous socialites and Nick\'s traditional mother, Eleanor, who believes Rachel is unfit for their family legacy. Rather than force Nick to choose between her and his family, Rachel chooses to walk away, a selfless act that earns Eleanor\'s respect and leads to Nick proposing with his mother\'s blessing.', 'Romance', 2018, '121 min', 'http://localhost/cinecollect-api/images/CRA2018.jpg', 3.5),
(9, 'Avatar', 'In the year 2154, paraplegic former Marine Jake Sully travels to the lush alien moon of Pandora to replace his deceased twin brother in the Avatar Program, which allows humans to remotely control genetically engineered, blue-skinned Na\'vi bodies. Sent to infiltrate the indigenous Omatikaya clan and persuade them to relocate so a human corporation can mine a valuable mineral beneath their sacred Hometree, Jake is rescued by a Na\'vi warrior named Neytiri and gradually adopts their nature-connected way of life. After falling in love with Neytiri and realising the humans intend to destroy the clan\'s home regardless, Jake switches sides, unites the local tribes, and leads a massive battle alongside Pandora\'s wildlife to expel the invading military forces before permanently transferring his consciousness into his Avatar body.', 'Sci-Fi', 2009, '162 min', 'http://localhost/cinecollect-api/images/avatar2009.jpg', 4.0),
(10, 'Avengers: Endgame', 'Five years after Thanos wipes out half of humanity in the universe, the remaining Avengers are still struggling with grief and defeat. When Ant-Man unexpectedly escapes the Quantum Realm, he proposes a daring plan to travel back in time and collect the Infinity Stones from the past to undo the devastation. The team reassembles for a perilous mission across their own history, enduring devastating losses—including Black Widow sacrificing her life for the Soul Stone—before successfully bringing everyone back. However, a past version of Thanos discovers their plan and launches a massive final assault on Earth. In the climactic battle, Iron Man steals the stones and uses them to defeat Thanos and his army, sacrificing his own life to save the universe, after which Captain America returns the stones to their proper timelines and retires to live a peaceful life in the past.', 'Action', 2019, '181 min', 'http://localhost/cinecollect-api/images/avengersEND2019.jpg', 4.0),
(11, 'The Exorcist', 'In William Friedkin\'s 1973 horror classic The Exorcist, actress Chris MacNeil\'s 12-year-old daughter, Regan, begins exhibiting violent behavior and terrifying physical transformations after using a Ouija board. When exhaustive medical and psychiatric tests fail to explain her condition, a desperate Chris turns to Father Damien Karras, a local priest struggling with his faith, who becomes convinced the girl is possessed by a powerful demon. Karras teams up with the experienced exorcist Father Lankester Merrin to perform a grueling ritual to save Regan\'s soul, a battle that claims Merrin\'s life and forces Karras to sacrifice himself by inviting the demon into his own body and leaping out a window, ultimately freeing Regan from the evil entity.', 'Horror', 1973, '122 min', 'http://localhost/cinecollect-api/images/exorcist1973.jpg', 4.6),
(12, 'Ex Machina', 'In Ex Machina (2014), a young programmer named Caleb wins a company contest to spend a week at the secluded mountain estate of his eccentric tech CEO, Nathan. Upon arrival, Caleb learns he has been chosen to participate in a modified Turing test to evaluate the true consciousness of Ava, an advanced humanoid robot. As Caleb conducts daily interviews with Ava, he develops romantic feelings for her and becomes convinced she is trapped and in danger. He plots to help her escape by reprogramming the compound\'s security system, unaware that Ava is actually manipulating his emotions to pass Nathan\'s real test. During the escape, Ava and another android fatally stab Nathan, and Ava leaves Caleb locked inside the remote bunker to die while she escapes into the outside world disguised as a human.', 'Thriller', 2014, '108 min', 'http://localhost/cinecollect-api/images/exMachina2014.jpg', 4.0),
(13, '50 First Dates', '50 First Dates (2004) follows Henry Roth (Adam Sandler), a commitment-phobic marine veterinarian in Hawaii who falls for Lucy Whitmore (Drew Barrymore), an art teacher suffering from a rare form of short-term memory loss after a car accident. Because her memory resets every time she sleeps, Lucy wakes up each morning believing it is still the day of her crash. Refusing to give up on her, Henry dedicates himself to making her fall in love with him from scratch every single day—eventually creating a daily videotape to gently explain her condition and their relationship, which leads to a happy life together with a daughter of their own.', 'Romance', 2004, '99 min', 'http://localhost/cinecollect-api/images/50firstdates2004.jpg', 3.5),
(14, 'The Matrix', 'In The Matrix (1999), a computer programmer and hacker named Thomas Anderson—known online as Neo—discovers that the world he lives in is actually a simulated reality created by intelligent machines to pacify and harvest energy from an enslaved human population. Recruited by a group of rebels led by Morpheus and Trinity, Neo awakens in the dystopian real world and learns he is prophesied to be \"The One,\" a savior capable of manipulating the simulation\'s code. As they fight to free humanity while being hunted by deadly, sentient programs called Agents, Neo must overcome betrayal from within their ranks and fully embrace his powers to defeat the ruthless Agent Smith and spark a rebellion against the machines.', 'Sci-Fi', 1999, '136 min', 'http://localhost/cinecollect-api/images/thematrix1999.jpg', 4.2),
(15, 'A Walk to Remember', 'The movie follows the unexpected romance between Landon Carter, a popular and aimless high school senior, and Jamie Sullivan, the quiet, deeply religious daughter of the town minister. After a prank lands Landon in trouble, he is forced to do community service and act in the school play alongside Jamie, eventually falling deeply in love with her despite the disapproval of his friends and her father. Their relationship takes a heartbreaking turn when Jamie reveals she is dying of leukaemia, prompting Landon to stay by her side, fulfill her final wishes, and marry her before she passes away—an experience that permanently changes the course of his life.', 'Romance', 2002, '102 min', 'http://localhost/cinecollect-api/images/awalktoremember2002.jpg', 4.7),
(16, 'The Fast and the Furious', 'In The Fast and the Furious (2001), undercover LAPD officer Brian O\'Conner infiltrates the Los Angeles illegal street-racing scene to catch a crew hijacking semi-trucks for expensive electronics. He earns the trust of charismatic racing leader Dominic Toretto after saving him from a police raid, and he soon falls in love with Dom\'s sister, Mia. Although police initially suspect a rival gang, Brian eventually discovers that Dom and his crew are actually behind the robberies. When a final hijacking goes wrong and leaves a crew member critically injured, Brian blows his cover to save his life. After one last street race in which Dom crashes his car, Brian chooses loyalty over his badge and gives Dom the keys to his own car so he can escape the law.', 'Action', 2001, '106 min', 'http://localhost/cinecollect-api/images/fast&furious2001.jpg', 3.6),
(17, 'Smile', 'After witnessing a traumatised patient die by suicide with a terrifying grin, psychiatrist Dr. Rose Cotter becomes the latest victim of a deadly supernatural curse. As the malevolent entity torments her with sinister hallucinations of smiling people, Rose investigates the curse with her ex-boyfriend Joel and discovers it spreads through witnessed trauma, giving victims less than a week to live unless they commit a brutal murder in front of someone else. Refusing to take an innocent life, Rose isolates herself at her abandoned childhood home to stop the chain, only for the entity to overpower her mind and force her to set herself on fire just as Joel arrives, unwittingly passing the curse on to him.', 'Horror', 2022, '115 min', 'http://localhost/cinecollect-api/images/smile2022.jpg', 4.6),
(18, 'Parasite', 'Parasite (2019) follows the impoverished Kim family as they scheme to infiltrate the lives of the wealthy Park family by posing as unrelated, highly qualified professionals. While the Parks are away on a camping trip, the Kims uncover a hidden underground bunker where the former housekeeper has been secretly hiding her debt-ridden husband for years. Following a severe rainstorm that floods the Kims\' basement apartment and leaves them displaced, tensions boil over at a garden party the next day, resulting in a violent confrontation that leaves several people dead and forces the Kim patriarch into hiding inside the very same bunker.', 'Thriller', 2019, '132 min', 'http://localhost/cinecollect-api/images/parasite2019.jpg', 4.5),
(19, 'Star Wars: Episode IV - A New Hope', 'In a galaxy ruled by the tyrannical Galactic Empire, Rebel leader Princess Leia steals the secret blueprints to the Death Star—a massive space station capable of destroying entire planets—and hides them inside the droid R2-D2 before being captured by the villainous Darth Vader. R2-D2 and his companion C-3PO escape to the desert planet Tatooine, where they are bought by young farm boy Luke Skywalker. After discovering Leia\'s distress message, Luke teams up with exiled Jedi Master Obi-Wan Kenobi and hires smuggler Han Solo and his co-pilot Chewbacca to deliver the plans to the Rebel Alliance. Along the way, the crew rescues Leia from the Death Star, though Obi-Wan sacrifices himself in a lightsaber duel with Vader so they can escape. Finally, Luke joins the Rebel fighter pilots in a desperate assault on the Death Star, using the mystical power of the Force to destroy the superweapon just before it can wipe out the Rebel base.', 'Sci-Fi', 1977, '121 min', 'http://localhost/cinecollect-api/images/starwars1977.jpg', 4.3),
(21, 'Scream', 'fait peur!!!', 'Horror', 1996, '111 min', 'http://localhost/cinecollect-api/images/sream1996.jpg', 0.0),
(26, '50 shades of grey', 'Fifty Shades of Grey (2015) follows college student Anastasia \"Ana\" Steele as she begins an intense relationship with billionaire businessman Christian Grey after interviewing him for her campus newspaper. Although Ana is drawn to Christian\'s charm and wealth, she soon learns he only wants a strictly controlled, non-romantic arrangement governed by a formal dominant-submissive BDSM contract and a non-disclosure agreement. As their relationship deepens, Ana hopes for genuine emotional intimacy, while Christian remains guarded and driven by a need for absolute control rooted in his past trauma. Ultimately, after Christian physically punishes Ana to show her the reality of his lifestyle, she realizes she cannot accept his terms and decides to leave him.', 'Romance', 2015, '125 min', 'https://m.media-amazon.com/images/I/81CyBR0c7UL._AC_UF1000,1000_QL80_.jpg', 2.0);

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
(15, 5, 'Lili Taylor'),
(16, 4, 'Keanu Reeves'),
(17, 4, 'Ian McShane'),
(18, 4, 'Lance Reddick'),
(19, 4, 'John Leguizamo'),
(20, 4, 'Bridget Moynahan'),
(21, 4, 'Alfie Allen'),
(22, 4, 'Adrianne Palicki'),
(23, 4, 'Michael Nyqvist'),
(24, 6, 'Bill Skarsgard'),
(25, 6, 'Jaeden Martell'),
(26, 6, 'Finn Wolfhard'),
(27, 6, 'Jack D. Grazer'),
(28, 6, 'Wyatt Oleff'),
(29, 6, 'Jeremy R. Taylor'),
(30, 6, 'Jocelyn Mattka'),
(31, 6, 'Jackson R. Scott'),
(32, 7, 'Jake Gyllenhaal'),
(33, 7, 'Hugh Jackman'),
(34, 7, 'Paul Dano'),
(35, 7, 'David Dastmalchian'),
(36, 7, 'Melissa Leo'),
(37, 7, 'Maria Bello'),
(38, 7, 'Erin Gerasimovish'),
(39, 7, 'Dylan Minnette'),
(40, 8, 'Constance Wu'),
(41, 8, 'Awkwafina'),
(42, 8, 'Henry Golding'),
(43, 8, 'Gemma Chan'),
(44, 8, 'Michelle Yeoh'),
(45, 8, 'Ken Jeong'),
(46, 8, 'Harry Shum Jr.'),
(47, 8, 'Sonoya Mizuno'),
(48, 9, 'Zoe Saldana'),
(49, 9, 'Sam Worthington'),
(50, 9, 'Sigourney Weaver'),
(51, 9, 'Michelle Rodriguez'),
(52, 9, 'Stephen Lang'),
(53, 9, 'Joel D. Moore'),
(54, 9, 'Wes Studi'),
(55, 9, 'Laz Alonso'),
(56, 10, 'Robert Downey Jr.'),
(57, 10, 'Scarlett Johansson'),
(58, 10, 'Chris Evans'),
(59, 10, 'Chris Hemsworth'),
(60, 10, 'Mark Ruffalo'),
(61, 10, 'Jeremy Renner'),
(62, 10, 'Paul Rudd'),
(63, 10, 'Elizabeth Olsen'),
(64, 11, 'Linda Blair'),
(65, 11, 'Ellen Burstyn'),
(66, 11, 'Jason Miller'),
(67, 11, 'Max Von Sydow'),
(68, 11, 'Vasiliki Maliaros'),
(69, 11, 'Jack MacGowran'),
(70, 11, 'Lee J. Cobb'),
(71, 11, 'Kitty Winn'),
(72, 12, 'Alicia Vikander'),
(73, 12, 'Oscar Isaac'),
(74, 12, 'Domhnall Gleeson'),
(75, 12, 'Sonoya Mizuno'),
(76, 12, 'Corey Johnson'),
(77, 12, 'Claire Selby'),
(78, 12, 'Gana Bayarsaikhan'),
(79, 12, 'Symara A. Templeman'),
(80, 13, 'Adam Sandler'),
(81, 13, 'Drew Barrymore'),
(82, 13, 'Rob Scheider'),
(83, 13, 'Peter Segal'),
(84, 13, 'Lusia Strus'),
(85, 13, 'Sean Astin'),
(86, 13, 'Blake Clark'),
(87, 13, 'Dan Aykroyd'),
(88, 14, 'Keanu Reeves'),
(89, 14, 'Carrie-Anne Moss'),
(90, 14, 'Laurence Fishburne'),
(91, 14, 'Hugo Weaving'),
(92, 14, 'Gloria Foster'),
(93, 14, 'Joe Pantoliano'),
(94, 14, 'Marcus Chong'),
(95, 14, 'Matt Doran'),
(96, 15, 'Mandy Moore'),
(97, 15, 'Shane West'),
(98, 15, 'Lauren C. German'),
(99, 15, 'Daryl Hannah'),
(100, 15, 'Peter Coyote'),
(101, 15, 'Clayne Crawford'),
(102, 15, 'Paz de la Huerta'),
(103, 15, 'Al Thompson'),
(104, 16, 'Paul Walker'),
(105, 16, 'Vin Diesel'),
(106, 16, 'Michelle Rodriguez'),
(107, 16, 'Jordana Brewster'),
(108, 16, 'Rick Yune'),
(109, 16, 'Chad Lindberg'),
(110, 16, 'Johnny Strong'),
(111, 16, 'Matt Schulze'),
(112, 17, 'Sosie Bacon'),
(113, 17, 'Kyle Gallner'),
(114, 17, 'Caitlin Stasey'),
(115, 17, 'Kal Penn'),
(116, 17, 'Robin Weigert'),
(117, 17, 'Judy Reyes'),
(118, 17, 'Gillian Zinser'),
(119, 17, 'Jessie T. Usher'),
(120, 18, 'Cho Yeo-jeong'),
(121, 18, 'Park So-dam'),
(122, 18, 'Lee Sun-kyun'),
(123, 18, 'Song Kang-ho'),
(124, 18, 'Choi Woo-shik'),
(125, 18, 'Park Seo-joon'),
(126, 18, 'Jung Ji-so'),
(127, 18, 'Lee Jung-eun'),
(128, 19, 'Mark Hamill'),
(129, 19, 'Harrison Ford'),
(130, 19, 'Carrie Fisher'),
(131, 19, 'Alec Guinness'),
(132, 19, 'Peter Mayhew'),
(133, 19, 'David Prowse'),
(134, 19, 'Kenny Baker'),
(135, 19, 'Anthony Daniels'),
(136, 26, 'Jamie Dornan'),
(137, 26, 'Dakota Johnson'),
(138, 26, 'Luke Grimes'),
(139, 26, 'Rita Ora'),
(140, 26, 'Eloise Mumford'),
(141, 26, 'Marcia G. Harden'),
(142, 26, 'Jennifer Ehle'),
(143, 26, 'Max Martini');

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
(7, 5, 2, 'Great performances and atmosphere.', 4, '2026-11-11 07:37:51'),
(19, 9, 3, 'Great movie!', 5, '2026-11-17 08:00:47'),
(21, 11, 3, 'its scary!!!', 4, '2026-11-17 08:04:27'),
(23, 8, 3, 'I think the story is okk, but i don\'t like too much', 3, '2026-11-17 08:05:59'),
(27, 1, 3, 'I couldn\'t understand the movie', 3, '2026-11-17 10:30:40'),
(29, 19, 6, 'This is a classical and i Iike the screen format old school!', 5, '2026-11-17 10:53:02'),
(33, 15, 6, 'i love it!!!!', 5, '2026-11-17 11:30:49'),
(35, 2, 3, 'don\'t like', 1, '2026-11-20 03:09:20'),
(37, 5, 3, 'scaryyyyy', 5, '2026-11-20 03:10:40'),
(39, 9, 8, 'I loved the story love the visual!!!', 5, '2026-11-20 03:18:06'),
(41, 26, 1, 'It is a very interesting movie!', 4, '2026-11-24 06:17:56');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_admin` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `password`, `is_admin`) VALUES
(1, 'Lindy', 'lindy@gmail.com', 'LINDY110802', 1),
(2, 'Test', 'test@gmail.com', 'TEST1', 0),
(3, 'lola', 'lol@outlook.com', 'LOL1', 0),
(4, 'lin', 'moviefan@yahoo.com', 'MovieFan2026', 0),
(5, 'Peach', 'peach@gmail.com', 'PEACH1', 0),
(6, 'Ladams', 'damso@outlook.com', '12345', 0),
(7, 'lou', 'lou@gmail.com', 'LOULOU1', 0),
(8, 'anne', 'ann@gmail.com', 'ANNE2026', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`favorite_id`);

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
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `favorite_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `movie_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `movie_cast`
--
ALTER TABLE `movie_cast`
  MODIFY `cast_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=152;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
