'use strict';

var utils = require('../utils/writer.js');
var Organizers = require('../service/OrganizersService');

module.exports.organizersGET = function organizersGET (req, res, next) {
  Organizers.organizersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.organizersIdDELETE = function organizersIdDELETE (req, res, next, id) {
  Organizers.organizersIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.organizersIdGET = function organizersIdGET (req, res, next, id) {
  Organizers.organizersIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.organizersIdPUT = function organizersIdPUT (req, res, next, body, id) {
  Organizers.organizersIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.organizersPOST = function organizersPOST (req, res, next, body) {
  Organizers.organizersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
