const express = require('express');
const connectDB = require('./database');
const invoiceRoutes = require('./routes/invoiceRoutes'); // Adjust the path to your routes file as necessary
var cors = require("cors");

connectDB();
const app = express();

// only allow cors from localhost port 5173 (frontend)
app.use(cors({
    origin: 'http://localhost:5173'
  }));
app.use(express.json()); // Middleware to parse JSON bodies

// Use your routes
app.use('/api', invoiceRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
