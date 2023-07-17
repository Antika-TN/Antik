const express = require("express");
const sequelize = require('./db/db.connect');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT||3000
const cors = require("cors");

const User = require('./model/user');
const Client = require('./model/Client');
const Seller = require('./model/Seller');
const Category = require('./model/Category');
const Product = require('./model/Product');
const Order = require('./model/Order');
const OrderItem = require('./model/OderItem');
const Review = require('./model/Review');
const adminRouter = require ('./router/admin')
const authRouter = require('./router/Auth');
const clientRouter = require('./router/clients');
const sellerRouter = require('./router/sellers');
const categoryRouter = require('./router/categories');
const productRouter = require('./router/products');
const orderRouter = require('./router/orders');
const reviewRouter = require('./router/reviews');


app.use(express.json());
app.use(cors());

// app.use(route);
app.use('/admin',adminRouter)
app.use('/auth', authRouter);
app.use('/clients', clientRouter);
app.use('/sellers', sellerRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.use('/reviews', reviewRouter);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return sequelize.sync({ force: false}); // Change this to "true" when You need to drop and change Tables (auto change)
  })//Keep it False if you are testing
  .then(() => {
    console.log('Models are synchronized with the database.');
    app.listen(PORT, function () {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });