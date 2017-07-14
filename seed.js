const db = require('./db');
const User = require('./db/models/user');
const Campus = require('./db/models/campus');

const users = [

  {
    name: 'Cody',
    email: 'cody@cody.cody'
  },

  {
    name: 'Jess',
    email: 'Jess@Jess.Jess'
  },

  {
    name: 'Karen',
    email: 'Karen@Karen.Karen'
  },

  {
    name: 'Warren',
    email: 'Warren@Warren.Warren'
  },

  {
    name: 'Helen',
    email: 'Helen@Helen.Helen'
  },

  {
    name: 'Jake',
    email: 'Jake@Jake.Jake'
  },

  {
    name: 'Issac',
    email: 'Issac@Issac.Issac'
  },

  {
    name: 'Priti',
    email: 'Priti@Priti.Priti'
  }
];

const campuses = [

  {
    name: 'Venus'
  },

  {
    name: 'Saturn'
  },

  {
    name: 'Mars'
  },

  {
    name: 'Neptune'
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
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
