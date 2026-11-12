# Insta-FS

Insta-FS is a social media backend API built with Node.js, Express, MongoDB, and Mongoose. It supports user authentication, profile management, media uploads, and post creation workflows for a simple Instagram-like experience.

## Features

- User registration and login
- JWT-based authentication with secure cookie handling
- User profile retrieval
- Post creation and update support
- Image upload handling with Multer
- Media storage integration with ImageKit
- MongoDB data modeling with Mongoose

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (JSON Web Tokens)
- bcrypt for password hashing
- cookie-parser
- Multer for file uploads
- ImageKit for image hosting
- dotenv for environment configuration

## Project Structure

```bash
insta-fs/
├── server.js
├── package.json
├── README.md
├── src/
│   ├── app.js
│   ├── config/
│   │   ├── db.js
│   │   ├── imageKit.js
│   │   └── multer.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── post.controller.js
│   │   └── user.controller.js
│   ├── middlewares/
│   │   └── auth.middleware.js
│   ├── models/
│   │   ├── comments.model.js
│   │   ├── post.model.js
│   │   ├── story.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── auth.route.js
│   │   ├── post.route.js
│   │   └── user.route.js
│   ├── utils/
│   │   └── token.js
│   └── app.js
└── .env
```

## Prerequisites

Before running this project, make sure you have:

- Node.js v18 or higher
- MongoDB running locally or a MongoDB Atlas connection string
- An ImageKit account and API credentials

## Installation

1. Clone the repository

```bash
git clone <repository-url>
cd insta-fs
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the project root

```env
PORT=3000

# MongoDB
MONGODB_URI=mongodb://127.0.0.1:27017/insta-fs

# JWT Secrets
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

# ImageKit
IK_URL=https://ik.imagekit.io/your_instance_id
IK_PUBLIC_KEY=your_public_key
IK_PRIVATE_KEY=your_private_key
```

> Keep your `.env` file secure and never commit it to version control.

## Running the Application

Start the server with:

```bash
npm start
```

The app will run on the port specified in `PORT`, or default to `4000` if no environment variable is set.

## API Endpoints

### Authentication

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Log in a user
- `POST /api/auth/logout` — Log out the authenticated user
- `GET /api/auth/me` — Get the current authenticated user

### Users

- `GET /api/users/profile` — Fetch the authenticated user's profile

### Posts

- `POST /api/posts/create` — Create a new post with uploaded media
- `PATCH /api/posts/update/:postId` — Update an existing post

## Authentication Flow

This backend uses JWT access tokens stored in HTTP-only cookies for authenticated requests. The middleware validates the token and attaches the user to the request before allowing access to protected routes.

## Environment Variables

| Variable | Description |
| --- | --- |
| `PORT` | Port used by the Express server |
| `MONGODB_URI` | MongoDB connection string |
| `ACCESS_TOKEN_SECRET` | Secret key for access token signing |
| `REFRESH_TOKEN_SECRET` | Secret key for refresh token signing |
| `IK_URL` | ImageKit URL endpoint |
| `IK_PUBLIC_KEY` | ImageKit public key |
| `IK_PRIVATE_KEY` | ImageKit private key |

## Notes

- Ensure MongoDB is running before starting the server.
- Use strong, unique JWT secrets in production.
- Image uploads are stored through ImageKit and should be configured correctly before using the post routes.

## License

This project is licensed under the ISC License.
