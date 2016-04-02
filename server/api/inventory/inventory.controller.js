'use strict';

var _ = require('lodash');
var Inventory = require('./inventory.model');

// Get list of inventorys
exports.index = function(req, res) {
  Inventory.find(function (err, inventorys) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(inventorys);
  });
};

// Get a single inventory
exports.show = function(req, res) {
  //Inventory.findById(req.params.id, function (err, inventory) {
  //  if(err) { return handleError(res, err); }
  //  if(!inventory) { return res.status(404).send('Not Found'); }
  //  return res.json(inventory);
  //});
  Inventory.find({fieldId : { $eq : req.params.id } }, function (err, inventory) {
    if(err) { return handleError(res, err); }
    if(!inventory) { return res.status(404).send('Not Found'); }
    return res.json(inventory);
  });
};

// Creates a new inventory in the DB.
exports.create = function(req, res) {
  Inventory.create(req.body, function(err, inventory) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(inventory);
  });
};

// Updates an existing inventory in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Inventory.findById(req.params.id, function (err, inventory) {
    if (err) { return handleError(res, err); }
    if(!inventory) { return res.status(404).send('Not Found'); }
    var updated = _.merge(inventory, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(inventory);
    });
  });
};

// Deletes a inventory from the DB.
exports.destroy = function(req, res) {
  Inventory.findById(req.params.id, function (err, inventory) {
    if(err) { return handleError(res, err); }
    if(!inventory) { return res.status(404).send('Not Found'); }
    inventory.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
