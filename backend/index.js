const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const authRoute = require("./routes/authentication");
const categoryRoute = require("./routes/category");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use(authRoute);
app.use(categoryRoute);

const uri = process.env.DB_URI;
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome our to Urban Company..");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
