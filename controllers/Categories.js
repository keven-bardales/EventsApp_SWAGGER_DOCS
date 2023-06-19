'use strict';

var utils = require('../utils/writer.js');
var Categories = require('../service/CategoriesService');

module.exports.categoriesGET = function categoriesGET (req, res, next) {
  Categories.categoriesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoriesIdDELETE = function categoriesIdDELETE (req, res, next, id) {
  Categories.categoriesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoriesIdGET = function categoriesIdGET (req, res, next, id) {
  Categories.categoriesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoriesIdPUT = function categoriesIdPUT (req, res, next, body, id) {
  Categories.categoriesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoriesPOST = function categoriesPOST (req, res, next, body) {
  Categories.categoriesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
