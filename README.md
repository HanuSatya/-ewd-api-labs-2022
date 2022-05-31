# -ewd-api-labs-2022
ewd-labs-repo
# Assignment 2 - Web API

Name: Hanuma Satya Sunnam

## Overview

**Give a brief overview of the Web API functionality.**

In this Web API I have created Private routes for UpComing page and Favourities page. And Added API Routes as Get and Post for the account, FantasyMovie as well parameterised URL's for both the routes. Performed integration with MongoDB.


## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Firstly, the IDE, Node, NPM, MongoDB and some other softwares like postman for performing the tests.


Describe getting/installing the software, perhaps:

```bat
git clone http:\myrepo.git
```

followed by installation

```bat
git install
```

## API Configuration

Before launching the API, describe any setup that has to be made. Create a file called "env" and fill it with the variables you'll need. Show how something may be put together/done.

NOTE: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE READ.ME., Just placeholders as indicated below:

```bat
NODE_ENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
secret=YourJWTSecret
```

## Start-up
Describe how to start/stop the API. You could go though the ``scripts:`` property of the *package.json* file.

Start with the npm start in the terminal so that the API code will start and run through the scripts and json files. Can perform the tests by using npm run test so that the test will run through the endpoints and gives the results.

## API Design

[Postman](![Postman](https://user-images.githubusercontent.com/91950953/171143688-bfa8a75e-f8d6-40a2-a241-c13b144f0acd.PNG))

## Security and Authentication

...Give details of any authentication/ security implemented on the API. Indicate which routes are protected.

email & password authentication implemented with authorization token.

| PATH                          | GET                       | POST                          | PUT  | DELETE |
| ----------------------------- | ------------------------- | ----------------------------- | ---- | ------ |
| /api/movies                   | Gets a list of movies     | Add A Movie                   | N/A  | N/A    |
| /api/movies/{movieid}         | Get a Movie               | N/A                           | N/A  | N/A    |
| /api/movies/{movieid}/reviews | Get Revies                | N/A                           | N/A  | N/A    |
| /api/signup                   | N/A                       | Add User's Info               | N/A  | N/A    |
| /api/login                    | Get a user                | N/A                           | N/A  | N/A    |
| /api/fantasyMoviePage         | Get a FantasyMovie        | Add a Fantasy Movie           | N/A  | N/A    |
| /api/movies/upcoming          | Get a Upcoming Movie      | N/A                           | N/A  | N/A    |
| /api/movies/favourites        | Get a Favourite Movie     | N/A                           | N/A  | N/A    |
| /api/movies/toprated          | Get a Top Rated Movie     | N/A                           | N/A  | N/A    |
| /api/tv                       | Get a TV                  | N/A                           | N/A  | N/A    |


### Design

.. **Give details of the database you used and the Collections.** Highlight any extra work you did, for example new Mongo Collections/Entities/Services/Controllers and routers or any changes/additions to existing components.

I have used the MongoDB database to store the details of accounts and Fantasy Movie 

[accounts](![db_accounts](https://user-images.githubusercontent.com/91950953/171151050-b18fde46-c879-49f6-92a3-6b55f991b941.PNG))

[fantasymovie](![db_fantasymovie](https://user-images.githubusercontent.com/91950953/171151191-10a74870-44d7-44ba-9db1-53281eaceb55.PNG))



## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

~~~

## Extra features

. . Briefly explain any non-standard features, functional or non-functional (e.g. user registration, authentication) developed for the app  

I have added the Custom validation schema using Joi.

For the Upcoming and Favourities page the basic Authentication and protected routes are added.

For Logging I have used a Thrid party imports for Request and response we can see the logs in the terminal.
[Logs](![Logs](https://user-images.githubusercontent.com/91950953/171154282-37d6c688-d9d6-48c3-b1b4-ee2c8f1372d9.PNG))

Testing is done with the newman approach and created a report.
[API Tests](![Newman Dashboard](https://user-images.githubusercontent.com/91950953/171154684-3b303657-622f-4d58-8def-896bd50c7eb8.PNG))

## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  


