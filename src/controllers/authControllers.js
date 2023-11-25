const authControllers = {
    login: (req, res)           => res.send('route for the login view'),
    loginUser: (req, res)       => res.send('route for logging in'),
    register: (req, res)        => res.send('route for register view'),
    registerUser: (req, res)    => res.send('route for registering'),
    logoutUser: (req, res)      => res.send('route for logging out and returning home')
}

module.exports = authControllers;
