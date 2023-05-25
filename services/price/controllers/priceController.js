import Price from '../models/Price.js'; 

const getAllPrices = async (req, res) => {
  try {
    const prices = await Price.find();
    res.status(200).json(prices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPrice = async (req, res) => {
  try {
    const price = await Price.findById(req.params.id);
    if (price == null) {
      return res.status(404).json({ message: 'Cannot find price' });
    }
    res.status(200).json(price);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPrice = async (req, res) => {
  const price = new Price({
    //ToDo: Hier den Code zum Erstellen eines neuen Prices hinzufügen
  });

  try {
    const newPrice = await price.save();
    res.status(201).json(newPrice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatePrice = async (req, res) => {
  try {
    const price = await Price.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(price);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletePrice = async (req, res) => {
  try {
    await Price.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: 'Deleted price' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getAllPrices,
  getPrice,
  createPrice,
  updatePrice,
  deletePrice,
};

