const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Invoice', invoiceSchema);
