const db = require('./db');
const User = require('./db/models/user');
const Campus = require('./db/models/campus');

const users = [

  {
    name: 'Cody',
    email: 'cody@cody.cody',
    gradYear: 2022
  },

  {
    name: 'Jess',
    email: 'Jess@Jess.Jess',
    gradYear: 2018
  },

  {
    name: 'Karen',
    email: 'Karen@Karen.Karen',
    gradYear: 2019
  },

  {
    name: 'Warren',
    email: 'Warren@Warren.Warren',
    gradYear: 2018
  },

  {
    name: 'Helen',
    email: 'Helen@Helen.Helen',
    gradYear: 2022
  },

  {
    name: 'Jake',
    email: 'Jake@Jake.Jake',
    gradYear: 2018
  },

  {
    name: 'Issac',
    email: 'Issac@Issac.Issac',
    gradYear: 2023
  },

  {
    name: 'Priti',
    email: 'Priti@Priti.Priti',
    gradYear: 2018
  }
];

const campuses = [
  {
    name: 'Mercury',
    image: '/images/mercury.jpg'
  },

  {
    name: 'Venus',
    image: '/images/venus.jpg'
  },

  {
    name: 'Earth',
    image: 'images/earth.jpg'
  },

  {
    name: 'Mars',
    image: '/images/mars.jpg'
  },

  {
    name: 'Jupiter',
    image: '/images/jupiter.jpg'
  },

  {
    name: 'Saturn',
    image: '/images/saturn.jpg'
  },

  {
    name: 'Neptune',
    image: '/images/neptune.jpg'
  },

  {
    name: "Pluto",
    image: '/images/pluto.jpg'
  }
];

const seed = () =>
  Promise.all(users.map(user =>
    User.create(user))
  )
  .then(() =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  ));

const main = () => {
  console.log('Seeding databse...');
  seed()
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    });
};

main();
