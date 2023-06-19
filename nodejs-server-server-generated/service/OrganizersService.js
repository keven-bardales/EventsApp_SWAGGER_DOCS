'use strict';


/**
 * Get all organizers
 *
 * returns List
 **/
exports.organizersGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "phone" : "phone",
  "organization" : "organization",
  "name" : "name",
  "id" : 0,
  "email" : "email"
}, {
  "phone" : "phone",
  "organization" : "organization",
  "name" : "name",
  "id" : 0,
  "email" : "email"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an organizer by ID
 *
 * id Integer Organizer ID
 * no response value expected for this operation
 **/
exports.organizersIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get an organizer by ID
 *
 * id Integer Organizer ID
 * returns Organizer
 **/
exports.organizersIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "phone" : "phone",
  "organization" : "organization",
  "name" : "name",
  "id" : 0,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an organizer by ID
 *
 * body OrganizerUpdate 
 * id Integer Organizer ID
 * returns Organizer
 **/
exports.organizersIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "phone" : "phone",
  "organization" : "organization",
  "name" : "name",
  "id" : 0,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create an organizer
 *
 * body OrganizerRequest 
 * returns Organizer
 **/
exports.organizersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "phone" : "phone",
  "organization" : "organization",
  "name" : "name",
  "id" : 0,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

