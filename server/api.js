'use strict';
const api = require('express').Router();
const db = require('../db');
const { User, Campus } = require('../db/models');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.json({hello: 'world'}));

api.get('/users', (req, res, next) => {
	User.findAll()
	.then(users => res.json(users))
	.catch(next);
});

api.get('/users/:userId', (req, res, next) => {
	User.findOne({where: {userId: req.params.userId}})
	.then(user => res.json(user))
	.catch(next);
});

api.post('/users', (req, res, next) => {
	User.create(req.body)
  .then(function (user) {
    res.status(201).json(user);
  })
  .catch(next);
});

api.get('/campuses', (req, res, next) => {
	Campus.findAll()
	.then(campuses => res.json(campuses))
	.catch(next);
});

api.get('/campuses/:campusId', (req, res, next) => {
	console.log("axios.get by campus id");
	Campus.findOne({where: {id: req.params.campusId}})
	.then(campus => res.json(campus))
	.catch(next);
});

api.get('/campuses/:id/students', (req, res, next) => {
	User.findAll({where: {campusId: req.params.id}})
	.then(students => res.json(students))
	.catch(next);
});

api.post('/campuses', (req, res, next) => {
	Campus.create(req.body)
  .then(function (campus) {
    res.status(201).json(campus);
  })
  .catch(next);
});

module.exports = api;
