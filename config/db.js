const mongoose = require('mongoose');
const config = require('config')

const username = process.env.DB_USERNAME || config.get('DB_USERNAME')
const password = process.env.DB_PASSWORD || config.get('DB_PASSWORD')

const db = `mongodb+srv://${username}:${password}@cluster0.pdoex.mongodb.net/tables1?retryWrites=true&w=majority`

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongo db connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB