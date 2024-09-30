const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Recipe = require('../models/recipes.js');

// router logic will go here - will be built later on in the lab

module.exports = router;

router.get('/', async (req, res) => {
  res.render('recipes/index.ejs');
});

router.get("/new", (req, res) => {
    res.render("recipes/new.ejs")
});