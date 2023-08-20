# Real-Chat

-> A Realtime Messaging Application

A simple realtime chat application made using **React**, **Node.js**, **Express.js** and **MongoDB**

 To install all the dependencies, `npm` is used.

The backend is implemented using **Node.js**, **Express.js** and **MongoDB**. **Atlas**, the _Cloud_ version of **MongoDB** is used. Real-time communication is done using **Socket.io**.



### Few Screenshots

![Homepage](/screenshots/1.png "Homepage")
![Chatpage](/screenshots/2.png "Chatpage")
![Groupchat](/screenshots/3.png "Groupchat")

## Features

- All the user details, group chats and conversations are stored in the **MongoDB Atlas**
<ul>
 <li>Login/Signup, as well as the Logout feature, is present. </li>
 <li>Error will be shown if the credentials are not correct</li>
</ul>

- Real time communication & notification is supported using <a href="https://www.npmjs.com/package/socket.io">Socket.io</a>

<ul>
 <li> Realtime One on One and group chats </li>
 <li> Functionality like Searching for chats, creating a group, adding or removing participants. </li>   
 <li> typing... animation. </li>
 <li> Online / Offline statuses are shown. </li>
 <li> Read / Unread status of conversation is shown.
 <li> All the conversations are stored in the database 
</ul>


### Tech Stack

MongoDB, Express, React, Node, Socket.IO


### Env Variables

Create a .env file in the root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = <yourMongoDbUri>
JWT_SECRET = <yourSecret>
```

### Install Dependencies (frontend & backend)
-Use the below command to install dependencies in both frontend & backend folders.
```
npm install
```

### Run
Run frontend (:3000) & backend (:5000)
```
# Run frontend only
npm start 

# Run backend only
npm start
```



