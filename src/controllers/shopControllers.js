const shopControllers = {
    shop: (req, res)            => res.send('route for shop view'),
    item: (req, res)            => res.send(`route for find and retrieve a product from the id ${req.params.id}`),
    addItemToCart: (req, res)   => res.send('route for add the current item to the shop cart'),
    cart: (req, res)            => res.send('route for cart view'),
    checkout: (req, res)        => res.send('route for got to checkout page')
}

module.exports = shopControllers;
