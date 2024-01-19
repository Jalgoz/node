import axios from 'axios';
import { httpClientAdapter } from '../../src/adapters/http-client.adapter';

describe('Test in http-client.adapter', () => {
  it('httpClientAdapter should return a string', async () => {
    const data = await httpClientAdapter.get(
      'https://jsonplaceholder.typicode.com/todos/1',
    );

    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: expect.any(String),
      completed: expect.any(Boolean),
    });
  });
});
