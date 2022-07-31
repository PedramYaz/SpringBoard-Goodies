### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?

        RESTful routing is being able to use additional HTTP verbs to GET, POST, PUT, DELETE & PATCH.

- What is a resource?

        A resource is an object with a type, associated data, relationships to other resources, a set of methods that operate on it.

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?

- What does idempotent mean? Which HTTP verbs are idempotent?

        idempotent is an operation can be performed many times with the result of all calls being the same as if it was done once. The HTTP verbs that are idempotent are GET, PUT/PATCH & DELETE

- What is the difference between PUT and PATCH?

        PUT allows you to update the entire resource and PATCH allows you to update part of a resource (PATCH it up)

- What is one way encryption?

        one way encrption is an encryption that can only go one way and cannot be reversed.

- What is the purpose of a `salt` when hashing a password?

        the purpose of 'salt' when hashing a password is to attempt to encrypt a password so it is much harder/near impossible to hack and find out. It adds a random string of characters before hashing occurs

- What is the purpose of the Bcrypt module?

        the Bcyrpt module is used to create encryption on a password by running it through an algorithm that makes the password unable to find out.

- What is the difference between authorization and authentication?

        Authorization is allowing certain users to do certain tasks. For example, allowing all the moderators to have access to deleting posts that are innapropriate. Authentication is validating that the user exists and the password is correct to allow the user to login.
