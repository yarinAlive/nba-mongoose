const MongoDbRepository = require('./MongoDbRepository');

class GameRepository extends MongoDbRepository {
  constructor() {
    const Game = require('./model/game');
    super(Game);
  }

  static createInstance() {
    return new GameRepository();
  }

  async find() {
    // query mongoDb
    // query fireStore
  }
}

module.exports = GameRepository;
