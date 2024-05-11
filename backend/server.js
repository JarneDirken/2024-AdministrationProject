const express = require('express');
const connectDB = require('./database');
const invoicesRoutes = require('./routes/invoiceRoutes');
const clientsRoutes = require('./routes/clientsRoutes');
var cors = require("cors");

connectDB();
const app = express();

// only allow cors from localhost port 5173 (frontend)
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Use your routes
app.use('/api', invoicesRoutes);
app.use('/api', clientsRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
