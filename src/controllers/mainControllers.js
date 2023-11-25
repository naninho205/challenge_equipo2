const mainControllers = {
    home: (req, res)    => res.send('route for home view'),
    about: (req, res)   => res.send('route for contact view'),
    contact: (req, res) => res.send('route for about view'),
    faq: (req, res)     => res.send('route for faq view')
}

module.exports = mainControllers;
