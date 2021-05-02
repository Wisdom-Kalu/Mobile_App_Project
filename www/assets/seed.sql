
create table if not exists contact(
id integer primary key auto_increment,
fullName varchar(150) not null,
phoneNumber varchar(150) not null
);

INSERT INTO contact VALUES(1, 'Afsanat Ineza', '+2347037151576');