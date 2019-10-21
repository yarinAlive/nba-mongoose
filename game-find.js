const { findOne } = require('./mongodb-find');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const GameRepository = require('./repositories/GameRepository');
const retrieveNbaDb = require('./mongodb-connect');

async function findByNative() {
  const query = { _id: ObjectId('5da8051cc1e30a4225481026') };
  const games = await findOne('Game', query);
  console.log(games);
}

(async function () {
  await retrieveNbaDb();
  const gameRepository = GameRepository.createInstance();
  const query = gameRepository.findOne({
    _id: ObjectId('5da8051cc1e30a4225481026'),
  });


  const games = await query.exec();
  console.log(games);

  // Customized
  await gameRepository.find();
})();

