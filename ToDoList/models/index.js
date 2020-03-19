'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);        //结果为:index.js
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
console.log(`在 index.js中， config  的值为${JSON.stringify(config)}\n`)

const db = {};


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (   (file.indexOf('.') !== 0))       //带有 "."
            && (file !== basename)              //不为 index.js
            && (file.slice(-3) === '.js');      //且为 ".js" 的后续
  })
  .forEach(file => {

    //见：https://sequelize.org/v5/manual/models-definition.html#import
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
