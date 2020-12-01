# URL Shortener API

This is a URL Shortener API made by using NodeJS & ExpressJS

## Getting Started

git clone

### Prerequisites

To run this project locally, you'll need to comment out the config import statement in app.js and add a config.js file in the root directory which must have the following code

```
process.env.PORT = <port number>;
process.env.DB_URL = <your local mongodb url>
```

### Installing

A step by step series of examples that tell you how to get a development env running

To install the project dependencies

```
npm install
```

To run the project on your local machine

```
npm start
```

## Deployment

Just add an Node Enviroment Variable for DB_URL on the server which points to your remote MongoDB URL

## Built With

-   [NodeJS](https://nodejs.org/) - The JavaScript runtime used
-   [ExpressJS](https://expressjs.com/) - The web framework used
