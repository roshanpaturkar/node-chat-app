const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Roshan';
    var text = 'Hola!';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({text, from});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'User';
    var latitude = 18.5204444;
    var longitude = 73.8545613;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.from).toBe('string');
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, url});
  });
});
