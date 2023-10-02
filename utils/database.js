const Sequelize = require('sequelize');

// schema/database , username, password, The dialect option specifies which type of database system Sequelize should connect to.
// dialect: 'mysql' indicates that you are configuring Sequelize to connect to a MySQL database.

const sequelize = new Sequelize('blog', 'root', 'Yash@2005',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;