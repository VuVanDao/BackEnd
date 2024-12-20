const connection = require("../config/database");

const getAllUsers = async (req, res) => {
  let [result] = await connection.query(`SELECT *  FROM Users `);
  return result;
};
const createUsers = async (email, city, name) => {
  let [result] = await connection.query(
    `INSERT INTO Users  (name,email,city) 
     values (?,?,?); `,
    [name, email, city]
  );
  return result;
};
const getEditUsers = async (id) => {
  let [result] = await connection.query(`SELECT *  FROM Users WHERE id = ?`, [
    id,
  ]);
  return result;
};
const updateUsers = async (email, city, name, id) => {
  let [result] = await connection.query(
    `UPDATE Users 
     SET email =? , city = ?, name = ?
     WHERE id = ?;`,
    [email, city, name, id]
  );
  return result;
};
const getDeleteUsers = async (id) => {
  let [result] = await connection.query(`SELECT *  FROM Users WHERE id = ?`, [
    id,
  ]);
  return result;
};
const deleteUsers = async (id) => {
  let result = await connection.query(`DELETE FROM Users WHERE id = ?`, [id]);
  return result;
};
module.exports = {
  getAllUsers: getAllUsers,
  getEditUsers: getEditUsers,
  updateUsers: updateUsers,
  createUsers: createUsers,
  getDeleteUsers: getDeleteUsers,
  deleteUsers: deleteUsers,
};
