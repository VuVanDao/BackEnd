const connection = require("../config/database");

const getAllUsers = async (req, res) => {
  let [result] = await connection.query(`SELECT *  FROM Users `);
  return result;
};
module.exports = {
  getAllUsers: getAllUsers,
};
