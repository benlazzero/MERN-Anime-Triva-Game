const User = require('./user');

const addUser = (User) => ({id, email, userName}) => {
  const user = new User({
    id, email, userName
  })
  return user.save()
}

const getUsers = (User) => () => {
  return User.find({})
}

const getUserByEmail = (User) => async ({ email }) => {
  return await User.findOne({ email })
}

module.exports = (User) => {
  return {
    addUser: addUser(User),
    getUSers: getUsers(User),
    getUserByEmail: getUserByEmail(User)
  }
}

