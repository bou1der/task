const Handler = (res, code, error,text,data) =>{
    res.status(code).json({error,text})
    console.log(`${code}:${error} \n --------- \n ${text} \n --------`)
    console.log(data)
    console.log(error)
}
module.exports = Handler