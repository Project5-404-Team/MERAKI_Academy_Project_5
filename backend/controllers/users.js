const pool = require("../models/db");

const getAllUsers = (req, res) => {
    const query = `SELECT * FROM Users `;
    pool
      .query(query)
      .then((result) => {
        res.status(200).json({
          success: true,
          massage: "All Users",
          result: result.rows,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          massage: "server error",
          err: err,
        });
      });
  };


  
  module.exports = {getAllUsers};