const jwtTokenHandler = require('jsonwebtoken')
const Tokens  = require('../models/token-database-model')

module.exports.genTokenHandler = async (data) =>{
    const refreshToken = jwtTokenHandler.sign(data,process.env.JWT_REFRESH_KEY,{expiresIn:'20m'})
    const accessToken = jwtTokenHandler.sign(data,process.env.JWT_ACCESS_KEY,{expiresIn:'20d'})
    return{
        refresh:refreshToken,
        access:accessToken
    }
}
module.exports.tokenSaveHandler = async (ID,token) =>{
    const exist = await Tokens.findOne({where:{id:ID}})
    if (exist){
        exist.refresh = token;
        return exist.save();
    }
    const newTokensRecord = await Tokens.create({id:ID,refresh:token})
    return newTokensRecord;
}
module.exports.checkToken = async (token,typeToken) =>{
    if (typeToken === 'refresh'){
        const refresh = await jwtTokenHandler.verify(token,process.env.JWT_REFRESH_KEY)
        return refresh;
    }else{
        const access = await jwtTokenHandler.verify(token,process.env.JWT_ACCESS_KEY)
        return access;
    }
}
module.exports.logout = async (refresh) =>{
    const logoutToken = await Tokens.findOne({where:{refresh}})
    if (!logoutToken){
        return console.log("токен ненайден")
    }
    const logoutUser = await logoutToken.update({refresh:null})
}