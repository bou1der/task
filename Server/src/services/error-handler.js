const Handler = (res, code, error,text,data) =>{
    res.status(code).json({error,text})
    console.log(`${code}:${error} \n --------- \n ${text} \n -------- \n ${data}`)
}
module.exports = Handler