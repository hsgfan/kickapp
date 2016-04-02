'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InventorySchema = new Schema({
  inventoryId:String,
  fieldId:String,
  name :String,
  size:String,
  brand:String,
  condition:String,
  sampImgSrc:String
});

module.exports = mongoose.model('Inventory', InventorySchema);
