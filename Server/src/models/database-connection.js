const Sequelize = require('sequelize')
const config = require('../../config.json')

// Подключение к бд
const  connection = new Sequelize(`${config.database.db_name}`,`${config.database.user}`,`${config.database.password}`,{
    host:`${config.database.host}`,
    dialect:`${config.database.dialect}`,
})

try{
    if (connection.authenticate()){
        console.log(`DATABASE:Successful connection on ${config.database.db_name}...`)
    }
}catch (e){
    console.log(e)
}

module.exports = connection