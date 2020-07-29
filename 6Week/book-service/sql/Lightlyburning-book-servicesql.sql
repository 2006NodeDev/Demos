drop schema if exists lightlyburning_book_service cascade;
create schema lightlyburning_book_service;
set schema 'lightlyburning_book_service';

create table books (
	"book_id" serial primary key,
	"title" text not null,
	--many to many with authors --no fk here
	"pages" numeric(10,0),--a numeric without any decimals allowed
	"chapters" numeric (10,0),
	"publisher" text not null,
	"publishing_date" timestamp not null,--date format that follows iso standards yyyy-mm-dd hh:mm:ss
	-- genre will be many to many, no fk here,
	"series" boolean,
	"number_in_series" int2,
	"ISBN" int not null
);


create table genre(
	"genre_id" serial primary key,
	"genre" text not null unique
);



create table authors(
	"author_id" serial primary key,
	"author" text not null unique
);



create table books_authors(
	"book_id" int references books ("book_id"),
	"author_id" int references authors ("author_id"),
	primary key ("book_id", "author_id")
);



create table books_genre(
	"book_id" int references books ("book_id"),
	"genre_id" int references genre ("genre_id"),
	primary key ("book_id", "genre_id")
);

create table browsing_history(
	"book_id" int references books ("book_id"),
	"user_id" int not null,
	"time_viewed" timestamp default now(),
	primary key ("book_id", "user_id")
);


insert into books ("title","pages","chapters","publisher","publishing_date","series","number_in_series","ISBN")
		values    ('Harry Potter', 100, 10, 'Bloomsbury (UK)', '1997-07-01 00:00:00', true, 1, 120398123),
	  			  ('Lovely Bones', 150, 15, 'Little, Brown', '2002-01-01 00:00:00', false, 1, 98177566);


insert into genre ("genre")
	values ('Fantasy'),
		   ('Horror'),
		   ('Thriller'),
		   ('Psychological'),
		   ('Magic');
	
insert into authors ("author")
	values ('J.K.Rowling'),
		   ('Amanda Sebold');
	
insert into books_authors 
	values (1,1),
		   (2,2);

insert into books_genre 
	values (1,3),
		   (1,5),
		   (2,3),
		   (2,4);



select * from books b natural join books_authors ba natural join authors a;


select bh.book_id from browsing_history bh where bh.user_id in $1 order by bh.time_viewed desc;