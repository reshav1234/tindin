const userLogin = (req,res) => {
    res.send({ message: 'Logged In!' }) 
    console.log("User logged in!") 
}

const userRegister = (req, res) => {
    res.send({ message: 'User Registered!' }) 
    console.log("User registered!") 
}

const userLogOut = (req, response) => {
    response.send({ message: 'User Log Out!' })
    console.log("User Logged Out!")
}

module.exports = {userLogin, userRegister, userLogOut}