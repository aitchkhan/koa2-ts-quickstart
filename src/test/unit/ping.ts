import * as services from '../../service/ping';

describe('Ping service', () => {
  test('it should send pong response', () => {
    expect(services.ping()).resolves.toEqual({message: 'pong!!'});
  });
});
