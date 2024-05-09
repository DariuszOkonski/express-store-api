const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ name: 'high-back bench' });
  return res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find(req.query);

  return res.status(200).json({ nbHits: products.length, products });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
