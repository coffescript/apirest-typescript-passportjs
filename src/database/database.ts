import mongoose, { ConnectionOptions } from 'mongoose';

import config from '../config/config';

const config_mongodb: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

mongoose.connect(config.DB.uri, config_mongodb);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connection stablished');
});

connection.on('error', err => {
  console.log(err);
  process.exit(0);
})