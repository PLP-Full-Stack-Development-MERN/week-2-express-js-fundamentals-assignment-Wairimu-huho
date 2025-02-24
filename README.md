# Express.js REST API Project

A simple REST API built with Express.js for managing users and products.

## Project Setup

### Prerequisites
- Node.js installed on your system
- npm (Node Package Manager)

### Installation

1. Clone the repository or download the project files
```bash
git clone <repository-url>
```

2. Navigate to the project directory
```bash
cd <project-directory>
```

3. Initialize a new Node.js project
```bash
npm init -y
```

4. Install Express.js
```bash
npm install express
```

5. Install nodemon for development (automatically restarts the server when files change)
```bash
npm install nodemon --save-dev
```

6. Edit the `package.json` file to include start script:
```json
"scripts": {
  "start": "nodemon app.js"
}
```

### Project Structure
```
project-folder/
├── controllers/
│   ├── userController.js
│   └── productController.js
├── middleware/
│   └── logger.js
├── routes/
│   ├── userRoutes.js
│   └── productRoutes.js
├── app.js
├── package.json
└── README.md
```

## Running the Application

Start the server with:
```bash
npm start
```

The API will be available at: `http://localhost:5000`

## API Endpoints

### User Endpoints

#### GET `/api/users`
- Description: Get all users
- Example Request:
```bash
curl http://localhost:5000/api/users
```

#### GET `/api/users/:id`
- Description: Get a specific user by ID
- Example Request:
```bash
curl http://localhost:5000/api/users/1
```

#### POST `/api/users`
- Description: Create a new user
- Example Request:
```bash
curl -X POST http://localhost:5000/api/users \
-H "Content-Type: application/json" \
-d '{"name": "Alice Johnson", "email": "alice@example.com", "role": "user"}'
```

#### PUT `/api/users/:id`
- Description: Update an existing user
- Example Request:
```bash
curl -X PUT http://localhost:5000/api/users/1 \
-H "Content-Type: application/json" \
-d '{"name": "John Doe Updated", "email": "john.updated@example.com"}'
```

#### DELETE `/api/users/:id`
- Description: Delete a user
- Example Request:
```bash
curl -X DELETE http://localhost:5000/api/users/3
```

### Product Endpoints

#### GET `/api/products`
- Description: Get all products
- Example Request:
```bash
curl http://localhost:5000/api/products
```

#### GET `/api/products/:id`
- Description: Get a specific product by ID
- Example Request:
```bash
curl http://localhost:5000/api/products/2
```

#### GET `/api/products/category/:category`
- Description: Get products by category
- Example Request:
```bash
curl http://localhost:5000/api/products/category/electronics
```

#### POST `/api/products`
- Description: Create a new product
- Example Request:
```bash
curl -X POST http://localhost:5000/api/products \
-H "Content-Type: application/json" \
-d '{"name": "Smart TV", "price": 599.99, "category": "Electronics", "stock": 5}'
```

#### PUT `/api/products/:id`
- Description: Update an existing product
- Example Request:
```bash
curl -X PUT http://localhost:5000/api/products/1 \
-H "Content-Type: application/json" \
-d '{"price": 899.99, "stock": 10}'
```

#### DELETE `/api/products/:id`
- Description: Delete a product
- Example Request:
```bash
curl -X DELETE http://localhost:5000/api/products/3
```

## Features

1. **RESTful API Design**: Follows REST principles with appropriate HTTP methods
2. **MVC Architecture**: Separation of concerns with Models (data), Views (not applicable), and Controllers (logic)
3. **Middleware**: Custom logger middleware to track API requests
4. **In-Memory Data Storage**: Uses arrays to store data (can be replaced with a database later)
5. **Error Handling**: Appropriate status codes and error messages

## Next Steps

- Add input validation
- Implement authentication and authorization
- Connect to a real database (MongoDB, PostgreSQL, etc.)
- Add unit and integration tests