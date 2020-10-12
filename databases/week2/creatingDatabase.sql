create database carRepair;
use carRepair;
-- drop database carRepair;

CREATE TABLE `cars` (
  `license_no` varchar(50) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `model` varchar(25) not null,
  
  PRIMARY KEY (`license_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `services` (
  `service_no` int(10) NOT NULL,
  `type` varchar(50) NOT NULL,
  `price_per_hour` int(3) not null default 600,
  
  PRIMARY KEY (`service_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `repairs` (
  `license_no` varchar(50) NOT NULL,
  `service_no` int,
  `delivery_date` Date NOT NULL,
  `hours` int(12) NOT NULL,
    
  FOREIGN KEY (license_no) references cars (license_no),
  FOREIGN KEY (service_no) references services (service_no) on delete cascade
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into cars(license_no, owner, model) values ( 'zz678', 'kamal', 'BMW');
insert into services(service_no, type, price_per_hour) values (234, 'Engine', 500);
insert into repairs(license_no, service_no, delivery_date, hours) values ('zz678', 234, '2020-10-15', 45);