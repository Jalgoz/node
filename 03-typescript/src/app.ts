const heroes = [
  { id: 1, name: 'Ironman', owner: 'Marvel' },
  { id: 2, name: 'Batman', owner: 'DC' },
  { id: 3, name: 'Spiderman', owner: 'Marvel' },
];

const findHeroById = (id: number) => {
  return heroes.find((hero) => hero.id === id);
};

const hero = findHeroById(2);

console.log(hero?.name || 'Hero not found');
