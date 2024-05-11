const express = require('express');
const router = express.Router();
const Invoices = require('../models/invoices');

// Get all invoices
router.get('/invoices', async (req, res) => {
  try {
    const invoices = await Invoices.find();
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
