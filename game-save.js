const retrieveNbaDb = require('./mongodb-connect');
const Game = require('./model/game');

(async function () {
  await retrieveNbaDb();
  const gameDoc = new Game(
    {
      home: '快艇',
      away: '湖人',
      homePoints: 121,
      awayPoints: 67,
    }
  );

  await gameDoc.save();
})();
