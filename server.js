const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const customersRoutes = require('./routes/customersRoutes');
app.use('/customers', customersRoutes);

// Test route (VERY IMPORTANT)
app.get('/', (req, res) => {
  res.send('CRM Backend is running 🚀');
});

// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
