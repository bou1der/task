const Connection = require('./database-connection')
const {DataTypes} = require('sequelize')

const Users = Connection.define('users',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:DataTypes.CHAR,
        allowNull: false,
    },
    surname:{
        type:DataTypes.CHAR,
        allowNull:false,
    },
    patronymic:{
        type:DataTypes.CHAR,
        allowNull:false,
    },
    login:{
        type:DataTypes.CHAR,
        allowNull:false,
    },
    password:{
        type:DataTypes.CHAR,
        allowNull:false
    }
},{
    indexes:[{
        unique:true,
        fields:['login']
    }]
})


module.exports = Users