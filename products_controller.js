module.exports = {
    create(req, res){
        let { name, description, price, image_url } = req.body
        req.app.get('db').create_product([name, description, price, image_url])
            .then(ok => res.sendStatus(200))
            .catch(err => res.status(500))
    },
    getOne(req, res) {
        let { id } = req.params
        req.app.get('db').read_product(id)
            .then(product => res.status(200).send(product))
    },
    getAll(req, res) {
        req.app.get('db').read_products()
            .then(products => res.status(200).send(products))
    },
    update(req, res) {
        let { desc } = req.query
        let { id } = req.params
        req.app.get('db').update_product([id, desc])
            .then(ok => res.sendStatus(200))
                .catch(err => console.log(err))
    },
    delete(req, res) {
        let { id } = req.params
        req.app.get('db').delete_product([id])
            .then(ok => res.sendStatus(200))

    }
}