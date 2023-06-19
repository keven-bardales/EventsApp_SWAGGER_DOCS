'use strict';


/**
 * Get all events
 *
 * returns List
 **/
exports.eventsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "start_time" : "2000-01-23T04:56:07.000+00:00",
  "cost" : 0.8008281904610115,
  "id_category" : 1,
  "name" : "name",
  "end_time" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "id_location" : 6,
  "id" : 5,
  "id_main_organizer" : 5,
  "picture" : "http://example.com/aeiou"
}, {
  "start_time" : "2000-01-23T04:56:07.000+00:00",
  "cost" : 0.8008281904610115,
  "id_category" : 1,
  "name" : "name",
  "end_time" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "id_location" : 6,
  "id" : 5,
  "id_main_organizer" : 5,
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
 * Delete an event by ID
 *
 * id Integer Event ID
 * no response value expected for this operation
 **/
exports.eventsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get an event by ID
 *
 * id Integer Event ID
 * returns Event
 **/
exports.eventsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "start_time" : "2000-01-23T04:56:07.000+00:00",
  "cost" : 0.8008281904610115,
  "id_category" : 1,
  "name" : "name",
  "end_time" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "id_location" : 6,
  "id" : 5,
  "id_main_organizer" : 5,
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
 * Update an event by ID
 *
 * body EventUpdate  (optional)
 * id Integer Event ID
 * returns Event
 **/
exports.eventsIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "start_time" : "2000-01-23T04:56:07.000+00:00",
  "cost" : 0.8008281904610115,
  "id_category" : 1,
  "name" : "name",
  "end_time" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "id_location" : 6,
  "id" : 5,
  "id_main_organizer" : 5,
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
 * Create an event
 *
 * body EventRequest 
 * returns Event
 **/
exports.eventsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "start_time" : "2000-01-23T04:56:07.000+00:00",
  "cost" : 0.8008281904610115,
  "id_category" : 1,
  "name" : "name",
  "end_time" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "id_location" : 6,
  "id" : 5,
  "id_main_organizer" : 5,
  "picture" : "http://example.com/aeiou"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

