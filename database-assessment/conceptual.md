### Conceptual Exercise

Answer the following questions below:

- What is PostgreSQL?

    PostgreSQL is an open source  relational databse management system (RDBMS). Other examples of such as Oracle, MYSQL, etc.

- What is the difference between SQL and PostgreSQL?

    The difference between SQL and PostgreSQL is that SQL is a structured query language, a human-readable language for querying; whereas PostgreSQL provides different functions of the SQL language such as foreign keys, triggers, subquieries and others.

- In `psql`, how do you connect to a database?

    \c database_name - is the method to connect to an already created DB

- What is the difference between `HAVING` and `WHERE`?

    "WHERE" is used to filter which rows get included in your query based on a specific condition, and "HAVING" decides which groups, if grouped, to keep in that query based on your specified condition.

- What is the difference between an `INNER` and `OUTER` join?

    "INNER" is the parameter that returns what the two tables have in common and "OUTER" can have different types, from left, right and full. These return the rows from the specified first table (left or right) combined with matching from the second (left or right). There is also a full join, which joins the entirety of the two tables into one.

- What is the difference between a `LEFT OUTER` and `RIGHT OUTER` join?

    "LEFT OUTER" is a join from the table that is positioned on the left (specified) that combines with matching results from the table on the right (the remaining table that is not specified). "RIGHT OUTER" it the direct inverse of the "LEFT OUTER" join, where the table on the right is joined with matching results from the table on the left.

- What is an ORM? What do they do?

    An ORM is object-relational mapping. This allows the developer to use the language of the code they are using to do the same work that SQL does, but you can incorporate it into your coding task. 

- What are some differences between making HTTP requests using AJAX 
  and from the server side using a library like `requests`?

    Making an HTTP request using AJAX doesn't reload the page and makes the request with the information on the page still loaded. Based on what you are requesting it can load in the requested information while still having the initial content loaded in. Whereas, with an HTTP request via the server side, it clears the current content and loads whatever the server response is.

- What is CSRF? What is the purpose of the CSRF token?

    CSRF stands for "cross-site request forgery", which is the idea that any side can submit to any other site. For example, you can have hidden submissions that happen when you hit the submit button on a web page. CSRF tokens prevent these scams from happening by matching the submits CSRF token to the one that it is expecting when submitted.

- What is the purpose of `form.hidden_tag()`?

    this line of code creates a hidden field that holds the CSRF token that prevents CSRF attacks. 
