const retrieveNbaDb = require('./mongodb-connect');
const GameRepository = require('./repositories/GameRepository');

(async function () {
  await retrieveNbaDb();
  const gameRepository = GameRepository.createInstance();
  await gameRepository.save({
    home: '國王',
    away: '老鷹',
    homePoints: 121,
    awayPoints: 67,
  });
})();
