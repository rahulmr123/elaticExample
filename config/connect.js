var elasticsearch = require('elasticsearch');
var database=require('./db.js');
var client = new elasticsearch.Client({
    host: database.url
  });
  module.exports=client;