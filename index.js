const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("From node API Server");
});

// To view the products
// app.get('/api/products', async(req, res)=>{
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// To add the products
// app.post('/api/products', async(req, res)=>{
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// To get the specific product
// app.get('/api/products/:id', async(req, res)=>{
//     try {
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// To update the product
// app.put('/api/products/:id', async(req, res)=>{
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);

//         if(!product){
//             return res.status(404).json({message: "Product not found"});
//         }

//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);

//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// To delete a product
// app.delete('/api/product/:id', async(req, res)=>{
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);

//         if(!product){
//             res.status(404).json({message: "Product not found"});
//         }

//         res.status(200).json({message: "Product deleted successfully"});

//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// here Node-API is a collection
mongoose
  .connect(
    "mongodb+srv://vanamuthu:MongoDB@backenddb.jpwqv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to DB");
    app.listen(3000, () => {
      console.log("Server running on port");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
