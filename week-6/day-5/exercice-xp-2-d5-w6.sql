/*EX 1
SELECT * FROM students
*/

/*EX 2
SELECT first_name, last_name FROM students;
*/

/*EX 3
SELECT first_name, last_name FROM students
Where id = 2
Where last_name = 'Marc' AND  first_name = 'Benichou'
Where last_name = 'Marc' OR  first_name = 'Benichou'
Where first_name LIKE '%a%';
Where first_name LIKE 'a%';
Where first_name LIKE 'a%a';
WHERE SUBSTRING(first_name FROM 3 FOR 1) = 'a';
where id = 1 AND id = 3
*/

/*Ex 4
Select * from students
where birth_date = DATE '2000-01-01' OR birth_date > DATE '2000-01-01'
*/





