// How Web Works Exercise
// Part 1: Solidify Terminology

// 1. What is HTTP?
// HTTP stands for 'hypertext transfer protocol' which allows for the broswer and the server to communicate with each other.

// 2. What is a URL?
// A URL is a 'universal resource locater' which consists of a few things. Each portion of the URL is used to signify a different task to be requested. It contains the protocol, hostname, port, resource and the query (if there is any)

// 3. What is DNS?
// DNS stands for 'domain name system'. It takes the hostname/URL and converts it into an IP address which than leads you to the page you are requesting.

// 4. What is a query string?
// A query string is the part of the URL that is shown when you are searching the toolbar/search bar for something on a website.

// 5. What are two HTTP verbs and how are they different?
// Two HTTP verbs are GET and POST. GET is used when you are simply requesting a page to load, and there is nothing that is being altered in the page. You are allowed to search in the query string, click links and very basic things. POST is used when altering the current page you are on and are sending arguments as the body of the request; adding comments, posting to your feed, etc..

// 6. What is an HTTP request?
// an HTTP request is a multitude of things that occur when you type in a URL and hit 'enter'. It is a GET method, that sends the request of the URL and all the information on that link to a server, which than does its own thing and sends you the data.

// 7. What is an HTTP response?
// an HTTP response is a response to an HTTP request that you perform. There is a sepcific status code that is returned that informs the user whether or not the information requested has been returned, moved, not found, etc. It than contains all the information that is in the URL, alongside cookies, caching information, etc.

// 8. What is an HTTP header? Give a couple examples of request and response headers you have seen.
// an HTTP header is the code that transfers data between the server and the user. The header and the value are seperated by a colon. It contains all the information about the webpage that is responded to the request. Some examples are: 'Accept-Language: en-us, en;q=0.5' or 'Date: Fri, 15 Apr 2022 02:36:23 GMT'

// 9. What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
// The 'somesite.com' is converted into an IP address via DNS, the request for that IP address is sent to a server, the server does what it does and compiles all the files/tools needed to showcase that web page. It packages it all together, and sends a response to the requesting PC. You connect to that IP address through a specific port, using the HTTP protocol, you ask for some/page.html for the specific location of that 'sometime.com' you want to be linked to.
