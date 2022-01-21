const User = require('../models/user');
const { findUserById, createNewUser, isUserExist, shiftUser,findUserByIdOne,findAllUsers,
   updateUser } = require('../services/user');
const { parserClients, addClient } = require('../utils/utils')


const findUserIndex = (id) => usersData.findIndex((user) => user.id === +id)

const despositeWithdrawCreditTrnasfer = (id, targetId, amount, num, active) => {
  // no no no please distractuer this function to other function something like desposite withdraw credit trnasfer
  let userIndex = findUserIndex(id);
  let targetIndex = findUserIndex(targetId);
  if (userIndex) {
    if (targetId) {
      if (!targetIndex) return false;
      
      return transfer(userIndex, targetIndex, amount);
    }
    else {
      if (num === -1 && usersData[userIndex][active] < amount) {
        return false;
        
      }
      usersData[userIndex][active] += amount * num;
      return true;
    }
  }
  return false;
}

const getUser = async (req, res) => {
  const ErrorMessage = "getUser Error"
  try {
    const { id } = req.params;
    const user = await findUserByIdOne(id)
    if (!user) {
      throw Error(ErrorMessage)
    }
    res.status(200).send(user);
  } catch (err) {
    if (err.message === ErrorMessage) {
      res.status(404).send("use doesn't exist")
    } else {
      res.status(400).send(err.message) // send the error
    }
  }
};

const addUser = async (req, res) => {
  try {
    const user = req.body;
 
    const newUser = await createNewUser(user)
    console.log(newUser)
    res.status(200).send(newUser)
  } catch (err) {
    res.send(err.message)
  }
};
const updateExistUser = async (req, res) => {    
try {    
  const { id } = req.params;    
  const user = await updateUser(id,req)
  res.send(user)    
} catch (err) {        
  res.status(500).send(err.message)}}

const deleteUser = async (req, res) => {
  try{
    const { id } = req.params;
    
    const response = await shiftUser(id)
    res.send('user does not exist')
  }catch(error) {
    res.send(error.message)
  }
  };

const getAllUsers = async (req, res) => {
  try {
    const users = await findAllUsers();
    res.status(200).send(users)
  } catch (err) {
    res.status(500).send(err.message)
  }
};

module.exports = { getUser, addUser, deleteUser, getAllUsers, updateExistUser };
