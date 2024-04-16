const ErrorHandler = require('../services/error-handler')
const Users = require('../models/users-database-model')
const TokensModel = require('../models/token-database-model')
const TokenService = require('../services/jwt-service')
const hash = require('bcryptjs')

module.exports.register = async (req, res) => {
    try {
        const {name, login, password} = req.body
        const user  = await Users.findOne({where:{login}})
        if (user){
            return ErrorHandler(res,300,"Данный пользователь уже существует","Подберите другой логин",req.body);
        }
        const hashPassword = await hash.hashSync(password,10)
        const newUser = await Users.create({name:name[0],surname:name[1],patronymic:name[2],login:login,password:hashPassword})

        const tokens = await TokenService.genTokenHandler({id:newUser.dataValues.id, name:newUser.dataValues.name})
        await TokenService.tokenSaveHandler(newUser.dataValues.id,tokens.refresh)

        res.cookie('refresh',tokens.refresh,{maxAge:1728000,httpOnly:true})
        res.cookie(200).json({
            tokens
        })
    } catch (error) {
        ErrorHandler(res, 500, error, 'Непредвиденная ошибка', req.body)
    }
}

module.exports.login = async (req, res) => {
    try{
        const {login,password} = req.body
        const user = await Users.findOne({where:{login}})
        if (!user){
            return ErrorHandler(res,404,"Пользователь ненайден","Перепроверьте правильность данных",req.body);
        }

        const correctPassword = await hash.compareSync(password,user.dataValues.password)
        if (!correctPassword){
            return ErrorHandler(res,400,"Неправильный пароль","Перепроверьте правильность данных",req.body);
        }

        const tokens = await TokenService.genTokenHandler({id:user.dataValues.id,name:user.dataValues.name})
        await TokenService.tokenSaveHandler(user.dataValues.id,tokens.refresh)

        res.cookie('refresh',tokens.refresh,{maxAge:1728000,httpOnly:true})
        res.status(200).json({
            tokens
        })
    }catch (error) {
        ErrorHandler(res, 500, error, 'Непредвиденная ошибка', req.body)
    }
}

module.exports.refresh = async (req, res) => {
    try {
        const {refresh} = req.cookies
        if (!refresh){
            return ErrorHandler(req,400,'Токен ненайден', "Ненайден токен в cookies", req.cookies)
        }
        const userData = await TokenService.checkToken(refresh,"refresh")
        const existRefreshToken = await TokensModel.findOne({where:{refresh}})
        if (!userData || !existRefreshToken){
            ErrorHandler(res,404,"Ошибка проверки токена", "Токен не прошел проверку", req.cookies)
        }
        const user = await Users.findOne({where:{id:userData.id}})

        const tokens = TokenService.genTokenHandler({id:user.dataValues.id,name:user.dataValues.name})
        await TokenService.tokenSaveHandler(user.dataValues.id,tokens.refresh)

        res.cookie('refresh',tokens.refresh,{maxAge:1728000,httpOnly:true})
        res.status(200).json({
            tokens
        })
    }catch (error) {
        ErrorHandler(res, 500, error, 'Непредвиденная ошибка', req.body)
    }
}

module.exports.logout = async (req, res) => {
    try {
        const {refresh} = req.cookies
        if (!refresh){
           return ErrorHandler(res,404,"Токен ненайден", "Refresh токен не получен из куки", req.cookies)
        }
        res.clearCookie('refresh')
        await TokenService.logout(refresh)
    }catch (error) {
        ErrorHandler(res, 500, error, 'Непредвиденная ошибка', req.body)
    }
}