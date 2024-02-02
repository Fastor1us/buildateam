const Shopify = require('shopify-api-node');

const shopify = new Shopify({
  shopName: 'cpb-new-developer',
  accessToken: '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'
});


const getShopifyProducts = async () => {
  try {
    const products = await shopify.product.list({
      limit: 5,
      fields: 'id, title, body_html, images'
    });
    const simplifiedProducts = products.map(product => ({
      id: product.id,
      title: product.title,
      body_html: product.body_html,
      image: { src: product.images[0].src }
    }));
    return simplifiedProducts;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getShopifyProducts
};
