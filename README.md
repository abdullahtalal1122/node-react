# JWT Authentication and Authorization with Node.js, MongoDB, and React

## Project Overview

This project demonstrates the implementation of user authentication and authorization using JSON Web Tokens (JWT) in a Node.js environment. The application is built on a stack that includes Node.js, Express, MongoDB for database management, and React for the front-end interface.

### Purpose

The purpose of this project is to showcase a secure user authentication and authorization mechanism. It highlights how to create a safe and seamless user experience by allowing users to register, log in, and access protected routes using JWT-based authentication.

### Key Features

- **User Registration and Login**: Users can create accounts and log in securely using their credentials. Passwords are hashed and stored in the database to ensure data security.

- **JWT Authentication**: The application utilizes JSON Web Tokens to authenticate users. Upon successful login, a JWT is generated and provided to the client. This token is then used to authorize the user's access to protected routes.

- **Access Control**: Certain routes are restricted to authenticated users only. Unauthorized access will not reveal the secrets present in the Home route.

- **Protected Home Page**: After logging in, users gain access to a protected home page. This showcases how authorization works in conjunction with React to provide a personalized experience.

### Technologies Used

- Node.js and Express for the backend server.
- MongoDB for database management and user data storage.
- React for building the front-end interface.
- JSON Web Tokens (JWT) for secure authentication.
- bcrypt for hashing and salting passwords.
- FetchAPI for making API requests from the React front end to the Node.js backend.

## Prerequisites

Before setting up the project, make sure you have the following installed:

- Node.js (18.13.0)
- MongoDB 
- npm (Node Package Manager)

## Installation

Follow these steps to set up the project locally:

1. Clone this repository: `git clone https://github.com/abdullahtalal1122/node-react`
2. Navigate to the project directory: `cd node or cd react/fronted/myproject`
3. Install backend dependencies: `cd node && npm install`
4. Install frontend dependencies: `cd react/fronted/myproject && npm install`

## Usage

To run the application:

1. Start the backend server: In the `node` directory, run `nodemon app.js`.
2. Start the frontend development server: In the `myproject` directory, run `npm start`.
3. Access the application in your browser: Open `http://localhost:3000` to interact with the app.

Follow the provided registration and login functionality to explore the authentication and authorization process. Once logged in, you'll have access to the protected home page.

## API Endpoints

| Endpoint           | Method | Description             |
|--------------------|--------|-------------------------|
| `/api/signup`      | POST   | User registration      |
| `/api/login`       | POST   | User login             |
| `/api/home`        | GET    | Access protected route |

