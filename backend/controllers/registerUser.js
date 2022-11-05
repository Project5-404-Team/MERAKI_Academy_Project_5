const pool = require("../models/db");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { email, password, fullName, dateOfBirth, gender } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const values = [
    email.toLowerCase(),
    hashedPassword,
    fullName,
    dateOfBirth,
    gender,
  ];
  const query =
    "INSERT INTO users (email,password,fullName,dateOfBirth,gender) VALUES($1,$2,$3,$4,$5)";
  pool
    .query(query, values)
    .then((result) => {
      res.status(200).json({
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
const registerUserComplete = (req, res) => {
  const userId = req.params.userId;
  const {
    phoneNumber,
    maritalStatus,
    citizenships,
    whereDoYouLive,
    residencyStatus,
    yearsOfExperience,
    recentJobTitle,
    recentJobFunction,
    industryOfRecentJob,
    languages,
    skills,
    educationLevel,
    major,
    educationalInstituteName,
    cv,
  } = req.body;
  const iscompleted = 1;
  const values = [
    userId,
    iscompleted,
    phoneNumber,
    maritalStatus,
    citizenships,
    whereDoYouLive,
    residencyStatus,
    yearsOfExperience,
    recentJobTitle,
    recentJobFunction,
    industryOfRecentJob,
    languages,
    skills,
    educationLevel,
    major,
    educationalInstituteName,
    cv,
  ];
  const query = `UPDATE users SET iscompleted = $2, phoneNumber =$3 , maritalStatus =$4,citizenships=$5,whereDoYouLive=$6,residencyStatus=$7,yearsOfExperience=$8,recentJobTitle=$9,recentJobFunction=$10,industryOfRecentJob=$11,languages=$12,skills=$13 ,educationLevel=$14 ,major=$15,educationalInstituteName=$16,cv=$17 WHERE id=$1;`;
  pool
    .query(query, values)
    .then((result) => {
      res.status(200).json({
        success: true,
        massage: "User Profile Completed",
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

module.exports = { registerUser, registerUserComplete };
