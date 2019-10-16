const mongoose = require('mongoose');
const { mongoDbUri } = require('./config');

const retrieveNbaDb = (() => {
  let mongooseConnect, nbaDb;
  return async () => {
    if (!mongooseConnect) {
      await mongoose.connect(mongoDbUri,
        {
          useUnifiedTopology: true,
          useNewUrlParser: true,
          poolSize: 20
        });
    }

    if (!nbaDb) {
      nbaDb = mongoose.connection.db;
    }
    return nbaDb;
  };
})();

module.exports = retrieveNbaDb;

