-- phpMyAdmin SQL Dump
-- version 5.2.0-dev
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 26, 2022 at 06:22 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lime`
--

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `event` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `model` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`id`, `uuid`, `event`, `model_uuid`, `model_id`, `user_id`, `model`, `created_at`, `updated_at`) VALUES
(2, 'e26733e7-9a26-4552-ada6-f47ae1bc03c6', 'Survey Updated', '0d42e134-a568-4c60-bb04-7f8b46b163c6', 4, NULL, 'Survey', '2022-09-25 21:23:51', '2022-09-25 21:23:51'),
(3, '50ad1c0d-59ca-43fd-a3c8-0c80acdcbb03', 'Survey Updated', '0d42e134-a568-4c60-bb04-7f8b46b163c6', 4, NULL, 'Survey', '2022-09-25 21:24:38', '2022-09-25 21:24:38');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mailing_lists`
--

CREATE TABLE `mailing_lists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mailing_lists`
--

INSERT INTO `mailing_lists` (`id`, `uuid`, `name`, `user_id`, `created_at`, `updated_at`) VALUES
(1, '9f90ae0d-b2a9-4110-9856-f7d059a8f5c7', 'Abuja List', NULL, '2022-08-24 11:39:13', '2022-08-24 11:39:13'),
(2, '0fd029db-dacd-4564-857b-be6b8f374c4a', 'Lagos List', NULL, '2022-08-27 15:50:12', '2022-08-27 15:50:12'),
(3, '5ac42109-4489-4d96-871f-957e89485c29', 'Jos List', NULL, '2022-08-27 15:52:47', '2022-08-27 15:52:47'),
(4, '3b0e31e4-6281-4802-80a5-96a5680171d8', 'Katsina List', NULL, '2022-08-27 15:56:25', '2022-08-27 15:56:25'),
(5, '8f7fb6ad-75f1-4988-949e-b9ad21378a5d', 'Dummy List', NULL, '2022-09-16 14:59:23', '2022-09-16 14:59:23');

-- --------------------------------------------------------

--
-- Table structure for table `mailing_list_contacts`
--

CREATE TABLE `mailing_list_contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mailing_list_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mailing_list_contacts`
--

INSERT INTO `mailing_list_contacts` (`id`, `uuid`, `email`, `mailing_list_id`, `created_at`, `updated_at`) VALUES
(1, '8adbc9f6-c3a6-47fc-a3fa-6bcad0e54bb0', 'braimahjake@gmail.com', '1', '2022-08-24 11:39:29', '2022-08-24 11:39:29'),
(3, 'b3e3f087-e947-4511-99db-c0e31d18c50b', 'jbutt@gmail.com', '3', '2022-08-27 15:55:39', '2022-08-27 15:55:39'),
(4, '08464019-c3f1-48c4-aae5-421844ee764c', 'josephine_darakjy@darakjy.org', '3', '2022-08-27 15:55:39', '2022-08-27 15:55:39'),
(5, '2226e1cc-8352-45aa-90fc-8959a82fa590', 'art@venere.org', '3', '2022-08-27 15:55:39', '2022-08-27 15:55:39'),
(6, 'fac564e0-a42b-40eb-a5e8-edec53567f17', 'lpaprocki@hotmail.com', '3', '2022-08-27 15:55:39', '2022-08-27 15:55:39'),
(7, 'cb3a3bac-b8d0-4c0a-b23f-cda066429093', 'donette.foller@cox.net', '3', '2022-08-27 15:55:40', '2022-08-27 15:55:40'),
(8, '12a8b070-27ef-46f0-a988-415ae5a405a0', 'simona@morasca.com', '3', '2022-08-27 15:55:40', '2022-08-27 15:55:40'),
(9, '2c2dda6f-0b0d-4e9d-93d3-f62292352e8f', 'mitsue_tollner@yahoo.com', '3', '2022-08-27 15:55:40', '2022-08-27 15:55:40'),
(10, '1c6c2a21-a1b9-460c-9077-c10764a2c3b1', 'leota@hotmail.com', '3', '2022-08-27 15:55:40', '2022-08-27 15:55:40'),
(11, 'f7d21c1a-c903-4759-b118-62f30eeb9eab', 'sage_wieser@cox.net', '3', '2022-08-27 15:55:40', '2022-08-27 15:55:40'),
(12, '8a07a86e-f7a6-4f03-a59c-9654e46646ce', 'kris@gmail.com', '3', '2022-08-27 15:55:40', '2022-08-27 15:55:40'),
(13, 'af863cef-4a3e-4fae-b2a6-95cee63331b5', 'minna_amigon@yahoo.com', '3', '2022-08-27 15:55:40', '2022-08-27 15:55:40'),
(14, 'c2a8d215-d63c-447d-ab41-f9adef3922b4', 'amaclead@gmail.com', '3', '2022-08-27 15:55:40', '2022-08-27 15:55:40'),
(15, '34129608-2290-4f67-a39b-60798fc1e1dd', 'kiley.caldarera@aol.com', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(16, 'e78ad192-25b7-4684-8779-7330a5962440', 'gruta@cox.net', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(17, 'bfced3ac-54af-4500-b06c-2777e5f992a0', 'calbares@gmail.com', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(18, '2041a4e9-04eb-4672-a371-5dd6c5742be8', 'mattie@aol.com', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(19, '2bb6d4b2-fb75-460a-8830-5c78fd1863ea', 'meaghan@hotmail.com', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(20, '272bbb2a-e8e0-4930-aeae-bbb8e02b338a', 'gladys.rim@rim.org', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(21, 'af9d1316-32eb-4415-99fa-da512a755fa2', 'yuki_whobrey@aol.com', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(22, '85b3e731-67a1-45f2-8d2b-9cb9585f420a', 'fletcher.flosi@yahoo.com', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(23, 'e40a5780-5ae6-4eaf-a29b-bc57251bb6a5', 'bette_nicka@cox.net', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(24, 'be0133d6-f0fc-4ee4-8a43-404664c6b4aa', 'vinouye@aol.com', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(25, 'e7d2a8e5-324f-4443-9b2b-fca15cd425bb', 'willard@hotmail.com', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(26, '8bd9c3d4-64a4-40f7-bef9-953df2825989', 'mroyster@royster.com', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(27, '711ae1f1-7ad3-46f7-bdd4-885a96c5aa57', 'alisha@slusarski.com', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(28, '89bf4c70-3b46-4e52-9cff-4096bec7362a', 'allene_iturbide@cox.net', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(29, '8e468154-44ae-4c89-bb5b-f2bb2e2f7a3b', 'chanel.caudy@caudy.org', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(30, '8dac2f38-df3a-49c5-9bd4-211647503dd0', 'ezekiel@chui.com', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(31, '6ec5f163-d1f2-4c04-b83e-f6fb891dd87f', 'wkusko@yahoo.com', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(32, 'ee2aeaed-57e8-402f-95eb-0fd41621bc76', 'bfigeroa@aol.com', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(33, '814f5e3b-3525-478a-935e-3726e36cc441', 'ammie@corrio.com', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(34, 'f0945e07-96e1-49c0-b42c-72ec1465e8eb', 'francine_vocelka@vocelka.com', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(35, '2eb1a336-c51f-4774-80f3-128bb7da3d02', 'ernie_stenseth@aol.com', '3', '2022-08-27 15:55:41', '2022-08-27 15:55:41'),
(36, '6cccbb1f-7182-4e5a-99ac-c3e79a220627', 'albina@glick.com', '3', '2022-08-27 15:55:42', '2022-08-27 15:55:42'),
(37, '4ed09ed0-66e3-4e23-bfd0-0fef1e7fc810', 'asergi@gmail.com', '3', '2022-08-27 15:55:42', '2022-08-27 15:55:42'),
(38, '8eb9b6a9-86a1-4f8d-ba4b-196d5ec4255d', 'solange@shinko.com', '3', '2022-08-27 15:55:42', '2022-08-27 15:55:42'),
(39, '4fd7bc66-dad6-4273-a447-e999d4762fa6', 'jose@yahoo.com', '3', '2022-08-27 15:55:42', '2022-08-27 15:55:42'),
(40, 'f7588127-f2b1-4690-aea4-a3fb6e2f4f59', 'rozella.ostrosky@ostrosky.com', '3', '2022-08-27 15:55:42', '2022-08-27 15:55:42'),
(41, '1fd99ae5-96c0-44f2-a335-c09bebc751b1', 'valentine_gillian@gmail.com', '3', '2022-08-27 15:55:42', '2022-08-27 15:55:42'),
(42, 'a6aa85d6-4db4-41a2-9c38-53457f731a89', 'kati.rulapaugh@hotmail.com', '3', '2022-08-27 15:55:42', '2022-08-27 15:55:42'),
(43, '62eb2824-dd7e-448a-8462-2d1eebb35f6a', 'youlanda@aol.com', '3', '2022-08-27 15:55:42', '2022-08-27 15:55:42'),
(44, '2e22695f-69a1-4a96-866b-a9364b68f00d', 'doldroyd@aol.com', '3', '2022-08-27 15:55:42', '2022-08-27 15:55:42'),
(45, '679cceff-cd52-4963-ba59-67d5d857bdf3', 'roxane@hotmail.com', '3', '2022-08-27 15:55:42', '2022-08-27 15:55:42'),
(46, 'ef48ad03-6979-40be-8dd8-1f10aa8ba760', 'lperin@perin.org', '3', '2022-08-27 15:55:42', '2022-08-27 15:55:42'),
(47, 'eea66889-957d-41ac-8dd3-71c1a94d4bf7', 'erick.ferencz@aol.com', '3', '2022-08-27 15:55:42', '2022-08-27 15:55:42'),
(48, '7ab9caf4-0dc9-442e-b1bd-5e52f9d53c4f', 'fsaylors@saylors.org', '3', '2022-08-27 15:55:42', '2022-08-27 15:55:42'),
(49, '160ae306-4798-4fbb-8646-0216c276bdcf', 'jina_briddick@briddick.com', '3', '2022-08-27 15:55:42', '2022-08-27 15:55:42'),
(50, 'a598a9da-f8f0-4e7f-afb1-e0130e0dfec0', 'kanisha_waycott@yahoo.com', '3', '2022-08-27 15:55:42', '2022-08-27 15:55:42'),
(51, 'f2b08671-75d1-4f90-92da-e31cedfa6c16', 'emerson.bowley@bowley.org', '3', '2022-08-27 15:55:42', '2022-08-27 15:55:42'),
(52, 'a3c37fe7-17fb-498a-9673-ebcddb1a9a09', 'bmalet@yahoo.com', '3', '2022-08-27 15:55:42', '2022-08-27 15:55:42'),
(53, 'd8f8ed37-412f-484a-a5c3-af0c527900bd', 'bbolognia@yahoo.com', '3', '2022-08-27 15:55:43', '2022-08-27 15:55:43'),
(54, 'b625584d-fdcf-44a0-ab10-8f4559f2cc32', 'lnestle@hotmail.com', '3', '2022-08-27 15:55:43', '2022-08-27 15:55:43'),
(55, 'e6b0b797-84db-49ea-88ec-446722136f2d', 'sabra@uyetake.org', '3', '2022-08-27 15:55:43', '2022-08-27 15:55:43'),
(56, '78b82d05-cf98-4f33-bf1d-8d0ba49676c5', 'mmastella@mastella.com', '3', '2022-08-27 15:55:43', '2022-08-27 15:55:43'),
(57, '8f849d8f-e869-443e-9bf0-5ac6781d41bc', 'karl_klonowski@yahoo.com', '3', '2022-08-27 15:55:43', '2022-08-27 15:55:43'),
(58, '69538f1d-5bef-4d42-a60f-d4aa978960db', 'twenner@aol.com', '3', '2022-08-27 15:55:43', '2022-08-27 15:55:43'),
(59, '86299dae-8058-4b8a-9f06-4cd8eea7715a', 'amber_monarrez@monarrez.org', '3', '2022-08-27 15:55:43', '2022-08-27 15:55:43'),
(60, 'b22d62ea-b8fe-4852-bd83-b229befda7eb', 'shenika@gmail.com', '3', '2022-08-27 15:55:43', '2022-08-27 15:55:43'),
(61, '30655548-aac7-4dca-9f7d-35715185315b', 'delmy.ahle@hotmail.com', '3', '2022-08-27 15:55:43', '2022-08-27 15:55:43'),
(62, '0899ffa0-6f9e-4be5-a123-2bc3e2a3d2d9', 'deeanna_juhas@gmail.com', '3', '2022-08-27 15:55:43', '2022-08-27 15:55:43'),
(63, '95066cd5-f3ce-43f7-867a-a890eb6e2989', 'bpugh@aol.com', '3', '2022-08-27 15:55:43', '2022-08-27 15:55:43'),
(64, 'dd201b2e-f9be-4521-8796-3d8051013d52', 'jamal@vanausdal.org', '3', '2022-08-27 15:55:43', '2022-08-27 15:55:43'),
(65, '1637a1a4-fb00-4269-ae4b-ebd16a859428', 'cecily@hollack.org', '3', '2022-08-27 15:55:43', '2022-08-27 15:55:43'),
(66, '5ef4b89e-a144-41ce-aa1f-5c114af35b67', 'carmelina_lindall@lindall.com', '3', '2022-08-27 15:55:44', '2022-08-27 15:55:44'),
(67, '4ba57391-addf-42ea-b1a1-61ec8f6092ac', 'maurine_yglesias@yglesias.com', '3', '2022-08-27 15:55:44', '2022-08-27 15:55:44'),
(68, '16f75534-ff87-4091-afd0-8375549ad81a', 'tawna@gmail.com', '3', '2022-08-27 15:55:44', '2022-08-27 15:55:44'),
(69, '80efe4aa-8d88-4095-af63-020b452aaf62', 'penney_weight@aol.com', '3', '2022-08-27 15:55:44', '2022-08-27 15:55:44'),
(70, '9fbcf16d-8d7c-4dda-880f-ed982223e54f', 'elly_morocco@gmail.com', '3', '2022-08-27 15:55:44', '2022-08-27 15:55:44'),
(71, 'a5095c7d-e64f-4a85-8780-b953b404a891', 'ilene.eroman@hotmail.com', '3', '2022-08-27 15:55:44', '2022-08-27 15:55:44'),
(72, '9c50fd1e-f12c-4ba6-8880-5e7d84a24312', 'vmondella@mondella.com', '3', '2022-08-27 15:55:44', '2022-08-27 15:55:44'),
(73, 'f0608a18-e545-4136-b7e6-8d43644f19b5', 'kallie.blackwood@gmail.com', '3', '2022-08-27 15:55:44', '2022-08-27 15:55:44'),
(74, '6c2d42b6-4c0c-40d8-879e-0ee234855108', 'johnetta_abdallah@aol.com', '3', '2022-08-27 15:55:44', '2022-08-27 15:55:44'),
(75, '0bc85b44-4160-4a7a-bbde-3e7a7fd84995', 'brhym@rhym.com', '3', '2022-08-27 15:55:44', '2022-08-27 15:55:44'),
(76, '734b0410-c3bb-4b29-a5eb-a0c8b9e6fbb7', 'micaela_rhymes@gmail.com', '3', '2022-08-27 15:55:44', '2022-08-27 15:55:44'),
(77, '9ae7815f-0579-463f-8e82-d9dc5d3c9cc8', 'tamar@hotmail.com', '3', '2022-08-27 15:55:45', '2022-08-27 15:55:45'),
(78, 'b988b0c7-271e-4844-b0d9-adb9edc87efe', 'moon@yahoo.com', '3', '2022-08-27 15:55:45', '2022-08-27 15:55:45'),
(79, 'f43049f7-1b56-41c1-bcd3-a541ab8e6f38', 'laurel_reitler@reitler.com', '3', '2022-08-27 15:55:45', '2022-08-27 15:55:45'),
(80, 'e466ccba-aa6d-4a05-a595-af2f9f339ab2', 'delisa.crupi@crupi.com', '3', '2022-08-27 15:55:45', '2022-08-27 15:55:45'),
(81, '31eb19d0-1645-4cd6-9c0f-72fc63c0664e', 'viva.toelkes@gmail.com', '3', '2022-08-27 15:55:45', '2022-08-27 15:55:45'),
(82, 'c0b05c6e-3633-4c9b-abb9-d52b0cd89fa4', 'elza@yahoo.com', '3', '2022-08-27 15:55:45', '2022-08-27 15:55:45'),
(83, 'c03380a7-6065-4713-bf43-e13ddffba390', 'devorah@hotmail.com', '3', '2022-08-27 15:55:45', '2022-08-27 15:55:45'),
(84, 'aa8a2b08-74fd-424b-82cf-0cab5a318908', 'timothy_mulqueen@mulqueen.org', '3', '2022-08-27 15:55:45', '2022-08-27 15:55:45'),
(85, '3ae94894-f0b6-44e5-96a7-087f7bd31061', 'ahoneywell@honeywell.com', '3', '2022-08-27 15:55:45', '2022-08-27 15:55:45'),
(86, '61e83fb9-9ab1-4969-b62d-270d3d26af48', 'dominque.dickerson@dickerson.org', '3', '2022-08-27 15:55:45', '2022-08-27 15:55:45'),
(87, '054e182d-f3d2-464f-9dd3-02da98a775cf', 'lettie_isenhower@yahoo.com', '3', '2022-08-27 15:55:45', '2022-08-27 15:55:45'),
(88, '74d922b6-2d87-4deb-931c-30a20d20742b', 'mmunns@cox.net', '3', '2022-08-27 15:55:45', '2022-08-27 15:55:45'),
(89, '08475d62-7951-46bd-a917-06aa79fbb3a3', 'stephaine@barfield.com', '3', '2022-08-27 15:55:46', '2022-08-27 15:55:46'),
(90, '67d6e0bf-ebac-48ff-a94e-c3418d6ad99e', 'lai.gato@gato.org', '3', '2022-08-27 15:55:46', '2022-08-27 15:55:46'),
(91, '70f911bb-00ae-4257-a035-7c7aa1480c40', 'stephen_emigh@hotmail.com', '3', '2022-08-27 15:55:46', '2022-08-27 15:55:46'),
(92, 'a15e2500-1356-4d27-ae5e-c0f92e079a83', 'tshields@gmail.com', '3', '2022-08-27 15:55:46', '2022-08-27 15:55:46'),
(93, '9eec7109-0f8e-4dcc-b435-d038664d1981', 'twardrip@cox.net', '3', '2022-08-27 15:55:46', '2022-08-27 15:55:46'),
(94, '66ac59b5-6349-4d76-8e9c-818e97c02419', 'cory.gibes@gmail.com', '3', '2022-08-27 15:55:46', '2022-08-27 15:55:46'),
(95, '75d59b1f-0dbe-4bc2-9c57-9be657eb779e', 'danica_bruschke@gmail.com', '3', '2022-08-27 15:55:46', '2022-08-27 15:55:46'),
(96, '3b4c56a3-bc26-4982-96fa-5d3d873bbbd2', 'wilda@cox.net', '3', '2022-08-27 15:55:46', '2022-08-27 15:55:46'),
(97, 'a0a2bfc0-b5d8-4dac-9768-078196de88de', 'elvera.benimadho@cox.net', '3', '2022-08-27 15:55:46', '2022-08-27 15:55:46'),
(98, 'a26fb18c-7e1d-4088-b767-4e447dcaa2c0', 'carma@cox.net', '3', '2022-08-27 15:55:46', '2022-08-27 15:55:46'),
(99, '43cfe59a-35c2-4b72-b906-a804029509cf', 'malinda.hochard@yahoo.com', '3', '2022-08-27 15:55:46', '2022-08-27 15:55:46'),
(100, '5469e03c-624b-4f5f-8f94-13755773a70a', 'natalie.fern@hotmail.com', '3', '2022-08-27 15:55:46', '2022-08-27 15:55:46'),
(101, '521ac355-7a4b-4ea1-9df3-1de0f6cc3dde', 'lisha@centini.org', '3', '2022-08-27 15:55:46', '2022-08-27 15:55:46'),
(102, '416e4290-b3c8-4995-b071-f402121777c8', 'braimahjake@gmail.com', '4', '2022-08-27 15:57:40', '2022-08-27 15:57:40'),
(104, '6b348707-11bd-406f-9592-8776c5f8a8d0', 'braimahjake@gmail.com', '5', '2022-09-16 14:59:45', '2022-09-16 14:59:45'),
(105, '4b4097e0-8c0b-4fd9-8da6-69aca346ceaf', 'codiakes@gmail.com', '5', '2022-09-16 14:59:45', '2022-09-16 14:59:45');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(8, '2014_10_12_100000_create_password_resets_table', 1),
(9, '2019_08_19_000000_create_failed_jobs_table', 1),
(10, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(13, '2022_07_24_092507_create_permission_tables', 2),
(15, '2022_08_13_182936_create_mailing_lists_table', 4),
(16, '2022_08_13_203402_create_mailing_list_contacts_table', 5),
(17, '2022_07_14_171208_create_projects_table', 6),
(21, '2022_08_14_112113_create_project_surveys_table', 7),
(23, '2014_10_12_000000_create_users_table', 8),
(24, '2022_08_14_120018_create_project_users_table', 9),
(28, '2022_08_24_000250_create_activities_table', 11),
(30, '2022_09_10_125112_create_survey_users_table', 13),
(34, '2022_07_14_171224_create_surveys_table', 16),
(35, '2022_07_30_153451_create_survey_responses_table', 17);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1),
(1, 'App\\Models\\User', 5),
(1, 'App\\Models\\User', 8),
(2, 'App\\Models\\User', 2),
(2, 'App\\Models\\User', 3),
(2, 'App\\Models\\User', 4),
(2, 'App\\Models\\User', 5),
(2, 'App\\Models\\User', 7),
(2, 'App\\Models\\User', 8);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'auth_token', '37f1f5a45e5472088b651e9cf8864f081f6b6701bee0ff48ccb9f1f533003b10', '[\"*\"]', NULL, '2022-07-24 11:05:41', '2022-07-24 11:05:41'),
(2, 'App\\Models\\User', 1, 'auth_token', 'f3bda1fe0b7ce4c0e1e393be3e0174d52c405b3a9a18aa336f2e9a9822f63887', '[\"*\"]', NULL, '2022-07-24 11:23:04', '2022-07-24 11:23:04'),
(3, 'App\\Models\\User', 1, 'auth_token', 'c444e8012c7c92840e2e08e6161abba3ae245d00340bc9b211d6cd7747e52da8', '[\"*\"]', NULL, '2022-07-24 11:23:42', '2022-07-24 11:23:42'),
(4, 'App\\Models\\User', 1, 'auth_token', '6b8716de917cdda5729cca62c6d3b944ad02e26fa89279d9c3dd01ad3c56f022', '[\"*\"]', NULL, '2022-07-24 11:24:52', '2022-07-24 11:24:52'),
(5, 'App\\Models\\User', 1, 'auth_token', 'cddf0e338f45386f27afbeefa653cc65b9e0c78b7c198c3d01291cab63d0a077', '[\"*\"]', NULL, '2022-07-24 11:26:20', '2022-07-24 11:26:20'),
(6, 'App\\Models\\User', 1, 'auth_token', '5da569629596379c4a6fa476e83b5804624aeb49fe4e0ce3abfa245198222717', '[\"*\"]', NULL, '2022-07-24 11:26:55', '2022-07-24 11:26:55'),
(7, 'App\\Models\\User', 1, 'auth_token', '624e76bbc40baf6b355662ffa023441200c3ddc1bd62b23b1dd3c162280da09e', '[\"*\"]', NULL, '2022-07-24 11:28:39', '2022-07-24 11:28:39'),
(8, 'App\\Models\\User', 1, 'auth_token', '26403882e9b48606494b0b496d97d120d1a462772870ba5c555f323a4b46e372', '[\"*\"]', NULL, '2022-07-24 11:29:05', '2022-07-24 11:29:05'),
(9, 'App\\Models\\User', 1, 'auth_token', '616f5b0d21b7c68a99bd0e5d83900546f7b2302ff6d0fc523f034744909b351b', '[\"*\"]', NULL, '2022-07-24 11:31:54', '2022-07-24 11:31:54'),
(10, 'App\\Models\\User', 1, 'auth_token', 'bb120e1977ea5288d1a93f89c381db53a12caaab6ce6bb738531e44063da1fa0', '[\"*\"]', NULL, '2022-07-24 11:32:36', '2022-07-24 11:32:36'),
(11, 'App\\Models\\User', 1, 'auth_token', 'b5feb23895732c742174385392bfb5c45db830e149a2e738b123dd2c1756e691', '[\"*\"]', NULL, '2022-08-16 09:17:44', '2022-08-16 09:17:44'),
(12, 'App\\Models\\User', 3, 'auth_token', '26d6ccd849c82849d18243918eaa052805e98791ac59002e74fcb889e63ab871', '[\"*\"]', NULL, '2022-08-22 13:13:10', '2022-08-22 13:13:10'),
(13, 'App\\Models\\User', 3, 'auth_token', 'dffbc228c1c9e626c3614d1d523aabebac8c18d14d16c26c7fbbb4a6ca9f97b1', '[\"*\"]', NULL, '2022-08-22 13:13:48', '2022-08-22 13:13:48'),
(14, 'App\\Models\\User', 1, 'auth_token', '537fc8a16ef9e823cf88fccf6513acee682bd7c6b05be888eba93de38b016998', '[\"*\"]', NULL, '2022-09-08 16:39:32', '2022-09-08 16:39:32'),
(15, 'App\\Models\\User', 1, 'auth_token', 'ec16496a706f4b5e04a426d824f28a933100193530f2ff0bdb83e6a86936c352', '[\"*\"]', NULL, '2022-09-08 16:45:21', '2022-09-08 16:45:21'),
(16, 'App\\Models\\User', 1, 'auth_token', 'b57f444270f55cefc0eacf633dc1899e141559555aa34209de003bc262b124dd', '[\"*\"]', NULL, '2022-09-09 09:22:15', '2022-09-09 09:22:15'),
(17, 'App\\Models\\User', 1, 'auth_token', '71753f3932a53580ea9da6e9c441c7c354c18f657acc201b1ed8d078efd2a05b', '[\"*\"]', NULL, '2022-09-09 09:23:01', '2022-09-09 09:23:01'),
(18, 'App\\Models\\User', 1, 'auth_token', 'd663ed57b196a5676c2dfdd33ab3569dfc62ec7b4240ba948ae354e3c39946d3', '[\"*\"]', NULL, '2022-09-09 09:23:12', '2022-09-09 09:23:12'),
(19, 'App\\Models\\User', 1, 'auth_token', '87dd0a16d936873bbf7327fafce314907ac9ff28154a66320934a9be6c035776', '[\"*\"]', NULL, '2022-09-09 09:23:32', '2022-09-09 09:23:32'),
(20, 'App\\Models\\User', 1, 'auth_token', '271aa690d3a7a150318793a95524b3fb4a71b5f3708855d0c426ae5f35a3534e', '[\"*\"]', NULL, '2022-09-09 09:24:38', '2022-09-09 09:24:38'),
(21, 'App\\Models\\User', 1, 'auth_token', '92441edb920bcf55a7d570b8b5cd69b467e7edc315de5921546c67477f648421', '[\"*\"]', NULL, '2022-09-09 09:25:10', '2022-09-09 09:25:10'),
(22, 'App\\Models\\User', 1, 'auth_token', 'ce22564e5c9ff51c91220e58832dfa806db8727764df2c04f3447fcccb681f95', '[\"*\"]', NULL, '2022-09-09 09:29:56', '2022-09-09 09:29:56'),
(23, 'App\\Models\\User', 1, 'auth_token', '5b8486b8013c28b6695ed81936540af0d782e24c23dd7094a256328d55007aaa', '[\"*\"]', NULL, '2022-09-09 09:30:43', '2022-09-09 09:30:43'),
(24, 'App\\Models\\User', 1, 'auth_token', '22d179775c4dfdce9814c30f9b48058ab6718576cf7a85281705c618675dc092', '[\"*\"]', NULL, '2022-09-09 17:51:05', '2022-09-09 17:51:05'),
(25, 'App\\Models\\User', 1, 'auth_token', '3911c3e87e0d9b4f4306337786ff460724b4910d8791ebefabfba157fc29cdac', '[\"*\"]', NULL, '2022-09-09 18:18:53', '2022-09-09 18:18:53'),
(26, 'App\\Models\\User', 1, 'auth_token', '268313eba99bfeca00fab03cc120619e199fcfd04ae0126a930fc68947cac095', '[\"*\"]', NULL, '2022-09-09 19:49:18', '2022-09-09 19:49:18'),
(27, 'App\\Models\\User', 1, 'auth_token', '2017d12adabb34d40837f314f4b8f402398b80a2c63000f1c5083f394a397a80', '[\"*\"]', NULL, '2022-09-10 13:30:14', '2022-09-10 13:30:14'),
(28, 'App\\Models\\User', 3, 'auth_token', 'e27c547b568d61ba2b55ad565af3b952b8146c370b37318950f4016bde64aa06', '[\"*\"]', NULL, '2022-09-10 13:30:59', '2022-09-10 13:30:59'),
(29, 'App\\Models\\User', 1, 'auth_token', 'bb7357a1f47e969b72a1204f392a966e04fce065355df36e99251e6615bbffe1', '[\"*\"]', NULL, '2022-09-12 16:39:10', '2022-09-12 16:39:10'),
(30, 'App\\Models\\User', 1, 'auth_token', 'bebedb93622ea7fd88a97f9bbad47c2e4c1291a71fec260aea7e18d719af8214', '[\"*\"]', NULL, '2022-09-12 16:39:49', '2022-09-12 16:39:49'),
(31, 'App\\Models\\User', 1, 'auth_token', '8a849e2b68fa32dd8ec01e364da7d429231ab777b63532dcfdbdf6e1c13a057a', '[\"*\"]', NULL, '2022-09-12 16:40:05', '2022-09-12 16:40:05'),
(32, 'App\\Models\\User', 1, 'auth_token', 'b8d5fb010e50ae623c0d9b03712a86dbf542009509fadfe310c68ec55ae08317', '[\"*\"]', NULL, '2022-09-12 16:40:37', '2022-09-12 16:40:37'),
(33, 'App\\Models\\User', 1, 'auth_token', '17f2e7c7f4735f427a69acd1d17dc5af1c35ee0a9b28e00ac8216bc9be6e9dae', '[\"*\"]', NULL, '2022-09-12 16:41:12', '2022-09-12 16:41:12'),
(34, 'App\\Models\\User', 1, 'auth_token', '25a9b252e5346feec050fa3146092a166d8c548807f8f83609bdfe0b0d5a7ce8', '[\"*\"]', NULL, '2022-09-12 18:11:57', '2022-09-12 18:11:57'),
(35, 'App\\Models\\User', 2, 'auth_token', '3d8e1d4ac02902dd49ca5261208d25ef536a7dc0706334c36cb99b5fa07d6cc1', '[\"*\"]', NULL, '2022-09-12 18:12:16', '2022-09-12 18:12:16'),
(36, 'App\\Models\\User', 1, 'auth_token', 'd109662bf392e746211005b74adc8f69258bdc43d93d6c5ed10b77e6946e08c7', '[\"*\"]', NULL, '2022-09-12 18:14:44', '2022-09-12 18:14:44'),
(37, 'App\\Models\\User', 1, 'auth_token', '7bb573b84b1b6ea3da9f89e5b58144490401e80c387d98c557585eb3da10c5b0', '[\"*\"]', NULL, '2022-09-16 07:46:56', '2022-09-16 07:46:56'),
(38, 'App\\Models\\User', 1, 'auth_token', '9469d0cf33151556b81a3539e6c8ea2e936b59e7ac4c680f82b8211358f3e883', '[\"*\"]', NULL, '2022-09-16 14:46:07', '2022-09-16 14:46:07'),
(39, 'App\\Models\\User', 1, 'auth_token', '5a60b166a17628bf95ce411705fe70ee4214e3198a5d6b4af04c7ca2e8207b87', '[\"*\"]', NULL, '2022-09-21 20:24:07', '2022-09-21 20:24:07'),
(40, 'App\\Models\\User', 2, 'auth_token', 'f142a7a1575fc75e5fe68e174b73cbfbdbc215b6add45f19aad3bc403d35128b', '[\"*\"]', NULL, '2022-09-21 20:29:05', '2022-09-21 20:29:05'),
(41, 'App\\Models\\User', 1, 'auth_token', 'd068cca4b7725ec6658797acc21e82d02da0cd36455f362787b71a85889e8bca', '[\"*\"]', NULL, '2022-09-21 20:29:46', '2022-09-21 20:29:46'),
(42, 'App\\Models\\User', 2, 'auth_token', 'e62d9ee1ca8f9f581a9c6adb3d7e98c668804f5539f4bd52eabb80e3e0adc63c', '[\"*\"]', NULL, '2022-09-21 20:30:55', '2022-09-21 20:30:55'),
(43, 'App\\Models\\User', 2, 'auth_token', '4ffbe2543f5791f076fdba7f6c156212361239689801c18e404ba785fbe6ffb1', '[\"*\"]', NULL, '2022-09-21 20:31:09', '2022-09-21 20:31:09'),
(44, 'App\\Models\\User', 2, 'auth_token', 'd96c47f00b5f64cdd0a69e72bc9eea0d535d8148377ec818ec402e5b187ed22c', '[\"*\"]', NULL, '2022-09-21 20:31:18', '2022-09-21 20:31:18'),
(45, 'App\\Models\\User', 2, 'auth_token', '5d08080e31cab55ccfe3acadc5b07a358fbb07c72e29124335b18a76278ceb17', '[\"*\"]', NULL, '2022-09-21 20:32:34', '2022-09-21 20:32:34'),
(46, 'App\\Models\\User', 1, 'auth_token', '056b6c12ffb021f33a9edd527188094ce9a095d574882884872d296731afdd9c', '[\"*\"]', NULL, '2022-09-21 20:32:58', '2022-09-21 20:32:58'),
(47, 'App\\Models\\User', 1, 'auth_token', 'e7a2a24697254e06a4bcfa65f47b56b0a4fde9e5d667eaf0f063a3a0de27a53c', '[\"*\"]', NULL, '2022-09-23 08:42:16', '2022-09-23 08:42:16'),
(48, 'App\\Models\\User', 1, 'auth_token', 'd4676f4b21591b58722c88e5d47409f5e61d8b22e3c5c255e9f9e32702391382', '[\"*\"]', '2022-09-24 06:38:51', '2022-09-23 22:43:02', '2022-09-24 06:38:51'),
(49, 'App\\Models\\User', 1, 'auth_token', '194ba49daeba360067743170a94f1b3ff044c4b0684e5e02b965150d73f17e40', '[\"*\"]', '2022-09-24 07:06:03', '2022-09-24 06:45:37', '2022-09-24 07:06:03'),
(50, 'App\\Models\\User', 2, 'auth_token', '826edd61bff1b19f391d136915ee32896133183cba20b62372cd349a7c1f0805', '[\"*\"]', '2022-09-24 07:12:29', '2022-09-24 06:48:34', '2022-09-24 07:12:29'),
(51, 'App\\Models\\User', 1, 'auth_token', '1ea47410c0e23b502f7b15b767acb348ead68ec683db5b85a42a40c7ee80f65f', '[\"*\"]', '2022-09-24 07:13:01', '2022-09-24 07:13:01', '2022-09-24 07:13:01'),
(52, 'App\\Models\\User', 2, 'auth_token', '22f7f6fe8afc6be6c5c7587f003c3df21ca51bb84e9542b725f9533fa1503e0c', '[\"*\"]', '2022-09-24 07:14:23', '2022-09-24 07:13:36', '2022-09-24 07:14:23'),
(53, 'App\\Models\\User', 1, 'auth_token', '261002a5461205de870a6195a968caf933c072d227dc371d0e8579af96e2b988', '[\"*\"]', '2022-09-24 14:02:30', '2022-09-24 07:15:02', '2022-09-24 14:02:30'),
(54, 'App\\Models\\User', 2, 'auth_token', '6b9ff5d8d4429c2e125a972bd7b254e9012c403cc8292fef32626ebfcbfd3331', '[\"*\"]', '2022-09-24 10:41:56', '2022-09-24 07:15:25', '2022-09-24 10:41:56'),
(55, 'App\\Models\\User', 3, 'auth_token', '038cc893d4609b4167dd56c8fc4ad25371c0076145b497303042a5d3d5cf7605', '[\"*\"]', '2022-09-24 13:54:48', '2022-09-24 10:42:50', '2022-09-24 13:54:48'),
(56, 'App\\Models\\User', 3, 'auth_token', '3b45c6996aca5bbfe4aeec254b10ac7c21d07f1da1f526efa2f04e6aa3bc095d', '[\"*\"]', '2022-09-24 14:15:07', '2022-09-24 14:13:11', '2022-09-24 14:15:07'),
(57, 'App\\Models\\User', 1, 'auth_token', '4b6fba9fd9fce508f17142a81c0f4870a3c4ae9908ca701f9744753187dc9e90', '[\"*\"]', '2022-09-24 16:03:53', '2022-09-24 14:14:03', '2022-09-24 16:03:53'),
(58, 'App\\Models\\User', 2, 'auth_token', '30433fe8ae78fda21da24c04c8ed71db020d31d2d6dca2e1dfc96fa981c8300c', '[\"*\"]', '2022-09-24 16:07:50', '2022-09-24 16:07:49', '2022-09-24 16:07:50'),
(59, 'App\\Models\\User', 2, 'auth_token', '364442a9c5a502525aa54445995ed222e05547fdc0fc585c2897d98eee182c2d', '[\"*\"]', '2022-09-24 16:10:20', '2022-09-24 16:09:57', '2022-09-24 16:10:20'),
(60, 'App\\Models\\User', 1, 'auth_token', 'af5656893a1d331fc6c52e4965a1e78c4c12e90e33158b12a0bf67776380f038', '[\"*\"]', '2022-09-25 21:25:46', '2022-09-24 16:11:15', '2022-09-25 21:25:46'),
(61, 'App\\Models\\User', 2, 'auth_token', '78406586d7c1cffd25832562a379db8d89cdf8fcd15f610d0d7e58c559d440e1', '[\"*\"]', '2022-09-25 17:13:58', '2022-09-25 17:13:23', '2022-09-25 17:13:58');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `uuid`, `name`, `created_at`, `updated_at`) VALUES
(1, '155003b6-812c-4eba-bd4c-0d93ab9cee5c', 'Sparrow', '2022-08-14 10:45:30', '2022-08-14 10:45:30'),
(2, '8bb4990f-2268-44fc-8b12-ebcd1b3c3967', 'Sharow', '2022-08-14 16:14:48', '2022-08-14 16:14:48'),
(3, '2829a18d-cda1-4cc8-b3fa-d45446addba5', 'Mesa', '2022-08-14 16:16:42', '2022-08-14 16:16:42'),
(4, '5a9c2e6c-30a3-44d9-868a-1d2009ad2e4c', 'My Project', '2022-08-16 09:09:47', '2022-08-16 09:09:47'),
(5, '2882b9b1-d335-473b-9e3c-1a654ba6a128', 'Project Breeze', '2022-08-21 00:57:32', '2022-08-21 00:57:32'),
(6, '16ed8147-212f-4db4-bb03-0e80e5b39162', 'Command Program', '2022-08-21 00:57:58', '2022-08-21 00:57:58'),
(7, '59c6fa3d-e684-4070-afb1-043411b1c58c', 'Project Point', '2022-08-21 00:58:15', '2022-08-21 00:58:15'),
(8, '11eb19d6-b26a-45ec-8fce-1c0f3492f181', 'Project Mecha', '2022-08-21 00:58:31', '2022-08-21 00:58:31'),
(9, '996606ea-94c3-467f-b0b4-d54c7dbb696a', 'Program Pad', '2022-08-21 00:58:47', '2022-08-21 00:58:47'),
(10, '045235f5-ea20-4ceb-becb-ba633b6595aa', 'Project Synergy', '2022-08-21 00:59:07', '2022-08-21 00:59:07'),
(11, 'ad620822-1a77-49d9-8731-ac9bf6ea9ab3', 'Dynamic Program', '2022-08-21 00:59:25', '2022-08-21 00:59:25'),
(12, '073c45f7-44b8-4b4e-a11d-7cc700b1cf1f', 'Project Zen', '2022-08-21 01:01:21', '2022-08-21 01:01:21'),
(14, '2d555348-7c5b-4213-b911-ba6955efdaf4', 'My Test Project', '2022-08-24 11:20:48', '2022-08-24 11:20:48'),
(15, '9a93c738-7ed2-443a-a89c-9e2054762413', 'My First Project', '2022-08-24 11:33:24', '2022-08-24 11:33:24'),
(17, '1a2d88b9-7b8c-4b4f-b24d-cc6c9605e047', 'My Tech Project', '2022-09-16 14:47:15', '2022-09-16 14:47:15'),
(18, '8f4e2cec-cb01-4ac9-be37-52f99bfeab9f', 'My Best Project', '2022-09-25 16:52:06', '2022-09-25 16:52:06'),
(19, '9ed91088-f3b3-41d6-8670-57c769e31c96', 'My Pet Project', '2022-09-25 16:53:36', '2022-09-25 16:53:36');

-- --------------------------------------------------------

--
-- Table structure for table `project_surveys`
--

CREATE TABLE `project_surveys` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `survey_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_users`
--

CREATE TABLE `project_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `project_users`
--

INSERT INTO `project_users` (`id`, `project_id`, `user_id`, `created_at`, `updated_at`) VALUES
(2, 1, 1, NULL, NULL),
(3, 1, 2, NULL, NULL),
(4, 2, 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'web', '2022-07-24 08:29:51', '2022-07-24 08:29:51'),
(2, 'collector', 'web', '2022-07-24 08:29:51', '2022-07-24 08:29:51');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `surveys`
--

CREATE TABLE `surveys` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`data`)),
  `project_id` int(11) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `pinned` tinyint(1) NOT NULL DEFAULT 0,
  `location` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `surveys`
--

INSERT INTO `surveys` (`id`, `uuid`, `name`, `data`, `project_id`, `start_date`, `end_date`, `pinned`, `location`, `created_at`, `updated_at`) VALUES
(1, 'd3aaeb38-9106-42da-9d47-fea56194e0e0', 'Dummy Survey', NULL, NULL, NULL, NULL, 0, 0, '2022-09-16 09:07:38', '2022-09-16 09:07:38'),
(2, '696e8602-03bd-4016-a4c5-3014af99417c', 'Tech Survey', '[{\"unique_key\":\"53503785-29c0-43de-94a0-14ba63b3136c\",\"type\":\"instruction\",\"name\":\"paragraph\",\"title\":\"Paragraph\",\"label\":\"<p>A health survey is&nbsp;<strong>a tool used to gather information on the behavior of a specific group of people from a determined area</strong>. This kind of survey allows health care experts to understand better how a community acts towards health.</p>\"},{\"unique_key\":\"635e344a-e152-4d22-aff4-008ec7f92dad\",\"type\":\"decorative\",\"name\":\"divider\",\"title\":\"Line Break\"},{\"unique_key\":\"21fcddd2-ca29-4c58-9f99-bc46f9408fbd\",\"type\":\"data\",\"name\":\"dropdown\",\"title\":\"Dropdown\",\"label\":\"<p>How often do you get a health checkup?</p>\",\"required\":false,\"options\":[{\"unique_key\":\"e5d74ff1-d698-46aa-bae2-f89d4d55e208\",\"option\":\"Once in 3 months\",\"value\":\"Once in 3 months\"},{\"unique_key\":\"7988959b-7c98-4953-80d7-4c4b58ce99fc\",\"option\":\"Once in 6 months\",\"value\":\"Once in 6 months\"},{\"unique_key\":\"38fd411d-7eb7-4695-ac00-0750504be9ee\",\"option\":\"Once a year\",\"value\":\"Once a year\"},{\"unique_key\":\"323ee01e-f7bf-446f-8a07-48c488d65dcb\",\"option\":\"Only when needed\",\"value\":\"Only when needed\"},{\"unique_key\":\"2b539abb-c814-4592-8a1c-da30b8863312\",\"option\":\"Never get it done\",\"value\":\"Never get it done\"}]},{\"unique_key\":\"c918d639-c1d0-4307-8ef2-f9494134f879\",\"type\":\"data\",\"name\":\"checkbox\",\"title\":\"Checkbox\",\"label\":\"<p>&nbsp;What do you say about your overall health?</p>\",\"required\":false,\"options\":[{\"unique_key\":\"47c111c4-0b2c-4cc9-bea2-cac20a42d80a\",\"option\":\"Having Good Physical Health\",\"value\":\"Having Good Physical Health\"},{\"unique_key\":\"dc39bcaa-9273-452d-b11b-17c48108b54b\",\"option\":\"Moderately physically impaired\",\"value\":\"Moderately physically impaired\"},{\"unique_key\":\"0941e203-9ffc-488a-a1aa-9b244e7dca33\",\"option\":\"Severely physically impaired\",\"value\":\"Severely physically impaired\"},{\"unique_key\":\"f38894c0-f5c3-4624-9f18-44d8fd99948b\",\"option\":\"Totally physically impaired\",\"value\":\"Totally physically impaired\"},{\"unique_key\":\"65b33adc-736a-4280-8a6e-a5a59fb2938d\",\"option\":\"Health Assessment Survey Questions\",\"value\":\"Health Assessment Survey Questions\"}]}]', 15, '2022-09-17 17:11:54', '2022-09-26 17:11:54', 0, 1, '2022-09-16 09:13:08', '2022-09-24 16:11:54'),
(3, 'c94f2cc7-1880-4c0d-8a73-57ede2d7d2a3', 'Tech Survey Clone', '[{\"unique_key\":\"a43ffeb9-81b8-4470-b900-7e4505fa7dae\",\"type\":\"instruction\",\"name\":\"paragraph\",\"title\":\"Paragraph\",\"label\":\"<p>A health survey is&nbsp;<strong>a tool used to gather information on the behavior of a specific group of people from a determined area</strong>. This kind of survey allows health care experts to understand better how a community acts towards health.</p>\"},{\"unique_key\":\"38b94cd3-9602-4ff6-8b8c-e1a5581cdadf\",\"type\":\"decorative\",\"name\":\"divider\",\"title\":\"Line Break\"},{\"unique_key\":\"2764a831-9747-478f-b946-28b952257aec\",\"type\":\"data\",\"name\":\"checkbox\",\"title\":\"Checkbox\",\"label\":\"<p>What do you say about your overall health?</p>\",\"required\":true,\"options\":[{\"unique_key\":\"7615104c-962e-4ce9-a46f-531eec3aaeb0\",\"option\":\"Having Good Physical Health\",\"value\":\"Having Good Physical Health\"},{\"unique_key\":\"d7a3fa2b-b068-46dd-8c98-837883374acb\",\"option\":\"Moderately physically impaired\",\"value\":\"Moderately physically impaired\"},{\"unique_key\":\"0bcc94f6-cf64-42aa-88d9-4855d7dbe2dc\",\"option\":\"Severely physically impaired\",\"value\":\"Severely physically impaired\"},{\"unique_key\":\"c241736d-20c4-4fc1-9535-6178a4f4ec44\",\"option\":\"Totally physically impaired\",\"value\":\"Totally physically impaired\"},{\"unique_key\":\"214daca8-92db-4e5a-b973-a1b1fd90ec4f\",\"option\":\"Health Assessment Survey Questions\",\"value\":\"Health Assessment Survey Questions\"}]},{\"unique_key\":\"951d8edd-94b8-4e07-9d7e-9cf3dd954d30\",\"type\":\"data\",\"name\":\"dropdown\",\"title\":\"Dropdown\",\"label\":\"<p>How often do you get a health checkup?</p>\",\"required\":false,\"options\":[{\"unique_key\":\"e986ff1b-b513-418f-bee7-b42a6badd41e\",\"option\":\"Once in 3 months\",\"value\":\"Once in 3 months\"},{\"unique_key\":\"d35269fd-6cbd-4661-a306-09126d6b64be\",\"option\":\"Once in 6 months\",\"value\":\"Once in 6 months\"},{\"unique_key\":\"f5ae93b5-2c83-4a92-b3f0-7cf56a2b2e71\",\"option\":\"Once a year\",\"value\":\"Once a year\"},{\"unique_key\":\"c848c170-7c24-476f-9ade-023906868fc1\",\"option\":\"Only when needed\",\"value\":\"Only when needed\"},{\"unique_key\":\"a76b32d8-d14c-48ce-9c22-391c719b2371\",\"option\":\"Never get it done\",\"value\":\"Never get it done\"},{\"unique_key\":\"bd2d16a5-81b8-45dc-aa7f-462e8167ef71\",\"option\":\"Other\",\"value\":\"Other\"}]},{\"unique_key\":\"d4dbee25-8846-4ceb-8360-e3e69813b9fd\",\"type\":\"data\",\"name\":\"radio\",\"title\":\"Radio\",\"label\":\"<p>Select your last blood pressure reading.</p>\",\"required\":true,\"options\":[{\"unique_key\":\"f9c77c48-625a-4098-a4ea-e189eb8cb98c\",\"option\":\"Low\",\"value\":\"Low\"},{\"unique_key\":\"0e2c584c-ffef-4f9b-8df3-5cfa84b97332\",\"option\":\"Normal\",\"value\":\"Normal\"},{\"unique_key\":\"9b2a65f7-de67-44ad-b25b-9cf4516e8edb\",\"option\":\"High\",\"value\":\"High\"}]}]', 17, '2022-09-16 11:52:12', '2022-09-24 11:52:12', 0, 1, '2022-09-16 14:48:12', '2022-09-25 10:52:12'),
(4, '0d42e134-a568-4c60-bb04-7f8b46b163c6', 'Tech Survey 2', '[{\"unique_key\":\"928aa9fb-160b-48d3-b5a8-01a2815b6be2\",\"type\":\"data\",\"name\":\"dropdown\",\"title\":\"Dropdown\",\"label\":\"<p>Nationality?</p>\",\"required\":true,\"options\":[{\"unique_key\":\"23ee6b80-2e48-46fc-ab5f-8320c56c5e32\",\"option\":\"Nierian\",\"value\":\"Nigerian\"},{\"unique_key\":\"e5c4b363-89bf-4cbe-bc87-52773d165ca6\",\"option\":\"American\",\"value\":\"American\"},{\"unique_key\":\"7343d097-c25d-4eb2-b6f6-d2ad0a94f18f\",\"option\":\"British\",\"value\":\"British\"}]}]', 15, '2022-09-25 22:24:38', '2022-09-27 22:24:38', 0, 1, '2022-09-25 17:05:30', '2022-09-25 21:24:38');

-- --------------------------------------------------------

--
-- Table structure for table `survey_responses`
--

CREATE TABLE `survey_responses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `collector_id` int(11) DEFAULT NULL,
  `survey_id` int(11) NOT NULL,
  `longitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `latitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`data`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `survey_responses`
--

INSERT INTO `survey_responses` (`id`, `uuid`, `collector_id`, `survey_id`, `longitude`, `latitude`, `data`, `created_at`, `updated_at`) VALUES
(1, '37b138d6-e4a8-4187-ae18-fc6821ea434d', 1, 3, '3.416', '6.431', '[{\"unique_key\":\"a43ffeb9-81b8-4470-b900-7e4505fa7dae\",\"type\":\"instruction\",\"name\":\"paragraph\",\"title\":\"Paragraph\",\"label\":\"<p>A health survey is&nbsp;<strong>a tool used to gather information on the behavior of a specific group of people from a determined area</strong>. This kind of survey allows health care experts to understand better how a community acts towards health.</p>\"},{\"unique_key\":\"38b94cd3-9602-4ff6-8b8c-e1a5581cdadf\",\"type\":\"decorative\",\"name\":\"divider\",\"title\":\"Line Break\"},{\"unique_key\":\"2764a831-9747-478f-b946-28b952257aec\",\"type\":\"data\",\"name\":\"checkbox\",\"title\":\"Checkbox\",\"label\":\"<p>What do you say about your overall health?</p>\",\"required\":true,\"options\":[{\"unique_key\":\"7615104c-962e-4ce9-a46f-531eec3aaeb0\",\"option\":\"Having Good Physical Health\",\"value\":\"Having Good Physical Health\"},{\"unique_key\":\"d7a3fa2b-b068-46dd-8c98-837883374acb\",\"option\":\"Moderately physically impaired\",\"value\":\"Moderately physically impaired\"},{\"unique_key\":\"0bcc94f6-cf64-42aa-88d9-4855d7dbe2dc\",\"option\":\"Severely physically impaired\",\"value\":\"Severely physically impaired\"},{\"unique_key\":\"c241736d-20c4-4fc1-9535-6178a4f4ec44\",\"option\":\"Totally physically impaired\",\"value\":\"Totally physically impaired\"},{\"unique_key\":\"214daca8-92db-4e5a-b973-a1b1fd90ec4f\",\"option\":\"Health Assessment Survey Questions\",\"value\":\"Health Assessment Survey Questions\"}],\"data\":[\"Having Good Physical Health\",\"Severely physically impaired\",\"Totally physically impaired\"]},{\"unique_key\":\"951d8edd-94b8-4e07-9d7e-9cf3dd954d30\",\"type\":\"data\",\"name\":\"dropdown\",\"title\":\"Dropdown\",\"label\":\"<p>How often do you get a health checkup?</p>\",\"required\":false,\"options\":[{\"unique_key\":\"e986ff1b-b513-418f-bee7-b42a6badd41e\",\"option\":\"Once in 3 months\",\"value\":\"Once in 3 months\"},{\"unique_key\":\"d35269fd-6cbd-4661-a306-09126d6b64be\",\"option\":\"Once in 6 months\",\"value\":\"Once in 6 months\"},{\"unique_key\":\"f5ae93b5-2c83-4a92-b3f0-7cf56a2b2e71\",\"option\":\"Once a year\",\"value\":\"Once a year\"},{\"unique_key\":\"c848c170-7c24-476f-9ade-023906868fc1\",\"option\":\"Only when needed\",\"value\":\"Only when needed\"},{\"unique_key\":\"a76b32d8-d14c-48ce-9c22-391c719b2371\",\"option\":\"Never get it done\",\"value\":\"Never get it done\"},{\"unique_key\":\"bd2d16a5-81b8-45dc-aa7f-462e8167ef71\",\"option\":\"Other\",\"value\":\"Other\"}],\"data\":\"Once in 6 months\"},{\"unique_key\":\"d4dbee25-8846-4ceb-8360-e3e69813b9fd\",\"type\":\"data\",\"name\":\"radio\",\"title\":\"Radio\",\"label\":\"<p>What was your las blood pressure reading?</p>\",\"required\":true,\"options\":[{\"unique_key\":\"f9c77c48-625a-4098-a4ea-e189eb8cb98c\",\"option\":\"Low\",\"value\":\"Low\"},{\"unique_key\":\"0e2c584c-ffef-4f9b-8df3-5cfa84b97332\",\"option\":\"Normal\",\"value\":\"Normal\"},{\"unique_key\":\"9b2a65f7-de67-44ad-b25b-9cf4516e8edb\",\"option\":\"High\",\"value\":\"High\"}],\"data\":\"High\"}]', '2022-09-24 19:24:45', '2022-09-24 19:24:45'),
(2, '714e2bf5-c20b-4aec-b40d-53d6d25077d7', 1, 3, '3.416', '6.431', '[{\"unique_key\":\"a43ffeb9-81b8-4470-b900-7e4505fa7dae\",\"type\":\"instruction\",\"name\":\"paragraph\",\"title\":\"Paragraph\",\"label\":\"<p>A health survey is&nbsp;<strong>a tool used to gather information on the behavior of a specific group of people from a determined area</strong>. This kind of survey allows health care experts to understand better how a community acts towards health.</p>\"},{\"unique_key\":\"38b94cd3-9602-4ff6-8b8c-e1a5581cdadf\",\"type\":\"decorative\",\"name\":\"divider\",\"title\":\"Line Break\"},{\"unique_key\":\"2764a831-9747-478f-b946-28b952257aec\",\"type\":\"data\",\"name\":\"checkbox\",\"title\":\"Checkbox\",\"label\":\"<p>What do you say about your overall health?</p>\",\"required\":true,\"options\":[{\"unique_key\":\"7615104c-962e-4ce9-a46f-531eec3aaeb0\",\"option\":\"Having Good Physical Health\",\"value\":\"Having Good Physical Health\"},{\"unique_key\":\"d7a3fa2b-b068-46dd-8c98-837883374acb\",\"option\":\"Moderately physically impaired\",\"value\":\"Moderately physically impaired\"},{\"unique_key\":\"0bcc94f6-cf64-42aa-88d9-4855d7dbe2dc\",\"option\":\"Severely physically impaired\",\"value\":\"Severely physically impaired\"},{\"unique_key\":\"c241736d-20c4-4fc1-9535-6178a4f4ec44\",\"option\":\"Totally physically impaired\",\"value\":\"Totally physically impaired\"},{\"unique_key\":\"214daca8-92db-4e5a-b973-a1b1fd90ec4f\",\"option\":\"Health Assessment Survey Questions\",\"value\":\"Health Assessment Survey Questions\"}],\"data\":[\"Having Good Physical Health\",\"Severely physically impaired\",\"Health Assessment Survey Questions\"]},{\"unique_key\":\"951d8edd-94b8-4e07-9d7e-9cf3dd954d30\",\"type\":\"data\",\"name\":\"dropdown\",\"title\":\"Dropdown\",\"label\":\"<p>How often do you get a health checkup?</p>\",\"required\":false,\"options\":[{\"unique_key\":\"e986ff1b-b513-418f-bee7-b42a6badd41e\",\"option\":\"Once in 3 months\",\"value\":\"Once in 3 months\"},{\"unique_key\":\"d35269fd-6cbd-4661-a306-09126d6b64be\",\"option\":\"Once in 6 months\",\"value\":\"Once in 6 months\"},{\"unique_key\":\"f5ae93b5-2c83-4a92-b3f0-7cf56a2b2e71\",\"option\":\"Once a year\",\"value\":\"Once a year\"},{\"unique_key\":\"c848c170-7c24-476f-9ade-023906868fc1\",\"option\":\"Only when needed\",\"value\":\"Only when needed\"},{\"unique_key\":\"a76b32d8-d14c-48ce-9c22-391c719b2371\",\"option\":\"Never get it done\",\"value\":\"Never get it done\"},{\"unique_key\":\"bd2d16a5-81b8-45dc-aa7f-462e8167ef71\",\"option\":\"Other\",\"value\":\"Other\"}],\"data\":\"Once a year\"},{\"unique_key\":\"d4dbee25-8846-4ceb-8360-e3e69813b9fd\",\"type\":\"data\",\"name\":\"radio\",\"title\":\"Radio\",\"label\":\"<p>What was your las blood pressure reading?</p>\",\"required\":true,\"options\":[{\"unique_key\":\"f9c77c48-625a-4098-a4ea-e189eb8cb98c\",\"option\":\"Low\",\"value\":\"Low\"},{\"unique_key\":\"0e2c584c-ffef-4f9b-8df3-5cfa84b97332\",\"option\":\"Normal\",\"value\":\"Normal\"},{\"unique_key\":\"9b2a65f7-de67-44ad-b25b-9cf4516e8edb\",\"option\":\"High\",\"value\":\"High\"}],\"data\":\"Low\"}]', '2022-09-24 19:29:06', '2022-09-24 19:29:06'),
(3, 'ad380e33-c3b1-46e3-be6f-1ed613525826', 1, 3, '3.416', '6.431', '[{\"unique_key\":\"a43ffeb9-81b8-4470-b900-7e4505fa7dae\",\"type\":\"instruction\",\"name\":\"paragraph\",\"title\":\"Paragraph\",\"label\":\"<p>A health survey is&nbsp;<strong>a tool used to gather information on the behavior of a specific group of people from a determined area</strong>. This kind of survey allows health care experts to understand better how a community acts towards health.</p>\"},{\"unique_key\":\"38b94cd3-9602-4ff6-8b8c-e1a5581cdadf\",\"type\":\"decorative\",\"name\":\"divider\",\"title\":\"Line Break\"},{\"unique_key\":\"2764a831-9747-478f-b946-28b952257aec\",\"type\":\"data\",\"name\":\"checkbox\",\"title\":\"Checkbox\",\"label\":\"<p>What do you say about your overall health?</p>\",\"required\":true,\"options\":[{\"unique_key\":\"7615104c-962e-4ce9-a46f-531eec3aaeb0\",\"option\":\"Having Good Physical Health\",\"value\":\"Having Good Physical Health\"},{\"unique_key\":\"d7a3fa2b-b068-46dd-8c98-837883374acb\",\"option\":\"Moderately physically impaired\",\"value\":\"Moderately physically impaired\"},{\"unique_key\":\"0bcc94f6-cf64-42aa-88d9-4855d7dbe2dc\",\"option\":\"Severely physically impaired\",\"value\":\"Severely physically impaired\"},{\"unique_key\":\"c241736d-20c4-4fc1-9535-6178a4f4ec44\",\"option\":\"Totally physically impaired\",\"value\":\"Totally physically impaired\"},{\"unique_key\":\"214daca8-92db-4e5a-b973-a1b1fd90ec4f\",\"option\":\"Health Assessment Survey Questions\",\"value\":\"Health Assessment Survey Questions\"}],\"data\":[\"Having Good Physical Health\",\"Severely physically impaired\",\"Totally physically impaired\",\"Health Assessment Survey Questions\"]},{\"unique_key\":\"951d8edd-94b8-4e07-9d7e-9cf3dd954d30\",\"type\":\"data\",\"name\":\"dropdown\",\"title\":\"Dropdown\",\"label\":\"<p>How often do you get a health checkup?</p>\",\"required\":false,\"options\":[{\"unique_key\":\"e986ff1b-b513-418f-bee7-b42a6badd41e\",\"option\":\"Once in 3 months\",\"value\":\"Once in 3 months\"},{\"unique_key\":\"d35269fd-6cbd-4661-a306-09126d6b64be\",\"option\":\"Once in 6 months\",\"value\":\"Once in 6 months\"},{\"unique_key\":\"f5ae93b5-2c83-4a92-b3f0-7cf56a2b2e71\",\"option\":\"Once a year\",\"value\":\"Once a year\"},{\"unique_key\":\"c848c170-7c24-476f-9ade-023906868fc1\",\"option\":\"Only when needed\",\"value\":\"Only when needed\"},{\"unique_key\":\"a76b32d8-d14c-48ce-9c22-391c719b2371\",\"option\":\"Never get it done\",\"value\":\"Never get it done\"},{\"unique_key\":\"bd2d16a5-81b8-45dc-aa7f-462e8167ef71\",\"option\":\"Other\",\"value\":\"Other\"}],\"data\":\"Once in 6 months\"},{\"unique_key\":\"d4dbee25-8846-4ceb-8360-e3e69813b9fd\",\"type\":\"data\",\"name\":\"radio\",\"title\":\"Radio\",\"label\":\"<p>What was your las blood pressure reading?</p>\",\"required\":false,\"options\":[{\"unique_key\":\"f9c77c48-625a-4098-a4ea-e189eb8cb98c\",\"option\":\"Low\",\"value\":\"Low\"},{\"unique_key\":\"0e2c584c-ffef-4f9b-8df3-5cfa84b97332\",\"option\":\"Normal\",\"value\":\"Normal\"},{\"unique_key\":\"9b2a65f7-de67-44ad-b25b-9cf4516e8edb\",\"option\":\"High\",\"value\":\"High\"}]}]', '2022-09-24 19:40:37', '2022-09-24 19:40:37'),
(4, 'def05be8-069d-4dfe-b1d1-a72b4a1264c1', 1, 3, '3.416', '6.431', '[{\"unique_key\":\"a43ffeb9-81b8-4470-b900-7e4505fa7dae\",\"type\":\"instruction\",\"name\":\"paragraph\",\"title\":\"Paragraph\",\"label\":\"<p>A health survey is&nbsp;<strong>a tool used to gather information on the behavior of a specific group of people from a determined area</strong>. This kind of survey allows health care experts to understand better how a community acts towards health.</p>\"},{\"unique_key\":\"38b94cd3-9602-4ff6-8b8c-e1a5581cdadf\",\"type\":\"decorative\",\"name\":\"divider\",\"title\":\"Line Break\"},{\"unique_key\":\"2764a831-9747-478f-b946-28b952257aec\",\"type\":\"data\",\"name\":\"checkbox\",\"title\":\"Checkbox\",\"label\":\"<p>What do you say about your overall health?</p>\",\"required\":true,\"options\":[{\"unique_key\":\"7615104c-962e-4ce9-a46f-531eec3aaeb0\",\"option\":\"Having Good Physical Health\",\"value\":\"Having Good Physical Health\"},{\"unique_key\":\"d7a3fa2b-b068-46dd-8c98-837883374acb\",\"option\":\"Moderately physically impaired\",\"value\":\"Moderately physically impaired\"},{\"unique_key\":\"0bcc94f6-cf64-42aa-88d9-4855d7dbe2dc\",\"option\":\"Severely physically impaired\",\"value\":\"Severely physically impaired\"},{\"unique_key\":\"c241736d-20c4-4fc1-9535-6178a4f4ec44\",\"option\":\"Totally physically impaired\",\"value\":\"Totally physically impaired\"},{\"unique_key\":\"214daca8-92db-4e5a-b973-a1b1fd90ec4f\",\"option\":\"Health Assessment Survey Questions\",\"value\":\"Health Assessment Survey Questions\"}],\"data\":[\"Health Assessment Survey Questions\",\"Severely physically impaired\",\"Moderately physically impaired\"]},{\"unique_key\":\"951d8edd-94b8-4e07-9d7e-9cf3dd954d30\",\"type\":\"data\",\"name\":\"dropdown\",\"title\":\"Dropdown\",\"label\":\"<p>How often do you get a health checkup?</p>\",\"required\":false,\"options\":[{\"unique_key\":\"e986ff1b-b513-418f-bee7-b42a6badd41e\",\"option\":\"Once in 3 months\",\"value\":\"Once in 3 months\"},{\"unique_key\":\"d35269fd-6cbd-4661-a306-09126d6b64be\",\"option\":\"Once in 6 months\",\"value\":\"Once in 6 months\"},{\"unique_key\":\"f5ae93b5-2c83-4a92-b3f0-7cf56a2b2e71\",\"option\":\"Once a year\",\"value\":\"Once a year\"},{\"unique_key\":\"c848c170-7c24-476f-9ade-023906868fc1\",\"option\":\"Only when needed\",\"value\":\"Only when needed\"},{\"unique_key\":\"a76b32d8-d14c-48ce-9c22-391c719b2371\",\"option\":\"Never get it done\",\"value\":\"Never get it done\"},{\"unique_key\":\"bd2d16a5-81b8-45dc-aa7f-462e8167ef71\",\"option\":\"Other\",\"value\":\"Other\"}]},{\"unique_key\":\"d4dbee25-8846-4ceb-8360-e3e69813b9fd\",\"type\":\"data\",\"name\":\"radio\",\"title\":\"Radio\",\"label\":\"<p>What was your last blood pressure reading?</p>\",\"required\":false,\"options\":[{\"unique_key\":\"f9c77c48-625a-4098-a4ea-e189eb8cb98c\",\"option\":\"Low\",\"value\":\"Low\"},{\"unique_key\":\"0e2c584c-ffef-4f9b-8df3-5cfa84b97332\",\"option\":\"Normal\",\"value\":\"Normal\"},{\"unique_key\":\"9b2a65f7-de67-44ad-b25b-9cf4516e8edb\",\"option\":\"High\",\"value\":\"High\"}]},{\"unique_key\":\"936be2cc-eda7-4a81-8417-faf3b41aaa7f\",\"type\":\"data\",\"name\":\"radio\",\"title\":\"Radio\",\"label\":\"<p>Gender</p>\",\"required\":false,\"options\":[{\"unique_key\":\"bdbfc3e2-7563-4769-8427-81d7fa4661df\",\"option\":\"Male\",\"value\":\"Male\"},{\"unique_key\":\"40809abd-acee-4806-8fef-95f43bcb70c7\",\"option\":\"Female\",\"value\":\"Female\"}],\"data\":\"Male\"}]', '2022-09-25 10:28:12', '2022-09-25 10:28:12'),
(5, '93fa1c94-5de1-40b8-a2ff-c9fb06f0ebc0', 1, 3, '3.416', '6.431', '[{\"unique_key\":\"a43ffeb9-81b8-4470-b900-7e4505fa7dae\",\"type\":\"instruction\",\"name\":\"paragraph\",\"title\":\"Paragraph\",\"label\":\"<p>A health survey is&nbsp;<strong>a tool used to gather information on the behavior of a specific group of people from a determined area</strong>. This kind of survey allows health care experts to understand better how a community acts towards health.</p>\"},{\"unique_key\":\"38b94cd3-9602-4ff6-8b8c-e1a5581cdadf\",\"type\":\"decorative\",\"name\":\"divider\",\"title\":\"Line Break\"},{\"unique_key\":\"2764a831-9747-478f-b946-28b952257aec\",\"type\":\"data\",\"name\":\"checkbox\",\"title\":\"Checkbox\",\"label\":\"<p>What do you say about your overall health?</p>\",\"required\":true,\"options\":[{\"unique_key\":\"7615104c-962e-4ce9-a46f-531eec3aaeb0\",\"option\":\"Having Good Physical Health\",\"value\":\"Having Good Physical Health\"},{\"unique_key\":\"d7a3fa2b-b068-46dd-8c98-837883374acb\",\"option\":\"Moderately physically impaired\",\"value\":\"Moderately physically impaired\"},{\"unique_key\":\"0bcc94f6-cf64-42aa-88d9-4855d7dbe2dc\",\"option\":\"Severely physically impaired\",\"value\":\"Severely physically impaired\"},{\"unique_key\":\"c241736d-20c4-4fc1-9535-6178a4f4ec44\",\"option\":\"Totally physically impaired\",\"value\":\"Totally physically impaired\"},{\"unique_key\":\"214daca8-92db-4e5a-b973-a1b1fd90ec4f\",\"option\":\"Health Assessment Survey Questions\",\"value\":\"Health Assessment Survey Questions\"}],\"data\":[\"Having Good Physical Health\",\"Severely physically impaired\",\"Health Assessment Survey Questions\"]},{\"unique_key\":\"951d8edd-94b8-4e07-9d7e-9cf3dd954d30\",\"type\":\"data\",\"name\":\"dropdown\",\"title\":\"Dropdown\",\"label\":\"<p>How often do you get a health checkup?</p>\",\"required\":false,\"options\":[{\"unique_key\":\"e986ff1b-b513-418f-bee7-b42a6badd41e\",\"option\":\"Once in 3 months\",\"value\":\"Once in 3 months\"},{\"unique_key\":\"d35269fd-6cbd-4661-a306-09126d6b64be\",\"option\":\"Once in 6 months\",\"value\":\"Once in 6 months\"},{\"unique_key\":\"f5ae93b5-2c83-4a92-b3f0-7cf56a2b2e71\",\"option\":\"Once a year\",\"value\":\"Once a year\"},{\"unique_key\":\"c848c170-7c24-476f-9ade-023906868fc1\",\"option\":\"Only when needed\",\"value\":\"Only when needed\"},{\"unique_key\":\"a76b32d8-d14c-48ce-9c22-391c719b2371\",\"option\":\"Never get it done\",\"value\":\"Never get it done\"},{\"unique_key\":\"bd2d16a5-81b8-45dc-aa7f-462e8167ef71\",\"option\":\"Other\",\"value\":\"Other\"}],\"data\":\"Once in 6 months\"},{\"unique_key\":\"d4dbee25-8846-4ceb-8360-e3e69813b9fd\",\"type\":\"data\",\"name\":\"radio\",\"title\":\"Radio\",\"label\":\"<p>Select your last blood pressure reading.</p>\",\"required\":true,\"options\":[{\"unique_key\":\"f9c77c48-625a-4098-a4ea-e189eb8cb98c\",\"option\":\"Low\",\"value\":\"Low\"},{\"unique_key\":\"0e2c584c-ffef-4f9b-8df3-5cfa84b97332\",\"option\":\"Normal\",\"value\":\"Normal\"},{\"unique_key\":\"9b2a65f7-de67-44ad-b25b-9cf4516e8edb\",\"option\":\"High\",\"value\":\"High\"}],\"data\":\"Low\"}]', '2022-09-25 17:27:00', '2022-09-25 17:27:00'),
(6, 'd1c54085-c8ca-404c-965d-8f7bfe31dd0b', 1, 3, '3.416', '6.431', '[{\"unique_key\":\"a43ffeb9-81b8-4470-b900-7e4505fa7dae\",\"type\":\"instruction\",\"name\":\"paragraph\",\"title\":\"Paragraph\",\"label\":\"<p>A health survey is&nbsp;<strong>a tool used to gather information on the behavior of a specific group of people from a determined area</strong>. This kind of survey allows health care experts to understand better how a community acts towards health.</p>\"},{\"unique_key\":\"38b94cd3-9602-4ff6-8b8c-e1a5581cdadf\",\"type\":\"decorative\",\"name\":\"divider\",\"title\":\"Line Break\"},{\"unique_key\":\"2764a831-9747-478f-b946-28b952257aec\",\"type\":\"data\",\"name\":\"checkbox\",\"title\":\"Checkbox\",\"label\":\"<p>What do you say about your overall health?</p>\",\"required\":true,\"options\":[{\"unique_key\":\"7615104c-962e-4ce9-a46f-531eec3aaeb0\",\"option\":\"Having Good Physical Health\",\"value\":\"Having Good Physical Health\"},{\"unique_key\":\"d7a3fa2b-b068-46dd-8c98-837883374acb\",\"option\":\"Moderately physically impaired\",\"value\":\"Moderately physically impaired\"},{\"unique_key\":\"0bcc94f6-cf64-42aa-88d9-4855d7dbe2dc\",\"option\":\"Severely physically impaired\",\"value\":\"Severely physically impaired\"},{\"unique_key\":\"c241736d-20c4-4fc1-9535-6178a4f4ec44\",\"option\":\"Totally physically impaired\",\"value\":\"Totally physically impaired\"},{\"unique_key\":\"214daca8-92db-4e5a-b973-a1b1fd90ec4f\",\"option\":\"Health Assessment Survey Questions\",\"value\":\"Health Assessment Survey Questions\"}],\"data\":[\"Severely physically impaired\",\"Totally physically impaired\"]},{\"unique_key\":\"951d8edd-94b8-4e07-9d7e-9cf3dd954d30\",\"type\":\"data\",\"name\":\"dropdown\",\"title\":\"Dropdown\",\"label\":\"<p>How often do you get a health checkup?</p>\",\"required\":false,\"options\":[{\"unique_key\":\"e986ff1b-b513-418f-bee7-b42a6badd41e\",\"option\":\"Once in 3 months\",\"value\":\"Once in 3 months\"},{\"unique_key\":\"d35269fd-6cbd-4661-a306-09126d6b64be\",\"option\":\"Once in 6 months\",\"value\":\"Once in 6 months\"},{\"unique_key\":\"f5ae93b5-2c83-4a92-b3f0-7cf56a2b2e71\",\"option\":\"Once a year\",\"value\":\"Once a year\"},{\"unique_key\":\"c848c170-7c24-476f-9ade-023906868fc1\",\"option\":\"Only when needed\",\"value\":\"Only when needed\"},{\"unique_key\":\"a76b32d8-d14c-48ce-9c22-391c719b2371\",\"option\":\"Never get it done\",\"value\":\"Never get it done\"},{\"unique_key\":\"bd2d16a5-81b8-45dc-aa7f-462e8167ef71\",\"option\":\"Other\",\"value\":\"Other\"}],\"data\":\"Once in 3 months\"},{\"unique_key\":\"d4dbee25-8846-4ceb-8360-e3e69813b9fd\",\"type\":\"data\",\"name\":\"radio\",\"title\":\"Radio\",\"label\":\"<p>Select your last blood pressure reading.</p>\",\"required\":true,\"options\":[{\"unique_key\":\"f9c77c48-625a-4098-a4ea-e189eb8cb98c\",\"option\":\"Low\",\"value\":\"Low\"},{\"unique_key\":\"0e2c584c-ffef-4f9b-8df3-5cfa84b97332\",\"option\":\"Normal\",\"value\":\"Normal\"},{\"unique_key\":\"9b2a65f7-de67-44ad-b25b-9cf4516e8edb\",\"option\":\"High\",\"value\":\"High\"}],\"data\":\"Low\"}]', '2022-09-25 17:37:24', '2022-09-25 17:37:24');

-- --------------------------------------------------------

--
-- Table structure for table `survey_users`
--

CREATE TABLE `survey_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `survey_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `survey_users`
--

INSERT INTO `survey_users` (`id`, `survey_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 3, 2, NULL, NULL),
(2, 2, 2, NULL, NULL),
(3, 3, 3, NULL, NULL),
(4, 3, 6, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, '15e5410a-bfb7-45b6-b5fa-8245a8ffd3a8', 'Braimah Paul', 'braimahjake@gmail.com', NULL, '$2y$10$ammHVbmLD2qIk39AjK2SsOGJdQZFRp2RTzQyI5bTErkGch5h1j5Gq', NULL, '2022-08-21 16:12:02', '2022-09-09 18:52:58'),
(2, '45954ade-4ad8-4457-a601-3e05a4ee1d02', 'James  Simon', 'tester@gmail.com', NULL, '$2y$10$qpmGcrvfLtcrp1wjb2k6ieDAD38t1XfxdGVlHT/t1PHrl75Bi9.aa', NULL, '2022-08-22 13:09:34', '2022-09-24 06:46:17'),
(3, 'f33b28f7-844c-4261-928d-a27330b90002', 'Tom Jones', 'tester1@gmail.com', NULL, '$2y$10$JywPDZ6gU6WGc7FILPrd0uMGeGTKaLFTEv.zDcuLXHlYN2Qt9W.8u', NULL, '2022-08-22 13:10:29', '2022-09-24 10:42:33'),
(4, '1203e1d4-922a-4173-ac25-542facf90ede', 'Joan Roderick', 'j.rodricko@gmail.com', NULL, '$2y$10$kcC2DKzODHwK85BfiEtGAe1WQhO50pvMShZ2ZeQIkVbQ2j506wze2', NULL, '2022-08-23 23:20:30', '2022-08-23 23:27:54'),
(5, 'eaae405c-845e-4e96-97ab-bb23f7904db7', 'Dominic Smith', 'dominic@gmail.com', NULL, '$2y$10$ftfzf72xfPxubR0ESBQtcuy3y7GbNCasIKiVRxgBaRNGFMkWyYvma', NULL, '2022-08-23 23:30:59', '2022-08-23 23:30:59'),
(7, '8a907629-9c91-469a-88e4-0771434e48de', 'Peter Pan', 'peter.ko@gmail.com', NULL, '$2y$10$SXvRad3W4fraKKPtFlWW5.g.DSc2lfCkzzt2yABnkt8JM7j5yt6ku', NULL, '2022-08-24 07:21:27', '2022-08-24 07:21:40'),
(8, '1609b67b-473b-445e-bfe3-a47a2347c630', 'Michael Eigbadon', 'michael@gmail.com', NULL, '$2y$10$LwWabjWNYEjXaFXyi8tssuKVKSq9gerAl1TkCiTyvEi7ihA.Ql.v6', NULL, '2022-08-29 14:18:50', '2022-08-29 14:18:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `mailing_lists`
--
ALTER TABLE `mailing_lists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mailing_list_contacts`
--
ALTER TABLE `mailing_list_contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_surveys`
--
ALTER TABLE `project_surveys`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_users`
--
ALTER TABLE `project_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `surveys`
--
ALTER TABLE `surveys`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `survey_responses`
--
ALTER TABLE `survey_responses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `survey_users`
--
ALTER TABLE `survey_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activities`
--
ALTER TABLE `activities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mailing_lists`
--
ALTER TABLE `mailing_lists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `mailing_list_contacts`
--
ALTER TABLE `mailing_list_contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `project_surveys`
--
ALTER TABLE `project_surveys`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_users`
--
ALTER TABLE `project_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `surveys`
--
ALTER TABLE `surveys`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `survey_responses`
--
ALTER TABLE `survey_responses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `survey_users`
--
ALTER TABLE `survey_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
