'use strict';


/**
 * Get all locations
 *
 * returns List
 **/
exports.locationsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "address" : "address",
  "name" : "name",
  "municipality" : "municipality",
  "id" : 0,
  "department" : "department",
  "picture" : "http://example.com/aeiou"
}, {
  "address" : "address",
  "name" : "name",
  "municipality" : "municipality",
  "id" : 0,
  "department" : "department",
  "picture" : "http://example.com/aeiou"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a location by ID
 *
 * id Integer Location ID
 * no response value expected for this operation
 **/
exports.locationsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a location by ID
 *
 * id Integer Location ID
 * returns Location
 **/
exports.locationsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "address" : "address",
  "name" : "name",
  "municipality" : "municipality",
  "id" : 0,
  "department" : "department",
  "picture" : "http://example.com/aeiou"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a location by ID
 *
 * body LocationUpdate  (optional)
 * id Integer Location ID
 * returns Location
 **/
exports.locationsIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "address" : "address",
  "name" : "name",
  "municipality" : "municipality",
  "id" : 0,
  "department" : "department",
  "picture" : "http://example.com/aeiou"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a location
 *
 * body LocationRequest 
 * returns Location
 **/
exports.locationsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "address" : "address",
  "name" : "name",
  "municipality" : "municipality",
  "id" : 0,
  "department" : "department",
  "picture" : "http://example.com/aeiou"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

