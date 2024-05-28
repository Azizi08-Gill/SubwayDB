require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db');
const employeeRoutes = require('./routes/employees');
const inventoryRoutes = require('./routes/inventorys');
const breadRoutes = require('./routes/breads');
const dessertRoutes = require('./routes/desserts');
const discountRoutes = require('./routes/discounts');
const drinkRoutes = require('./routes/drinks');
const promocodeRoutes = require('./routes/promocodes');
const saladRoutes = require('./routes/salads');
const sandwichRoutes = require('./routes/sandwiches');
const supplierRoutes = require('./routes/suppliers');
const customerRoutes = require('./routes/customers');
const orderRoutes = require('./routes/orders');
const feedbackRoutes = require('./routes/feedbacks');
const reviewRoutes = require('./routes/reviews');
const loginRoutes = require('./routes/login')


connectDB();

app.use(express.json());
app.use(cors());
app.use('/api/employee',employeeRoutes);
app.use('/api/inventory',inventoryRoutes);
app.use('/api/bread',breadRoutes);
app.use('/api/dessert',dessertRoutes);
app.use('/api/discount',discountRoutes);
app.use('/api/drink',drinkRoutes);
app.use('/api/promocode',promocodeRoutes);
app.use('/api/salad',saladRoutes);
app.use('/api/sandwich',sandwichRoutes);
app.use('/api/supplier',supplierRoutes);
app.use('/api/customer',customerRoutes);
app.use('/api/order',orderRoutes);
app.use('/api/feedback',feedbackRoutes);
app.use('/api/review',reviewRoutes);
app.use('/api/login',loginRoutes);

const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));

// Catch-all route to send all other requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});


const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Listening on port ${port}`))