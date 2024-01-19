import { getAgeAdapter } from '../../src/adapters';

describe('Test in get-age.adapter', () => {
  it('getAgeAdapter should return a number', () => {
    const birthdate = '1995-10-11';
    const age = getAgeAdapter(birthdate);

    expect(typeof age).toBe('number');
  });

  it('getAgeAdapter should return current age', () => {
    const birthdate = '1995-10-11';
    const age = getAgeAdapter(birthdate);

    const expectedAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();

    expect(age).toBe(expectedAge);
  });

  it('should return 0 years', () => {
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
    const birthdate = '1995-10-11';

    const age = getAgeAdapter(birthdate);

    expect(age).toBe(0);
    expect(spy).toHaveBeenCalled();
  });
});
