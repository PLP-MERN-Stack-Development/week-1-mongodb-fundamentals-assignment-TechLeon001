// MongoDB Queries for PLP Bookstore Assignment

// Task 2: Basic CRUD Operations

// Find all books in a specific genre
db.books.find({ genre: "Fiction" });

// Find books published after a certain year
db.books.find({ published_year: { $gt: 1950 } });

// Find books by a specific author
db.books.find({ author: "George Orwell" });

// Update the price of a specific book
db.books.updateOne(
  { title: "To Kill a Mockingbird" },
  { $set: { price: 14.99 } }
);

// Delete a book by its title
db.books.deleteOne({ title: "The Alchemist" });

// Task 3: Advanced Queries

// Find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

// Use projection to return only title, author, and price
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
);

// Sort books by price (ascending)
db.books.find().sort({ price: 1 });

// Sort books by price (descending)
db.books.find().sort({ price: -1 });

// Implement pagination (5 books per page)
db.books.find()
  .skip(0)  // First page
  .limit(5);

db.books.find()
  .skip(5)  // Second page
  .limit(5);

// Task 4: Aggregation Pipeline

// Calculate average price by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
]);

// Find author with most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { bookCount: -1 }
  },
  {
    $limit: 1
  }
]);

// Group books by publication decade
db.books.aggregate([
  {
    $group: {
      _id: {
        decade: {
          $subtract: [
            "$published_year",
            { $mod: ["$published_year", 10] }
          ]
        }
      },
      count: { $sum: 1 }
    }
  },
  {
    $sort: { "_id.decade": 1 }
  }
]);

// Task 5: Indexing

// Create index on title field
db.books.createIndex({ title: 1 });

// Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// Demonstrate performance improvement with explain()
db.books.find({ title: "To Kill a Mockingbird" }).explain("executionStats");
db.books.find({ author: "George Orwell", published_year: 1949 }).explain("executionStats"); 