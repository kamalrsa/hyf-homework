create database meal_sharing;
use meal_sharing;
--  drop database if exists meal_sharing;

SET NAMES utf8mb4;
drop table if exists meal;

CREATE TABLE `meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `location` varchar(255) NOT NULL,
  `when` DATETIME NOT NULL,
  `max_reservations` int(10) unsigned NOT NULL,
  `price` decimal(6,4) NOT NULL,
  `created_date` DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP table if exists reservation;
CREATE TABLE `reservation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `number_of_guests` int(10) unsigned NOT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  `created_date` DATE,
  FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
drop table if exists review;
CREATE TABLE `review` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  `stars` int(10) unsigned NOT NULL,
  `created_date` DATE,
  Foreign Key (meal_id) references meal(id) on delete cascade
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (1, 'Rice and curry', 'mixed with rice and vegetable', 'Skovlunde','2020-10-20 13:16:30' ,'8', '80', '2020-10-20');
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (2, 'chinese noodels', 'noodels with chilly', 'skovlunde','2020-10-20 13:16:30' ,'8', '90', '2020-10-20');
select * from meal;

insert into reservation (id, number_of_guests, meal_id, created_date) values (1, 80, 1, '2020-10-20');
insert into reservation (id, number_of_guests, meal_id, created_date) values (2, 90, 2, '2020-10-20');
select*from reservation;

insert into review (id, title, description, meal_id, stars, created_date) values (2, 'Good','It was good', 1, 5,'2020-10-20' );
insert into review (id, title, description, meal_id, stars, created_date) values (1, 'Good','It was ok', 2, 5,'2020-10-20' );
select * from review;

-- update a meal with any id,
update meal set location='balllerup' where id = 1;

-- Get meals that has the price conditions
select * from meal where price < 90;

-- meals that has reservation
select * from reservation inner join meal on reservation.meal_id = meal.id;

-- get meal that partially match a title
select * from meal where title like 'Rød grød med flød%';

-- get the meals that have good review
select meal.title, review.title, review.description, review.stars from meal join review on review.meal_id = meal.id where review.stars>4;

-- sort all meals by average no of stars
select meal.title, avg(review.stars) from meal join review on review.meal_id = meal.id order by review.stars asc;



