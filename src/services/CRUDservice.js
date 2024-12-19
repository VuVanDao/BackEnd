const connection = require("../config/database");

const getAllUsers = async (req, res) => {
  let [result] = await connection.query(`SELECT *  FROM Users `);
  return result;
};
const getEditUsers = async (id) => {
  let [result] = await connection.query(`SELECT *  FROM Users WHERE id = ?`, [
    id,
  ]);
  return result;
};
module.exports = {
  getAllUsers: getAllUsers,
  getEditUsers: getEditUsers,
};
