import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('Test in 05-factory.ts', () => {
  const uuidAdapter = () => '1234';
  const getAgeAdapter = () => 35;

  it('buildMakePerson should return a function', () => {
    const makePerson = buildMakePerson({ uuidAdapter, getAgeAdapter });

    expect(typeof makePerson).toBe('function');
  });

  it('makePerson should return a person', () => {
    const makePerson = buildMakePerson({ uuidAdapter, getAgeAdapter });
    const person = makePerson({ name: 'John Doe', birthdate: '1985-10-21' });

    expect(person).toEqual({
      id: '1234',
      name: 'John Doe',
      birthdate: '1985-10-21',
      age: 35,
    });
  });
});
