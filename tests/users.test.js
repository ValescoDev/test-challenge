const { default: expect } = require('expect');
const { getUser, getUsers } = require('../users');
const users = require('../data');

describe('getUser', () => {
  test('returns the user with the specified id', () => {
    const user = getUser(1);
    expect(user).toEqual(users[0]);
  });

  test('returns undefined if the user is not found', () => {
    const user = getUser(100);
    expect(user).toBeUndefined();
  });
});
