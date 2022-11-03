const express = require("express");
require("dotenv").config();
const cors = require("cors");
const registerUserRouter = require("./routes/registerUser");
require("./models/db");

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use('/users',registerUserRouter)

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
