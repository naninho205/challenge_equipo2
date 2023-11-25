const adminControllers = {
    admin: (req, res) => res.send('route for admin view'),
    create: (req, res)      => res.send('route for create an item view'),
    createItem: (req, res)  => res.send('route for adding an item to the database'),
    edit: (req, res)        => res.send('route for edit an item view'),
    editItem: (req, res)    => res.send('route for updating an item'),
    deleteItem: (req, res)  => res.send('route for deleting an item')
}

module.exports = adminControllers;
