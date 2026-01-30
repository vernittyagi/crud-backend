# Node.js Auth API (bcrypt + JWT)

A simple backend authentication system built with Node.js, Express, MongoDB.

## Features
- User registration with bcrypt password hashing
- User login with JWT authentication
- Protected routes using JWT middleware
- Token expiration handling

## Tech Stack
- Node.js
- Express
- MongoDB + Mongoose
- bcrypt
- jsonwebtoken

## Auth Flow
1. User registers → password hashed using bcrypt
2. User logs in → JWT issued with expiry
3. Client sends JWT in Authorization header
4. Protected routes verify JWT

> Note: JWT authentication is stateless. Multiple tokens can remain valid until expiry.

## Setup
```bash
npm install
```
create .env
```bash
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
```
Run server
```bash
npm start
```
## Status
Learning project - will be extended with refresh tokens and frontend
