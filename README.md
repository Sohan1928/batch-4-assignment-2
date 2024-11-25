# Stationery Shop B4A2V5

This is a simple API project for managing products and orders in a stationery shop. Built using **Node.js**, **Express**, **TypeScript**, and **MongoDB**.

## Features

- **Product Management**

  - Create, read, update, and delete products.
  - Fetch all products or a specific product by ID.

- **Order Management**
  - Place orders and calculate total revenue.
  - Fetch all orders.

# API Documentation

## Products Endpoints

- **GET /api/products**  
  Fetch all products.

- **POST /api/products**  
  Add a new product.

- **PUT /api/products/:id**  
  Update a product by ID.

- **GET /api/products/:id**  
  Fetch a product by ID.

- **DELETE /api/products/:id**  
  Delete a product by ID.

---

## Orders Endpoints

- **GET /api/orders**  
  Fetch all orders.

- **POST /api/orders**  
  Place a new order.

- **GET /api/revenue**  
  Calculate total revenue.

---

## Technologies Used

### Backend

- Node.js
- Express
- TypeScript

### Database

- MongoDB
- Mongoose

### Utilities

- dotenv
- body-parser
- cors

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
