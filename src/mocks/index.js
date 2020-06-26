const faker = require('faker');

module.exports = () => {
  const data = {heroes: [], books: []};
  for (let i = 1; i <= 100; i++) {
    data.heroes.push({
      id: `${i}`,
      name: faker.name.firstName() + ' ' + faker.name.lastName(),
      age: faker.random.number({min: 22, max: 64}),
      bio: faker.lorem.paragraphs(),
      bookIds: []
    })
  }
  for (let i = 1; i <= 100; i++) {
    const heroIds = [];
    for (let j = 0; j < faker.random.number({min: 1, max: 4}); j++) {
      const heroId = `${faker.random.number({min: 1, max: 100})}`;
      heroIds.push(heroId);
      data.heroes.find(hero => hero.id === heroId).bookIds.push(i);
    }
    data.books.push({
      id: `${i}`,
      name: faker.lorem.words().replace(/(^\w|\s\w)/g, m => m.toUpperCase()),
      heroIds: [...new Set(heroIds)],
      description: faker.lorem.paragraph()
    })
  }
  data.heroes.forEach(hero => {
    hero.bookIds = [...new Set(hero.bookIds)];
  });
  return data;
};
