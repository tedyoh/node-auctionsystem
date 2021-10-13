'use strict';

require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'nodeauction',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: "admin",
    password: process.env.SEQUELIZE_PASSWORD,
    database: "nodeauction_test",
    host: "database-1.c4vutuhnxjmg.ap-northeast-2.rds.amazonaws.com",
    dialect: "mysql"
  },
  production: {
    username: 'admin',
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'nodeauction_production',
    host: 'database-1.c4vutuhnxjmg.ap-northeast-2.rds.amazonaws.com',
    dialect: 'mysql',
    logging: false,
  },
};