const mongoose = require('mongoose');

const invoicesSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Invoice', invoicesSchema);
