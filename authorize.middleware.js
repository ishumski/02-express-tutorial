const authorizeMiddleware = (req, res, next)=>{
    const { user } = req.query
    if(user === 'ilia'){
        req.user = {
            name: 'ilia',
            id: 23
        }
        next()
    } else {
        res.status(403).send('user unauthorised')
    }
}

module.exports = authorizeMiddleware