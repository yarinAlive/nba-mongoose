const mongoose = require('mongoose');

const game = {
  home: {
    type: String,
    required: true,
    trim: true,
  },
  away: {
    type: String,
    required: true,
    trim: true
  },
  homePoints: Number,
  awayPoints: Number,
  updateTime: {
    type: Date,
    default: Date.now
  },
  createTime: {
    type: Date,
    default: Date.now
  }
};

module.exports = mongoose.model('Game', new mongoose.Schema(game,
  {
    collection: 'Game',
    versionKey: false,
  }));
