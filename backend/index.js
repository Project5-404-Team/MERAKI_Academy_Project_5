const express = require("express");
require("dotenv").config();
const cors = require("cors");
const registerUserRouter = require("./routes/registerUser");
const loginUserRouter = require("./routes/loginUsers");
require("./models/db");


const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use('/users',registerUserRouter)
app.use('/login/users',loginUserRouter)

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
