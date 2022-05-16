### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?

  Python is more about back-end development, where javascript can be used as full-stack development. The syntax is different in both, how the functions look and are set up, how variables are assigned and more. 


- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you can try to get a missing key (like "c") *without* your programming crashing.

    1. You could use .get(key, default) where When you search for the missing key, you can place a value after the key you are requesting to act as a default response if the requested key:value pair is missing.
    2. You can use setdefault(kay, default) where when the user searches for a key that is not present, the key that was searched for is created and the default value that you set if now the associated value for that key.

- What is a unit test?

    A unit Test is a test on each individual unit in your code. Tests the functionality of a single "unit".

- What is an integration test?

    Integration testing is testing how things integrate togther and work as a unit. 

- What is the role of web application framework, like Flask?

    Web application framkeworks, like Flask, are a set of functions, classes, etc. that help define which requests to respond to and how to respond to requests. Essentially handle web requests, produce dynamic HTML, handle forms and function, connect to a database and more.

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?

    When passing in information to Flask through a route URL, you are requesting to go to that specific page. A URL/Page that is set up by the developer to have some content on the page. Whereas with the URL query param, it is used as more of a search tool. When one searches or inputs a word/phrase, the '...?x=...' will come up indicating someone input a value.

- How do you collect data from a URL placeholder parameter using Flask?

    when you are specifying the route, you place the placeholder in brackets. For example: @app.route('/question<id>') and this will take the inputed id into that route (with additional code) and lead you to that route.

- How do you collect data from the query string using Flask?

    from flask you import request, and you request the argument after it is got. For example:

    from flask import request
    @app.route('/')
    def x():
      x = request.args.get('Y')

- How do you collect data from the body of the request using Flask?

    you have to import 'request' from flask, and in your function you put: "variable = request.args['input_name']" and this will obtain the information that was input from the user in the section that has their "name = 'input_name'"

- What is a cookie and what kinds of things are they commonly used for?

    Cookies are a way to temporarily hold the users/page information. The information is stored on the client, mainly the browser.

- What is the session object in Flask?

    a session object is a more in depth cookie that can hold more data, contains information for the current browser and is transferable when the current browsing session is closed and are 'signed' so that the user is unable to modify them.

- What does Flask's `jsonify()` do?

    'jsonify()' takes JSON data and properly returns it to the server/database. If this was not there, the information that was sent in JSON could not be accepted?


