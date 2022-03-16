const Joi = require('joi');
const mongoose = require('mongoose');
const {genreSchema} = require('./genre');

const Movie = mongoose.model('Movies', new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  genre: { 
    type: genreSchema,  
    required: true
  },
  duration: {
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 7
  },
  language:{
    type: String,
    required: true,
    trim: true, 
    minlength: 0,
    maxlength: 10
  },
  ytubeSrc: {
    type: String,
    required: true,
    trim: true, 
    minlength: 11,
    maxlength: 11
  },
  description: {
    type: String,
    required: true,
    trim: true, 
    minlength: 10,
    maxlength: 280
  }
}));

function validateMovie(movie) {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    genreId: Joi.objectId().required(),
    duration: Joi.string().min(5).max(7).required(),
    language: Joi.string().min(0).max(10).required(),
    ytubeSrc: Joi.string().min(11).max(11).required(),
    description: Joi.string().min(10).max(280).required()
  };

  return Joi.validate(movie, schema);
}

exports.Movie = Movie; 
exports.validate = validateMovie;