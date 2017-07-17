'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    isEmail: true
    // ^CONNIE: this isEmail constraint will not kick off - it is a sequelize-level
    // validation rather than a DB level validation, so you must put it in another
    // 'validate' object as such -
    // validate: {
    //   isEmail: true,
    // },
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: '/images/profile-img.png'
  },
  gradYear: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
