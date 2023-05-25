import Statistic from '../models/Statistic.js'; 

const getAllStatistics = async (req, res) => {
  try {
    const statistics = await Statistic.find();
    res.status(200).json(statistics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStatistic = async (req, res) => {
  try {
    const statistic = await Statistic.findById(req.params.id);
    if (statistic == null) {
      return res.status(404).json({ message: 'Cannot find statistic' });
    }
    res.status(200).json(statistic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createStatistic = async (req, res) => {
  const statistic = new Statistic({
    //ToDo: Hier den Code zum Erstellen eines neuen Statistics hinzufügen
  });

  try {
    const newStatistic = await statistic.save();
    res.status(201).json(newStatistic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateStatistic = async (req, res) => {
  try {
    const statistic = await Statistic.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(statistic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteStatistic = async (req, res) => {
  try {
    await Statistic.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: 'Deleted statistic' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getAllStatistics,
  getStatistic,
  createStatistic,
  updateStatistic,
  deleteStatistic,
};
