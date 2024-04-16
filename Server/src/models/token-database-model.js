const connection = require('./database-connection')
const {DataTypes} = require("sequelize")

const Tokens = connection.define('tokens',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,

    },
    refresh:{
        type:DataTypes.CHAR,
        allowNull:true,
    }
})

module.exports = Tokens