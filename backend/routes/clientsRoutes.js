const express = require('express');
const router = express.Router();
const clientsSchema = require('../models/clients');

// Get all clients
router.get('/clients', async (req, res) => {
  try {
    const clients = await clientsSchema.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST route to add a new client
router.post('/clients', async (req, res) => {
  const client = new clientsSchema({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    companyName: req.body.companyName,
    email: req.body.email,
    telephone: req.body.telephone,
    address: req.body.address,
    vatNumber: req.body.vatNumber,
    notes: req.body.notes,
    status: 'active',
    createdAt: Date.now(),
  });

  try {
    const newClient = await client.save();
    res.status(201).json(newClient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH route to update an existing client
router.patch('/clients/:id', getClient, async (req, res) => {
  if (req.body.firstName != null) {
    res.client.firstName = req.body.firstName;
  }
  if (req.body.lastName != null) {
    res.client.lastName = req.body.lastName;
  }
  // Repeat for other fields

  try {
    const updatedClient = await res.client.save();
    res.json(updatedClient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/clients/:id', getClient, async (req, res) => {
  res.json(res.client);
});

router.delete('/clients/:id', async (req, res) => {
  try {
    const client = await clientsSchema.findByIdAndDelete(req.params.id);
    if (!client) {
      return res.status(404).json({ message: "Cannot find client" });
    }
    res.json({ message: "Deleted client" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to find a client by ID
async function getClient(req, res, next) {
  let client;
  try {
    client = await clientsSchema.findById(req.params.id);
    if (client == null) {
      return res.status(404).json({ message: "Cannot find client" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.client = client;
  next();
}

module.exports = router;
