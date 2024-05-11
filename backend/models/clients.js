const mongoose = require('mongoose');

const clientsSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    validate: {
      validator: function(value) {
        // If companyName is filled, vatNumber must also be filled, and vice versa
        return !(value ? !this.vatNumber : this.vatNumber);
      },
      message: props => `Company name and VAT number must both be filled out together.`
    }
  },
  email: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
  },
  address: {
    type: String,
  },
  vatNumber: {
    type: String,
    validate: {
      validator: function(value) {
        // If vatNumber is filled, companyName must also be filled, and vice versa
        return !(value ? !this.companyName : this.companyName);
      },
      message: props => `VAT number and company name must both be filled out together.`
    }
  },
  status: {
    type: String,
    default: 'active'
  },
  notes: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Clients', clientsSchema);
