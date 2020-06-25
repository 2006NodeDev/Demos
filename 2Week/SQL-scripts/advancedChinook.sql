set schema 'chinook';


select * from "Artist" as a where a."Name" like 'A%';--use this query to find albums that belong to these bands


select * from "Album" a2 where a2."ArtistId" in
	(select "ArtistId" from "Artist" as a where a."Name" like 'A%');
	
--all of the tracks on album written by bands that started with the letter A

select * from "Track" t where t."AlbumId" in
	(select "AlbumId" from "Album" a2 where a2."ArtistId" in
		(select "ArtistId" from "Artist" as a where a."Name" like 'A%'));
		
-- a left join will show all artists even if the don't have an album
select * from "Artist" a inner join "Album" a2 on a."ArtistId" = a2."ArtistId"; -- on keyword to specify the join column
-- there are like 70 artists without albums
select * from "Artist" a left join "Album" a2 on a."ArtistId" = a2."ArtistId";
-- we have no albums without an artist so right looks like inner
select * from "Artist" a right join "Album" a2 on a."ArtistId" = a2."ArtistId";
-- because right looks like inner and outer is just left + right, outer looks like the left join
select * from "Artist" a full outer join "Album" a2 on a."ArtistId" = a2."ArtistId";


-- because there are multiple columns with the same name, we get unexpected results
select * from "Artist" a natural join "Album" a2 natural join "Track" t;
select * from "Artist" a natural join "Album" a2 inner join "Track" t on t."AlbumId" = a2."AlbumId" ;

select * from "Artist" a inner join "Album" a2 on a."Name" > a2."Title";--theta


select "FirstName" , "LastName" , "Address" from "Employee" e 
	union
select "FirstName" , "LastName" , "Address" from "Customer" c;

select count(*) from "Artist" a inner join "Album" a2 on a."Name" > a2."Title";

create sequence test start 1;

select * from nextval('test');

create trigger my_trigger
before insert on "Artist"
for each row execute procedure update_pk();-- custom function to handle this event

create function update_pk() returns integer as
$$--delimiter begin and end of the function
--write function
$$ language plpgsql;

delete from "Artist" where "ArtistId" = 22;