create schema lightlyburning_user_service;
set schema 'lightlyburning_user_service';



-- run the entire script to regenerate the ddl

drop table users;
drop table roles;


create table roles(
	"role_id" serial primary key,
	"role" text
);

-- some tables have dependencies on others and we should make those others first
create table users (
	"user_id" serial primary key,
	"username" text not null unique,
	"password" text not null,
	"email" text,
	"role" int references roles ("role_id"), --fk to a role table
	"image" text
);



insert into roles ("role")
	values ('Admin'),
		   ('Manager'),
		   ('User');
		  
insert into users ("username", "password" ,"email", "role" )
	values ('alec', 'password', 'alec@email.com', 1),
		   ('reba', 'password', 'reba@email.com', 2),
		   ('chrischale', 'password', 'chrischale@email.com', 3);
