const express = require('express');
const router = express.Router();
const { getCustomers, createCustomer } = require('../controllers/customersController');

router.get('/', getCustomers);       // GET all customers
router.post('/', createCustomer);    // CREATE new customer

module.exports = router;
