const { findOne } = require('./mongodb-find');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

(async function () {
  const query = { _id : ObjectId("5da6eae5dd72b5387409d59e") };
  const games = await findOne('Game', query);
  console.log(games);
})();
