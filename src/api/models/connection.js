/* eslint-disable max-lines-per-function */
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

let mongod = null;

require('dotenv').config();

// const MONGO_DB_URL = 'mongodb://mongodb:27017/Cookmaster';
const MONGO_DB_URL = 'mongodb://localhost:27017/Cookmaster';

const DB_NAME = 'Cookmaster';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function createMongoInMemory() {
  if (process.env.NODE_ENV === 'test') {
    mongod = await MongoMemoryServer.create();
    return mongod.getUri();
  }
}

let db = null;

const connection = async () => {
  const dbUrl = await createMongoInMemory();

  if (dbUrl) {
     const mongoConnection = await MongoClient.connect(
        `${dbUrl}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ).then((conn) => {
      db = conn.db(DB_NAME);
      return db;
    });

    return mongoConnection;
  } 

    return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, options).then((conn) => {
        db = conn.db(DB_NAME);
        return db;
      });
};

const disconnectDB = async () => {
  try {
    await mongoose.connection.close();
    if (mongod) {
      await mongod.stop();
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connection, disconnectDB };
