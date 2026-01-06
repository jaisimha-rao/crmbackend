const express = require('express');
const router = express.Router();
const {
  getCustomers,
  createCustomer
} = require('../controllers/customersController');

router.get('/', getCustomers);
router.post('/', createCustomer);

module.exports = router;
