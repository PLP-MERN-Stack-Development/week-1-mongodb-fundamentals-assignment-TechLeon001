[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19668545&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Community Edition or MongoDB Atlas account
- MongoDB Shell (mongosh) or MongoDB Compass

### Local MongoDB Setup
1. Download and install MongoDB Community Edition from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
2. Start MongoDB service:
   - Windows: MongoDB runs as a service automatically
   - macOS/Linux: `sudo systemctl start mongod`

### MongoDB Atlas Setup (Alternative)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier is sufficient)
3. Set up database access (create a user)
4. Set up network access (allow access from anywhere for development)
5. Get your connection string

### Project Setup
1. Clone this repository
2. Install dependencies:
   ```bash
   npm install mongodb
   ```
3. Update the connection string in `insert_books.js` if using MongoDB Atlas
4. Run the database population script:
   ```bash
   node insert_books.js
   ```
5. Use MongoDB Shell or Compass to run queries from `queries.js`

### Running Queries
1. Open MongoDB Shell:
   ```bash
   mongosh
   ```
2. Switch to the database:
   ```bash
   use plp_bookstore
   ```
3. Run queries from `queries.js`

### Using MongoDB Compass
1. Download and install [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Connect to your MongoDB instance:
   - Local: `mongodb://localhost:27017`
   - Atlas: Use your connection string
3. Navigate to `plp_bookstore` database
4. Use the query editor to run queries from `queries.js`

## Project Structure
- `insert_books.js`: Script to populate the database with sample book data
- `queries.js`: Contains all MongoDB queries for the assignment
- `README.md`: This file with setup instructions

## Resources
- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/) 