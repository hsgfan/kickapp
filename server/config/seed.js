/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Inventory=require('../api/inventory/inventory.model');
var Field=require('../api/field/field.model');

Thing.find({}).remove(function() {
  Thing.create({
    name: 'Development Tools',
    info: 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name: 'Server and Client integration',
    info: 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name: 'Smart Build System',
    info: 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  }, {
    name: 'Modular Structure',
    info: 'Best practice client and server structures allow for more code reusability and maximum scalability'
  }, {
    name: 'Optimized Build',
    info: 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  }, {
    name: 'Deployment Ready',
    info: 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    },

    {
      provider: 'local',
      role: 'admin',
      name: 'Janos',
      email: 'janos@test.com',
      password: 'admin'
    },
    function() {
      console.log('finished populating users');
    });
});

Inventory.find({}).remove(function(){
  Inventory.create({
    inventoryId:'1',
    fieldId:'1',
    name:'FG Shoes',
    size:'7',
    brand:'Nike',
    condition:'New',
    sampImgSrc:'/assets/images/im3.png'
  },
    {
      inventoryId:'2',
      fieldId:'1',
      name:'Jersey',
      size:'M',
      brand:'Nike',
      condition:'New',
      sampImgSrc:'/assets/images/im3.png'
    }),
    function(){
      console.log('finished populating inventories');
    }
});

Field.find({}).remove(function(){
  Field.create({
    id: 0,
    numberOfSpots: 3,
    name: 'Lakeside Park',
    address: '660 Bellevue Ave, Oakland, CA 94610',
    safety: 3
  }, {
    id: 1,
    numberOfSpots: 5,
    name: 'Shoreside Park',
    address: '610 First Ave, Oakland, CA 93610',
    safety: 2
  }),
    function(){
      console.log('finished populating fields');
    }
});



