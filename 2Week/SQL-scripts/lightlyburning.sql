create schema lightlyburning;
set schema 'lightlyburning';

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
	"role" int references roles ("role_id") --fk to a role table
);

--every time I insert a new row, I have to find the largest id and add one to get the next unique one
--special data type called serial(int) - every time you insert a new record, I become the next value in a sequence that started counting from 1
-- serial autoincrements the id for us, so we don't have to search
-- when using serial, don't provide a value for any serial column

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

insert into books ("title","pages","chapters","publisher","publishing_date","series","number_in_series","ISBN")
values('Harry Potter', '100', '10', 'Bloomsbury (UK)', '1997-07-01 00:00:00', true, 1, 120398123);

select * from books;

create table genre(
	"genre_id" serial primary key,
	"genre" text not null unique
);

insert into genre ("genre")
	values ('Fantasy');

create table authors(
	"author_id" serial primary key,
	"author" text not null unique
);

insert into authors ("author")
	values ('J.K.Rowling');

create table books_authors(
	"book_id" int references books ("book_id"),
	"author_id" int references authors ("author_id"),
	primary key ("book_id", "author_id")
);

insert into books_authors values (1,1);

create table books_genre(
	"book_id" int references books ("book_id"),
	"genre_id" int references genre ("genre_id"),
	primary key ("book_id", "genre_id")
);

insert into books_genre values (1,1);


select * from books b natural join books_authors ba natural join authors a;
