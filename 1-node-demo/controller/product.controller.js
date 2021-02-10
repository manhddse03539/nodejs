const Product = require('../models/product.model');

module.exports = {
    index: async (req, res) => {
        // const page = parseInt(req.query.page) || 1;
        // const perPage = 8;

        // // const start = (page - 1) * perPage;
        // // const end = page * perPage;
        // const drop = (page - 1) * perPage;

        // const productQuantity = db.get('products').value().length;
        // const maxPage = Math.ceil(productQuantity / perPage);

        // const nextPage = (page) => {
        //     if (page === maxPage) {
        //         return maxPage;
        //     }
        //     return page + 1;
        // }
        // const prevPage = (page) => {
        //     if (page === 1) {
        //         return 1;
        //     }
        //     return page - 1;
        // }
        // res.render('products', {
        //     // products: db.get('products').value().slice(start, end)
        //     products: db.get('products').drop(drop).take(perPage).value(),
        //     page: page,
        //     nextPage: nextPage(page),
        //     prevPage: prevPage(page)
        // });
        const products = await Product.find();
        res.render('products', {
            products: products
        })

    }
}