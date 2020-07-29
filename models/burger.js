var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, devoured, cb) {
      orm.update("burgers", objColVals, devoured, function(res) {
        cb(res);
      });
    }
  };
  
  module.exports = burger;