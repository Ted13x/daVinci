import Cart from '../models/Cart.js'; 

// getAllCarts is just for Admins
const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (cart == null) {
      return res.status(404).json({ message: 'Cannot find cart' });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCart = async (req, res) => {
  const cart = new Cart({
    //ToDo: Hier den Code zum Erstellen eines neuen Carts hinzufügen
  });

  try {
    const newCart = await cart.save();
    res.status(201).json(newCart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: 'Deleted cart' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getAllCarts,
  getCart,
  createCart,
  updateCart,
  deleteCart,
};
