const debug = require('debug')('cv-api:db');
const mongoose = require('mongoose');

const envconfig = require('./env.config')

const dburi = process.env.MONGO_URI


const connect = async () => {
    try {
      await mongoose.connect(dburi);
      debug('Connected successfully to database!');
    } catch (error) {
      debug("[Error]: Can't connect to database!");
    }
}

module.exports = {connect};