// LECTURE: FACTORY FUNCTIONS
/* const { uuidAdapter, getAgeAdapter } = require('./adapters');
const { buildMakePerson } = require('./js-foundation/05-factory');

const makePerson = buildMakePerson({ uuidAdapter, getAgeAdapter });
const obj = { name: 'John', birthDate: '1995-10-11' };

const john = makePerson(obj);

console.log({ john }); */

import { buildLogger } from './adapters/logger.adapter';

// LECTURE: PROMISES
// const getPokemonById = require('./js-foundation/06-promises');

/*
getPokemonById(4)
  .then((pokemon) => console.log({ pokemon }))
  .catch((error) => console.log(error.response.data));
  */

const logger = buildLogger('app.js');
logger.log('Hello world !!!');
logger.error('This is something wrong');
