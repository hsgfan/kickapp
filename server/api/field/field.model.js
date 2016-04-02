'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FieldSchema = new Schema({
  id: Number,
  numberOfSpots:Number,
  name: String,
  address:String,
  safety:Number
});

module.exports = mongoose.model('Field', FieldSchema);
