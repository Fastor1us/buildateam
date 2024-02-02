const { getShopifyProducts } = require('../services/shopifyService');

const getProducts = async (req, res) => {
  try {
    const products = await getShopifyProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

module.exports = {
  getProducts
};
