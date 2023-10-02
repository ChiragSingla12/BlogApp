const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Blog = sequelize.define('blogForm', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Title: Sequelize.STRING,
    Author: Sequelize.STRING,
    Content: Sequelize.STRING
});

module.exports = Blog;