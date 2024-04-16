const express = require('express')
const JSONParser = express.json()
const Router = express.Router()
const ErrorHandel = require('../services/error-handler')
const {check, validationResult} = require('express-validator')

const controller = require('../controllers/authorization-controller')

Router.post('/register', JSONParser, [
    check('login', 'Минимальная длинна логина 2 символа').isLength({min: 2}),
    check('password', 'Минимальная длинна пароля 8 символов').isLength({min: 8})
], (req, res) => {
    const validation = validationResult(req)
    if (!validation.isEmpty()) {
        return ErrorHandel(res, 400, validation.array(), 'Введены неправильные данные', req.body)
    }
    controller.register(req, res)
})
Router.post('/login', JSONParser, (req, res) => {
    controller.login(req, res)
})
Router.post('/refresh', JSONParser, (req, res) => {
    controller.refresh(req, res)
})
Router.post('/logout', JSONParser, (req, res) => {
    controller.logout(req, res)
})

module.exports = Router