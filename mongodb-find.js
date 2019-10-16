const retrieveNbaDb = require('./mongodb-connect');

const findOne = async (collection, query) => {
  try {
    const db = await retrieveNbaDb();
    return await db.collection(collection).findOne(query);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  findOne,
};
