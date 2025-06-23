# 📚 Library Management System API

A backend RESTful API for managing books and borrow operations in a library. Built with **Express.js**, **TypeScript**, and **MongoDB** using **Mongoose**.

---

## 🚀 Features

- ✅ Book CRUD operations
- ✅ Borrow book functionality with availability logic
- ✅ Borrow summary using MongoDB aggregation
- ✅ Filtering, sorting, and pagination
- ✅ Schema validation with Mongoose
- ✅ Static/instance method usage
- ✅ Mongoose middleware
- ✅ Consistent error handling

---

## 📦 Tech Stack

- **Backend Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (via Mongoose)
- **Validation**: Mongoose schema validation

---

## 📁 Project Structure

src/
├── app.ts # Express app setup
├── server.ts # App entry point
├── modules/
│ ├── book/ # Book feature (CRUD + filter/sort)
│ │ ├── book.model.ts
│ │ ├── book.interface.ts
│ │ ├── book.controller.ts
│ │ └── book.routes.ts
│
│ ├── borrow/ # Borrowing logic (business rules + aggregation)
│ │ ├── borrow.model.ts
│ │ ├── borrow.interface.ts
│ │ ├── borrow.controller.ts
│ │ └── borrow.routes.ts
│
│ ├── user/ # User management (optional feature)
│ │ ├── user.model.ts
│ │ ├── user.interface.ts
│ │ ├── user.controller.ts
│ │ └── user.routes.ts
│
└── ...


---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/library-management-api.git
   cd library-management-api
Install dependencies

npm install
Create a .env file

PORT=5000
MONGODB_URI=mongodb://localhost:27017/library-db
Run the server

# Development mode
npm run dev

# Production build
npm run build && npm start
📘 API Endpoints
📚 Books
➕ Create Book

POST /api/books
Request Body

{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5,
  "available": true
}
Response

{
  "success": true,
  "message": "Book created successfully",
  "data": { ... }
}
📖 Get All Books

GET /api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5
Query Parameters

filter: Filter by genre

sortBy: Field to sort (e.g., createdAt)

sort: asc or desc

limit: Number of results (default: 10)

Response

{
  "success": true,
  "message": "Books retrieved successfully",
  "data": [ ... ]
}
🔍 Get Book by ID

GET /api/books/:bookId
Response

{
  "success": true,
  "message": "Book retrieved successfully",
  "data": { ... }
}
✏️ Update Book

PUT /api/books/:bookId
Request Body

{
  "copies": 50
}
Response

{
  "success": true,
  "message": "Book updated successfully",
  "data": { ... }
}
❌ Delete Book

DELETE /api/books/:bookId
Response

{
  "success": true,
  "message": "Book deleted successfully",
  "data": null
}
📦 Borrow
✅ Borrow a Book

POST /api/borrow
Business Logic

Checks if book has enough copies

Deducts quantity from copies

Updates available to false if copies become 0

Request Body

{
  "book": "BOOK_ID",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}
Response


{
  "success": true,
  "message": "Book borrowed successfully",
  "data": { ... }
}
📊 Borrow Summary (Aggregation)


GET /api/borrow
Response

{
  "success": true,
  "message": "Borrowed books summary retrieved successfully",
  "data": [
    {
      "book": {
        "title": "The Theory of Everything",
        "isbn": "9780553380163"
      },
      "totalQuantity": 5
    },
    {
      "book": {
        "title": "1984",
        "isbn": "9780451524935"
      },
      "totalQuantity": 3
    }
  ]
}
❗ Error Response Format
json
Copy
Edit
{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    "errors": {
      "copies": {
        "message": "Copies must be a positive number",
        "name": "ValidatorError",
        "kind": "min",
        "path": "copies",
        "value": -5
      }
    }
  }
}
✅ Project Completion Checklist
 Express + TypeScript setup

 MongoDB + Mongoose integration

 Book model with validation

 Borrow logic with business rules

 Aggregation summary

 Static methods / Middleware

 Query filtering and sorting

 Matching response formats

 Error structure conforms to spec