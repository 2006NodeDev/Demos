set schema 'lightlyburning';

--run this entire script to re build initial data

truncate books_authors cascade;
truncate books_genre cascade;
truncate books cascade; 
truncate genre cascade;
truncate authors cascade;




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
		   
select b.book_id, b."pages", b.chapters, b."ISBN" ,b.series , b.number_in_series , b.publisher , b.publishing_date , b.title, array_agg(distinct (a.author )) as authors, array_agg(distinct (g.genre )) as genres, array_agg(distinct (g.genre_id )) as genre_ids 
	from lightlyburning.books b 
					  natural join lightlyburning.books_authors ba 
                      natural join lightlyburning.authors a
                      natural join lightlyburning.books_genre bg
                      natural join lightlyburning.genre g -- these four lines could get us number of author x number of genre rows potentially a lot of rows
                      where b.book_id =1
                      group by b.book_id; -- most of the info in those rows is exactly the same
                      --when we do a group by, if the info can have different values we need to use aggregate function to smush it together
                      -- we chose array_agg which will put the multiple values into an array, we also combined it with distinct to only get unique values
		  
		  