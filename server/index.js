const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require('dotenv');
const superAdminController = require('./controller/superAdminController');
const connectDB = require("./db/mongoose");
const cors = require('cors');
dotenv.config();
connectDB();

const app = express();

app.use(morgan('dev'))
app.use(helmet({
  contentSecurityPolicy: {
    // ... (your existing content security policy configuration)
  }
}));

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json()); // Add this line to enable JSON parsing middleware

app.use('/api', superAdminController);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});
