const users = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
  }
];

const getUserById = (id, callback) => {
  const user = users.find((user) => user.id === id);

  return callback(user ? false : true, user);
};

module.exports = {
  getUserById
};