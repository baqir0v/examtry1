import productModel from "../models/productModel.js";

const productActions = {
    getAllProducts: async (req, res) => {
        try {
            const getProducts = await productModel.find({})
            res.send(getProducts)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    getProductByID: async (req, res) => {
        try {
            const findProduct = await productModel.findById(req.params.id)
            res.send(findProduct)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    createProduct: async (req, res) => {
        try {
            const { title, price, image, categories } = req.body
            const newProduct = new productModel({
                title: title,
                price: price,
                image: image,
                categories: categories
            })
            await newProduct.save()
            res.send(newProduct)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const {title} = req.params
            const deleteProduct = await productModel.findByIdAndDelete(req.params.id)
            res.send(`${deleteProduct.title} deleted`)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

export default productActions