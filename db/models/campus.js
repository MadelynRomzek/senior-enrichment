'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: '/images/default-photo.jpg'
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: "Ethical man braid gluten-free cray quinoa, bespoke tbh coloring book fam butcher DIY. Cronut hell of stumptown snackwave taxidermy semiotics mixtape salvia tumblr readymade. Vinyl seitan listicle crucifix keytar. Tilde cliche truffaut, edison bulb vexillologist hammock bespoke semiotics humblebrag chambray vegan chicharrones fixie celiac. Squid typewriter art party live-edge forage pickled kinfolk brooklyn, fam everyday carry keytar chambray vape subway tile organic. Wolf tbh prism raclette, seitan offal paleo bicycle rights lyft chillwave bushwick hexagon knausgaard single-origin coffee pinterest. Thundercats brunch succulents flexitarian cred forage. Coloring book distillery blog gluten-free sustainable salvia narwhal bespoke. Poke literally PBR&B hashtag pop-up, deep v XOXO everyday carry cred swag bushwick ethical prism mumblecore vinyl. Etsy marfa blog health goth vape. Post-ironic iceland you probably haven't heard of them humblebrag 3 wolf moon venmo everyday carry freegan chicharrones squid actually offal messenger bag. Succulents hell of taxidermy cred plaid unicorn whatever wolf. Offal photo booth four dollar toast plaid semiotics, taiyaki meditation organic umami tacos. Messenger bag retro quinoa food truck vegan freegan humblebrag hashtag cloud bread tilde."
  }
});
