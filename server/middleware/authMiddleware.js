import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userSchema'

const protect  = asyncHandler(async(req, res, next) => {
    let token

    token = req.cookies.jwt

    if(token){
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.userId).select('-password')
            next()
        } catch (err) {
            console.error(err)
            res.status(401)
            throw new Error(err.message)
        }
    }else{
        res.status(401)
        throw new Error(err.message)
    }
})

export { protect }