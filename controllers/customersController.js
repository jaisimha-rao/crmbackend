const Customer = require('../models/customer');

// GET all customers
const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST new customer
const createCustomer = async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const customer = new Customer({ name, email, phone });
    await customer.save();
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getCustomers, createCustomer };
