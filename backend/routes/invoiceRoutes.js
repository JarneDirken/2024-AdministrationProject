const express = require('express');
const router = express.Router();
const Invoice = require('../models/invoice');

// Get all invoices
router.get('/invoices', async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
