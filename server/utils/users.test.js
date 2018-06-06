const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Roshan',
      room: 'apple'
    }, {
      id: '2',
      name: 'Lutika',
      room: 'google'
    }, {
      id: '3',
      name: 'Ashish',
      room: 'apple'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123456',
      name: 'Roshan',
      room: 'test'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '8';
    var user = users.removeUser(userId);

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '1';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '6';
    var user = users.getUser(userId);

    expect(user).toBeFalsy();
  });

  it('should return names for \'apple\' chat room', () => {
    var userList = users.getUserList('apple');

    expect(userList).toEqual(['Roshan', 'Ashish']);
  });

  it('should return names for \'google\' chat room', () => {
    var userList = users.getUserList('google');

    expect(userList).toEqual(['Lutika']);
  });
});
