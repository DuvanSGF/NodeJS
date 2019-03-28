# Node JS		

(Part One) - Intro

Version : 0.0.1(20190301)	

Author : 

Ing. Duván Albeiro Mejia Cortes ([software.bugs.io@gmail.com](mailto:software.bugs.io@gmail.com))

Objective: 

In this short course(tutorial) we are going to build a NodeJS  web application that uses  JavaScript and MongoDB.

**Note: This is the first part of the tutorial.**

Software Requirements:

Bellow there is the list of the required Software to build and run JavaScript Web Application.

Programming languages:

- JavaScript
- NodeJS v11.10.1

Integrated Development Environment (IDE):

- Visual Studio code ([Version 1.31](https://code.visualstudio.com/updates))

Web Application Server:

- Express

Databases:

- MongoDB(NoSQL)


-----------------------------------------------------------------------------------------------------------------------


 # Crud NodeJS With MongoDB
(Part two - Crud NodeJS with Mongo DB)

Versión : 0.1.1(20190303)

Author :

Ing. Duván Albeiro Mejia Cortes ([software.bugs.io@gmail.com](mailto:software.bugs.io@gmail.com))

Objective:

In this short course (tutorial) we are going to build a  Crud NodeJS  web application with one  NoSQL (MongoDB). To access the database we will use JavaScript programming language. Also we will build a server uses NodeJS. 

**Note: This is the Second part of the tutorial.**

  

#### ***Download the folder***

Download the [crud-nodejs-mongodb](https://github.com/DuvanSGF/NodeJS/tree/master/crud-nodejs-mongodb) folder: 

Clone this repository 

```
git clone https://github.com/DuvanSGF/NodeJS.git
```

 Or download the zip file and unpack it:

```
https://github.com/DuvanSGF/NodeJS/archive/master.zip/
```

unzip master.zip



## 1. Database

#### 1.1NoSQL database

##### Run the MongoDB server

To  create a database in MongoDB, use the mongod.exe  command in a terminal to start (run) the server

 <img src="https://pbs.twimg.com/media/D1e_H7AX0AAWh6r.png" width="600" large="400">


This  terminal windows must be kept open. if you close this console, you kill the MongoDB server process (stops the server).

##### Run the MongoDB client

To run the MongoDB client, open a new terminal windows and execute the mongo.exe command.

 <img src="https://pbs.twimg.com/media/D1e_H7SXQAAFdtB.png" width="600" large="400">



NodeJS web application will create the database and the collection. 







## 2. Express Test Project

Inside crud-nodejs-mongo-db folder you must open the terminal and run the following command into the terminal.
```
$ npm init --yes
```

#### 2.1 Required Software - Libraries

Then:

 <img src="https://pbs.twimg.com/media/D1e6fTBWoAEc6xm.png" width="600" large="400">




##### 2.1.2 Express 

**Express.js**, or simply **Express**, is a [web application framework](https://en.wikipedia.org/wiki/Web_application_framework) for [Node.js](https://en.wikipedia.org/wiki/Node.js), released as [free and open-source software](https://en.wikipedia.org/wiki/Free_and_open-source_software) under the [MIT License](https://en.wikipedia.org/wiki/MIT_License). It is designed for building [web applications](https://en.wikipedia.org/wiki/Web_application) and [APIs](https://en.wikipedia.org/wiki/API).[[3\]](https://en.wikipedia.org/wiki/Express.js#cite_note-ExpressJS-3) It has been called the de facto standard server framework for Node.js.[[4\]](https://en.wikipedia.org/wiki/Express.js#cite_note-4)

```
$ npm install express
```



##### 2.1.3 Mongoose

**Mongoose** is an object data modeling (ODM) library that provides a rigorous modeling environment for your data, enforcing structure as needed while still maintaining the flexibility that makes MongoDB powerful.

```
$ npm install mongoose
```



##### 2.1.4  Ejs

**EJS** is a simple templating language that lets you generate HTML markup with plain JavaScript.

```
$ npm install ejs
```



##### 2.1.5 Morgan

HTTP request logger middleware for node.js.

```
$ npm install morgan
```





##### 2.1.6 Nodemon 

**Nodemon** is a utility that will monitor for any changes in your source and automatically restart your server. 
Perfect for development. Install it using npm. Just use **nodemon** instead of node to run your code, and now your process will automatically restart when your code changes.

```
$ npm i nodemon -D
```



##  3. Run the Express Server

Before you need to do the step One .

To run the Express server you need to execute the following command in a terminal.

```
$ npm run dev
```

 <img src="https://pbs.twimg.com/media/D1e6fVPX0AAJaNj.png" width="600" large="400">



To test the Express server open the web service URL in a browser:

http://127.0.0.1:3000/

or 

http://localhost:3000/

 <img src="https://pbs.twimg.com/media/D1e6fTXXgAAa3FR.png" width="600" large="400">

###### MongoDB database access test : See the terminal
 <img src="https://pbs.twimg.com/media/D1e6fSoWkAAJZF0.png" width="600" large="400">



## license

MIT, as the original project. See [MIT License](https://github.com/DuvanSGF/NodeJS/blob/master/LICENSE.TXT).

[![Creative Commons License](https://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/3.0/)
