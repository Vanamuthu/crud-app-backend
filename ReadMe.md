# 🛒 CRUD App Backend (Node.js + Express + MongoDB)

## 📌 Overview

This is a backend REST API for a simple CRUD application built using Node.js, Express, and MongoDB. It allows users to perform Create, Read, Update, and Delete operations on products.

The project follows a clean MVC structure with separate layers for routes, controllers, and models.

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* REST API

---

## 📁 Project Structure

```
crud-app-backend/
│── controllers/
│   └── product.controller.js
│
│── models/
│   └── product.model.js
│
│── routes/
│   └── product.route.js
│
│── index.js
│── package.json
│── package-lock.json
│── .gitignore
│── ReadMe.txt
```

---

## 🚀 Features

* Create a new product
* Get all products
* Get a product by ID
* Update product details
* Delete a product
* Error handling for invalid requests

---

## 📦 API Endpoints

### 🔹 Get All Products

```
GET /api/products
```

### 🔹 Get Single Product

```
GET /api/products/:id
```

### 🔹 Create Product

```
POST /api/products
```

### 🔹 Update Product

```
PUT /api/products/:id
```

### 🔹 Delete Product

```
DELETE /api/products/:id
```

---

## 🧾 Sample Request Body (POST/PUT)

```json
{
  "name": "iPhone 15",
  "quantity": 10,
  "price": 999,
  "image": "image-url"
}
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Vanamuthu/crud-app-backend.git
cd crud-app-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup MongoDB

Make sure MongoDB is running locally or use MongoDB Atlas.
Update your connection string in `index.js`.

---

### 4. Run the server

```bash
npm run dev
```

or

```bash
node index.js
```

---

## 🔗 Base URL

```
http://localhost:3000/api/products
```

---

## ⚠️ Error Handling

* Returns `404` if product is not found
* Returns `500` for server errors
* Proper JSON error messages included

---

## 💡 Key Learnings

* Building REST APIs using Express
* Structuring backend using MVC pattern
* MongoDB CRUD operations with Mongoose
* Handling async operations with try/catch
* Writing clean and maintainable backend code

---

## 🚀 Future Improvements

* Add input validation (Joi / express-validator)
* Add authentication (JWT)
* Add pagination & filtering
* Improve error handling middleware
* Add API documentation (Swagger)

---

## 👨‍💻 Author

**Vanamuthu Kamaraj**

* GitHub: https://github.com/Vanamuthu

---

## ⭐ Support

If you found this project useful, give it a ⭐ on GitHub!
