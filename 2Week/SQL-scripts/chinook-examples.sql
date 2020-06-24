set schema 'chinook';

--select the, columns, seperated, by, columns *=every column from table name where condtions about the rows
select * from artist;
--postgres uses all lowercase for its naming scheme
-- if you want it to not be all lowercase for structures we make, you need to use ""
-- note: '' are for string values "" are for structures/column names
select "ArtistId","Name" from "Artist";
select * from "Album" where "AlbumId" = 4;
select * from "Album" where "Title" like 'A%';--this will select all columns from rows that have title that begins with the capitol letter A
select * from "Album" where "ArtistId" in (1,5,10,15);
select * from "Album" where "ArtistId" in (1,5,10,15) and "Title" like 'F%';
select * from "Album" where "Title" < 'zzzzzzzzzzzzzzzzzzz';

select "AlbumId" as "The Id of the Album" from "Album" a;--in postgres we can skip the as keyword

-- avg prive and length for a song in a genre
select avg("UnitPrice" ) "Average Price", avg("Milliseconds" ) "Average Track Length", "GenreId" from "Track" group by "GenreId";

select avg("UnitPrice" ) "Average Price", avg("Milliseconds" ) "Average Track Length", "GenreId" from "Track" group by "GenreId" having avg("UnitPrice") > .99;

select avg("UnitPrice" ) "Average Price", avg("Milliseconds" ) "Average Track Length", "GenreId" 
	from "Track" 
	group by "GenreId" 
	having avg("UnitPrice") > .99
	order by "Average Track Length" asc; -- default ordering is asc
	
select * from "Track" t limit 10;
select * from "Track" t limit 10 offset 10;