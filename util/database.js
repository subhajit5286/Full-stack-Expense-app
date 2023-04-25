const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-first','root','walkcook76',{
    dialect: 'mysql',
    host : 'localhost'
});

module.exports = sequelize;
