const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const People = require('../models/userSchema')


// @desc    Register new user
// @route   /auth/register
// @access  public 
const regUser = asyncHandler(async(req, res) =>{
    const {username, password} = req.body
    if(!username || !password){
        res.status(400)
        throw new Error("Please add all fields")
    }

    // find user from the database for login
    const userExists = await People.findOne({username})
    if(userExists){
        res.status(400)
        throw new Error("User already exists")
    }

    // password hash
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    const user = await People.create({
        username,
        password :hashPassword
    })

    // display registered user
    if(user){
        res.status(201).json({
            _id:user.id,
            username:user.username,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("Error")
    }
})


// @desc    Login user 
// @route   POST /auth/login
// @access  public
const loginUser = asyncHandler(async(req, res) => {
    const {username, password} = req.body
    const user = await People.findOne({username})

    // check if user is already logged 
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id:user.id,
            username: user.username
        })
    }else{
        res.status(400)
        throw new Error("Invalid credential")
    }

    res.json({message: "User login"})
})

// @desc    Find user
// @route   GET /auth/
//@access   Private

const getMe = asyncHandler(async(req, res) => {
    try {
        const user = await People.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const {_id, username} = user || {}; // Handle case where user is undefined
        res.status(200).json({
            id: _id,
            username
        });
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn:'30d'
    })
}

module.exports = {regUser, loginUser, getMe}