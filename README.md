Insta-FS
Backend application built with Node.js, Express 5, and MongoDB using Mongoose.
Tech Stack
- Node.js
- Express.js
- MongoDB and Mongoose
- JSON Web Tokens (JWT)
- bcrypt for password hashing
- cookie-parser for cookie handling
- Multer for handling file uploads
- ImageKit for media storage
- dotenv for environment configuration
Getting Started
1. Clone the repository
git clone <https://github.com/AbhishekR49/Instagram.git>
cd insta-fs
2. Install dependencies
npm install
3. Configure environment variables
Create a .env file in the project root:
PORT=3000

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# JWT secrets
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

# ImageKit
IK_URL=your_imagekit_url
IK_PUBLIC_KEY=your_imagekit_public_key
IK_PRIVATE_KEY=your_imagekit_private_key
Use your own credentials. Do not commit .env or expose secret keys in source code.
Make sure the variable names match the ones read by your application. The MongoDB and ImageKit variable names above should be checked against your configuration files.

4. Run the server
npm start
The server uses PORT from the environment, and falls back to port 4000 if it is not set.
Available Scripts
Command	Description
npm start	Starts the backend server


Project Entry Point
The application starts from server.js. It loads environment variables, imports the Express application, connects to MongoDB, and starts the HTTP server.
Security Notes
- Keep .env out of Git.
- Use strong, unique JWT secrets.
- Never publish database credentials or private API keys.
- Configure production environment variables through your hosting provider.
License
This project currently uses the ISC license, as specified in package.json.