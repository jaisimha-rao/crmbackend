const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const customersRoutes = require('./routes/customersRoutes'); // your routes
const leadsRoutes = require('./routes/leadsRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // for parsing JSON

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI) // remove old options
  .then(() => console.log('MongoDB Connected: localhost'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/customers', customersRoutes);
app.use('/leads', leadsRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
