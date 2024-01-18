import { getUserById, users } from '../../src/js-foundation/03-callbacks';

describe('Test in 03-callbacks.ts', () => {
  // Use done when we have an asynchronous code or a timeout function
  it('getUserById should return an error if user does not exists', (done) => {
    const id = 10;

    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();

      done();
    });
  });

  it('getUserById should return the correct value', () => {
    const id = 1;
    const userExpect = users.find((user) => user.id === id);

    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual(userExpect);
    });
  });
});
