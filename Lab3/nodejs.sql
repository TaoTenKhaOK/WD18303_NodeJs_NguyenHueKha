-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 19, 2024 at 07:28 AM
-- Server version: 8.0.31
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `update_at`) VALUES
(1, 'Mì Gói', '2024-03-15 20:14:07', '2024-03-15 20:14:07'),
(2, 'Mì ly', '2024-03-15 20:14:13', '2024-03-15 20:14:13');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `short_description` text COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `content` text COLLATE utf8mb4_general_ci NOT NULL,
  `price` int NOT NULL,
  `sale_price` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `categories_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `short_description`, `image`, `content`, `price`, `sale_price`, `create_at`, `update_at`, `categories_id`) VALUES
(1, 'Mì Gói Hảo Hảo', 'Mì gói Hảo Hảo là một sản phẩm mì ăn liền nổi tiếng được sản xuất và phân phối rộng rãi trên thị trường. Mì gói Hảo Hảo thường có đa dạng các loại mì như mì gói cắt mảnh, mì gói dai, mì gói mềm, v.v. Sản phẩm này thường được biết đến với hương vị đậm đà, đa dạng các loại gia vị và mùi thơm hấp dẫn. Hầu hết các biến thể của mì gói Hảo Hảo đều được đóng gói trong bao bì tiện lợi, dễ dàng sử dụng và tiện lợi để mang theo khi đi du lịch hoặc làm việc. Mì gói Hảo Hảo thường được người tiêu dùng đánh giá cao về chất lượng và giá trị dinh dưỡng.', 'hh.png\r\n', 'Mì gói Hảo Hảo là một trong những thương hiệu mì gói hàng đầu tại Việt Nam và cũng đã được nhiều người tiêu dùng trên khắp thế giới biết đến. Với hơn 30 năm kinh nghiệm trong ngành sản xuất mì gói, Hảo Hảo đã xây dựng một danh tiếng vững chắc trong việc cung cấp sản phẩm chất lượng cao với hương vị đa dạng và độ ẩm lý tưởng.\r\n\r\nMì gói Hảo Hảo không chỉ đa dạng về loại mì như mì cắt mảnh, mì dai, mì mềm mà còn có nhiều lựa chọn về hương vị và phong cách ẩm thực, từ mì gói cay nồng, mì gói hải sản đến mì gói cung cấp hương vị đặc trưng của các món ăn phổ biến trong ẩm thực Á Đông như mì gói phở, mì gói hủ tiếu, v.v.\r\n\r\nBao bì của mì gói Hảo Hảo thường được thiết kế tiện lợi, bảo quản dễ dàng và thuận tiện cho việc mang theo khi đi du lịch hoặc làm việc. Mỗi gói mì gói Hảo Hảo được đóng gói cẩn thận để đảm bảo an toàn vệ sinh thực phẩm và giữ cho mì luôn giữ được độ tươi mới và hương vị tuyệt vời.\r\n\r\nĐặc biệt, mì gói Hảo Hảo cũng đáp ứng nhu cầu dinh dưỡng với các thành phần chọn lọc và giàu protein, carbohydrat và các dạng vitamin và khoáng chất cần thiết. Điều này giúp sản phẩm không chỉ là một lựa chọn ngon miệng mà còn là một phần của chế độ ăn uống cân đối và lành mạnh.\r\n\r\nVới sứ mệnh mang lại hạnh phúc và sự tiện lợi cho người tiêu dùng, mì gói Hảo Hảo đã trở thành một biểu tượng của ẩm thực nhanh chóng và ngon miệng, được yêu thích và tin dùng không chỉ tại Việt Nam mà còn trên toàn thế giới.', 7000, '6000', '2024-03-15 20:15:58', NULL, 1),
(2, 'Mì ly hảo hảo', 'Mì ly Hảo Hảo là một dạng mì ăn liền đóng trong ly nhựa tiện lợi, phổ biến và được ưa chuộng trên thị trường. Sản phẩm này thường đi kèm với các gói gia vị và dầu ăn, giúp người dùng có thể thưởng thức món mì ngon miệng mọi lúc mọi nơi mà không cần phải sử dụng bát đĩa hay dụng cụ nấu nướng phức tạp. Mì ly Hảo Hảo thường có nhiều loại hương vị và chủng loại mì khác nhau, từ mì gói cắt mảnh, mì dai đến mì mềm, đáp ứng đa dạng sở thích và khẩu vị của người tiêu dùng.', 'lyhh.png\r\n', 'Mì ly Hảo Hảo là một dạng mì ăn liền được đóng gói trong hũ nhựa tiện lợi, là sự kết hợp hoàn hảo giữa tiện ích và hương vị thơm ngon. Được sản xuất bởi công ty Hảo Hảo, mì ly Hảo Hảo không chỉ là một lựa chọn phổ biến mà còn là một trong những sản phẩm ăn vặt yêu thích của người tiêu dùng trên khắp Việt Nam và nhiều quốc gia khác.\r\n\r\nMì ly Hảo Hảo có mặt trên thị trường với một loạt các loại mì và hương vị khác nhau, từ mì gói cắt mảnh đến mì dai hoặc mềm, phù hợp với sở thích và khẩu vị của mọi người. Mỗi hũ mì ly Hảo Hảo thường đi kèm với các gói gia vị và dầu ăn, tạo nên một bữa ăn đầy đủ với hương vị đa dạng và phong phú.\r\n\r\nĐiểm đặc biệt của mì ly Hảo Hảo chính là sự tiện lợi. Với việc chỉ cần thêm nước sôi vào hũ, đợi vài phút, sau đó thêm gia vị và dầu ăn theo hướng dẫn, bạn sẽ có ngay một bát mì thơm ngon, đầy đủ và ngon miệng mà không cần sử dụng bất kỳ dụng cụ nấu nướng nào khác. Điều này làm cho mì ly Hảo Hảo trở thành lựa chọn lý tưởng cho những người luôn bận rộn và cần một bữa ăn nhanh gọn mà vẫn đảm bảo chất lượng và hương vị.\r\n\r\nKhông chỉ là một lựa chọn tiện lợi, mì ly Hảo Hảo cũng đảm bảo về chất lượng và dinh dưỡng. Với các thành phần được chọn lọc kỹ càng và quy trình sản xuất nghiêm ngặt, sản phẩm này mang lại sự an tâm về sức khỏe cho người tiêu dùng.\r\n\r\nVới đa dạng về hương vị, tiện lợi và chất lượng, mì ly Hảo Hảo không chỉ là một sản phẩm mì ăn liền thông thường, mà còn là một phần không thể thiếu của ẩm thực hàng ngày của nhiều gia đình và cá nhân trên khắp cả nước.', 10000, '9000', '2024-03-15 20:17:46', '2024-03-15 20:17:46', 2),
(12, 'thêm mói123', '123', '1710516386685-LY-CHAY.png', '', 123, '0', '2024-03-15 21:56:06', '2024-03-15 21:56:06', 1),
(13, 'mì gói123', '3333', '1710516264863-HH_Suonheo_TP.png', '', 333, '0', '2024-03-15 21:56:22', '2024-03-15 21:56:22', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `rule` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categories_id` (`categories_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
