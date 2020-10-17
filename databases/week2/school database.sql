create database studentInfo;
use studentInfo;
-- drop database studentInfo;

CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `begins` date default Null,
  `end` date default null,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
insert into class (id, name, begins, end) values (1, 'HYF15','2010-10-15','2022-10-05'); 
insert into class (id, name, begins, end) values (2, 'HYF16','2010-10-15','2020-10-05'); 
select * from class;

CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phone` int(8) NOT NULL,
  `email` varchar(255) NOT NULL,
  `class_id` int(10) unsigned NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_student` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
insert into student (id, name, phone, email, class_id) values (1, 'kamal','22222222','xyz@gmail.com', 1); 
insert into student (id, name, phone, email, class_id) values (2, 'Kristian','22222223','88@gmail.com', 2); 
select * from student;

-- index on name column
create index index_student on student(name);

-- Add a new column in class table.
Alter table class ADD status enum('not-started', 'ongoing', 'finished');
update class set status = 'not-started' where class.id = 1;
update class set status = 'finished' where class.id = 2;
select * from class;

