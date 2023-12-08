-- Problem 1
SELECT email FROM customers ORDER BY email;

-- Problem 2
SELECT id FROM orders WHERE customer_id = (SELECT id FROM customers WHERE fname = 'Elizabeth' AND lname = 'Crocker');

-- Problem 3
SELECT SUM(num_cupcakes) FROM orders WHERE processed = 'f';

-- Problem 4
SELECT cupcakes.name, SUM(orders.num_cupcakes) FROM cupcakes LEFT JOIN orders ON (orders.cupcake_id = cupcakes.id) GROUP BY cupcakes.name ORDER BY cupcakes.name;

-- Problem 5
SELECT customers.email, SUM(orders.num_cupcakes) FROM orders JOIN customers ON (customers.id = orders.customer_id) GROUP BY customers.email ORDER BY SUM(orders.num_cupcakes) DESC;

-- Problem 6
SELECT customers.fname, customers.lname, customers.email FROM customers JOIN orders ON (customers.id = orders.customer_id) WHERE orders.cupcake_id = '5' AND orders.processed = 't'; --GROUP BY customers.fname;
-- I CAN'T GROUP HECTOR
