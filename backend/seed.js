require('dotenv').config();
const mongoose = require('mongoose');
const Clients = require('./models/clients');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected");
})
.catch(err => {
  console.error("Connection error", err);
});

const seedClients = [
  {
    firstName: 'John',
    lastName: 'Doe',
    companyName: 'Doe Inc.',
    email: 'john@doeinc.com',
    telephone: '1234567890',
    address: '123 Doe Street',
    vatNumber: 'VAT123456',
    status: 'active',
    notes: 'Important client.',
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    companyName: 'Smith Enterprises',
    email: 'jane@smithent.com',
    telephone: '0987654321',
    address: '456 Smith Avenue',
    vatNumber: 'VAT654321',
    status: 'active',
    notes: 'Frequent orders.',
  },
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    companyName: 'Johnson LLC',
    email: 'alice@johnsonllc.com',
    telephone: '1029384756',
    address: '789 Johnson Road',
    vatNumber: 'VAT102938',
    status: 'active',
    notes: 'Potential for upsell.',
  },
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    companyName: 'Johnson LLC',
    email: 'alice@johnsonllc.com',
    telephone: '1029384756',
    address: '789 Johnson Road',
    vatNumber: 'VAT102938',
    status: 'active',
    notes: 'Potential for upsell.',
  },
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    companyName: 'Johnson LLC',
    email: 'alice@johnsonllc.com',
    telephone: '1029384756',
    address: '789 Johnson Road',
    vatNumber: 'VAT102938',
    status: 'active',
    notes: 'Potential for upsell.',
  },
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    companyName: 'Johnson LLC',
    email: 'alice@johnsonllc.com',
    telephone: '1029384756',
    address: '789 Johnson Road',
    vatNumber: 'VAT102938',
    status: 'active',
    notes: 'Potential for upsell.',
  }
];

const seedDB = async () => {
  await Clients.deleteMany({}); // Caution: This will delete all existing clients!
  await Clients.insertMany(seedClients);
  console.log('Database clients seeded!');
};

seedDB().then(() => {
  mongoose.connection.close();
});
