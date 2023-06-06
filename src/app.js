const authRoute = require("./routes/authRoute");
require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

app.use("/auth", authRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server run on port" + port));
