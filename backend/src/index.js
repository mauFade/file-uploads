const express = require("express");
const morgan = require("morgan");
const router = require("./router");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

// Database setup
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
});

const app = express();
const port = 8080;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(router);
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(port, () => {
  console.info(`HTTP server listening on port ${port}`);
});
