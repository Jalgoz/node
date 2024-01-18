interface User {
  id: number;
  name: string;
}

export const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
  },
];

export const getUserById = (
  id: number,
  callback: (err?: string, user?: User) => void,
) => {
  const user = users.find((user) => user.id === id);

  if (!user) {
    setTimeout(() => {}, 2500);

    return callback(`User not found with id ${id}`);
  }

  return callback(undefined, user);
};
