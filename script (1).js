// Create Database
use LibraryDB

// Create Collection
db.createCollection("books")

// Insert Books
db.books.insertMany([
  {
    book_id: 1,
    title: "Python Programming",
    author: "John Smith",
    category: "Programming",
    price: 500,
    available: true
  },
  {
    book_id: 2,
    title: "Database Management",
    author: "Ravi Kumar",
    category: "Education",
    price: 450,
    available: true
  },
  {
    book_id: 3,
    title: "Java Basics",
    author: "Priya Sharma",
    category: "Programming",
    price: 550,
    available: false
  }
])

// Display All Books
db.books.find()

// Find a Book
db.books.find({ title: "Python Programming" })

// Find Available Books
db.books.find({ available: true })

// Update Book Price
db.books.updateOne(
  { book_id: 2 },
  { $set: { price: 500 } }
)

// Issue a Book
db.books.updateOne(
  { book_id: 1 },
  { $set: { available: false } }
)

// Return a Book
db.books.updateOne(
  { book_id: 1 },
  { $set: { available: true } }
)

// Delete a Book
db.books.deleteOne({ book_id: 3 })

// Count Total Books
db.books.countDocuments()

// Sort Books by Price
db.books.find().sort({ price: -1 })

// Average Book Price
db.books.aggregate([
  {
    $group: {
      _id: null,
      averagePrice: { $avg: "$price" }
    }
  }
])