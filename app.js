const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// กำหนดค่า middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 9000;

// นำเข้า routes
const indexRoute = require("./routes/index");
app.use("/", indexRoute);
// จัดการกับ 404 Not Found
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

var server = app.listen(PORT, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Application Run At http://%s:%s;", host, port);
});
