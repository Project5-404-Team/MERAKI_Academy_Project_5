const express = require("express");
require("dotenv").config();
const cors = require("cors");
const registerUserRouter = require("./routes/registerUser");
const loginUserRouter = require("./routes/loginUsers");
const registerCompanyRouter = require("./routes/registerCompany");
const loginCompanyRouter = require("./routes/loginCompany");
const jobsRouter = require("./routes/jobs");

require("./models/db");


const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use('/users',registerUserRouter)
app.use('/login/users',loginUserRouter)
app.use('/companies', registerCompanyRouter)
app.use('/login/companies',loginCompanyRouter)
app.use('/jobs',jobsRouter)

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
