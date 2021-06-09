const { Sequelize } = require('sequelize')
const { dbUser, dbHost, dbName, dbPort, dbPassword} = require('../../utils/config/index')
const ProductFactory = require('./Products')

sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`)

const Products = ProductFactory(sequelize)

module.exports = {
    conn: sequelize,
    Products
}