import { uuidAdapter } from '../../src/adapters/uuid.adapter';

describe('Test in uuid.adapter', () => {
  it('uuidAdapter should return a UUID', () => {
    const uuid = uuidAdapter();

    expect(typeof uuid).toBe('string');
    expect(uuid.length).toBe(36);
  });
});
