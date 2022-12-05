import Sequelize from 'sequelize';

export const sequelize = new Sequelize('db_lizard', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})