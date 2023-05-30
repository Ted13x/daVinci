import Product from '../models/Product.js'; 

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Cannot find product' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    let productData = req.body;

    productData.prices = productData.prices.filter(price => {
      // Überprüft, ob der Preis und der Preistyp vorhanden sind
      if (!price.priceType || !price.value) {
        return false;
      }
      
      // Überprüft, ob der Preis vom Typ 'b2_i' ist und ob eine userId vorhanden ist
      if (price.priceType === 'b2_i' && !price.userId) {
        return false;
      }

      return true;
    });

    const product = new Product(productData);
    const savedProduct = await product.save();

    res.json({
      success: true,
      message: "Product created successfully",
      data: savedProduct
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};



const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: 'Deleted product' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
