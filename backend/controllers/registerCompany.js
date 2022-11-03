const pool = require("../models/db");
const bcrypt = require("bcrypt");

const registerCompany = async (req, res) => {
  const {
    companyName,
    industry,
    numberOfEmployees,
    country,
    city,
    contactPerson,
    phoneNumber,
    email,
    password,
  } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const values = [
    companyName,
    industry,
    numberOfEmployees,
    country,
    city,
    contactPerson,
    phoneNumber,
    email.toLowerCase(),
    hashedPassword,
  ];
  const query =
    "INSERT INTO companies ( companyName, industry, numberOfEmployees, country, city, contactPerson, phoneNumber, email, password ) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)";
  pool
    .query(query, values)
    .then((result) => {
      res.status(201).json({
        success: true,
        massage: "Account Created Successfully",
      });
    })
    .catch((err) => {
      res.status(409).json({
        success: false,
        massage: "The email already exists",
        err,
      });
    });
};

const registerCompanyComplete = (req, res) => {
  const companyId = req.params.companyId;
  const {
    companyWebsite,
    ceo,
    workingHours,
    weekends,
    lunchBreak,
    companyOverview,
    companyLogo,
    officeLocation,
  } = req.body;
  const values = [
    companyId,
    companyWebsite,
    ceo,
    workingHours,
    weekends,
    lunchBreak,
    companyOverview,
    companyLogo,
    officeLocation,
  ];
  const query = `UPDATE companies SET companyWebsite = $2,ceo =$3,workingHours=$4,weekends=$5,lunchBreak=$6,companyOverview=$7,companyLogo=$8,officeLocation=$9 WHERE id=$1;`;
  pool
    .query(query, values)
    .then((result) => {
      res.status(200).json({
        success: true,
        massage: "Company Profile Completed",
      });
    })
    .catch((err) => {
      res.status(409).json({
        success: false,
        massage: "Something went Wrong",
        err,
      });
    });
};
module.exports = { registerCompany, registerCompanyComplete };
