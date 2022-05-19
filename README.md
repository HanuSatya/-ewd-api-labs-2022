# -ewd-api-labs-2022
ewd-labs-repo
# Assignment 2 - Web API

Name: Hanuma Satya Sunnam

## Overview

Give a brief overview of the Web API functionality.

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 


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

## API Design

[SwaggerHub Doc]()

## Security and Authentication

...Give details of any authentication/ security implemented on the API. Indicate which routes are protected.

email & password authentication implemented with authorization token.

| PATH                          | GET                       | POST                          | PUT  | DELETE |
| ----------------------------- | ------------------------- | ----------------------------- | ---- | ------ |
| /api/movies                   | Gets a list of movies     | Add A Movie                   | N/A  | N/A    |
| /api/movies/{movieid}         | Get a Movie               | N/A                           | N/A  | N/A    |
| /api/movies/{movieid}/reviews | N/A                       | N/A                           | N/A  | N/A    |
| ...                           | ...                       | ...                           | ...  | ...    |

### Design

.. Give details of the database you used and the Collections. Highlight any extra work you did, for example new Mongo Collections/Entities/Services/Controllers and routers or any changes/additions to existing components.


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

## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  


