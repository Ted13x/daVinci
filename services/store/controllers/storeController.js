import Store from '../models/Store.js'; 

const getAllStores = async (req, res) => {
  try {
    const stores = await Store.find();
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStore = async (req, res) => {
  try {
    const store = await Store.findById(req.params.id);
    if (store == null) {
      return res.status(404).json({ message: 'Cannot find store' });
    }
    res.status(200).json(store);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const createStore = async (req, res) => {
    const store = new Store({
      //ToDo: Hier den Code zum Erstellen eines neuen Stores hinzufügen
    });
  
    try {
      const newStore = await store.save();
      res.status(201).json(newStore);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


const updateStore = async (req, res) => {
  try {
    const store = await Store.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(store);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteStore = async (req, res) => {
  try {
    await Store.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: 'Deleted store' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  createStore,
  getAllStores,
  getStore,
  updateStore,
  deleteStore,
};
