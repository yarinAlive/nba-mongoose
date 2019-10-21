class MongoDbRepository {
  constructor(model) {
    if (!model) {
      throw new Error('Failed to retireve model instance');
    }
    this.model = model;
  }

  findOne(filter, projection, options) {
    return this.model.findOne(filter, projection, options);
  }

  async save(document) {
    const newDoc = new this.model(document);
    return newDoc.save();
  }
}

module.exports = MongoDbRepository;
