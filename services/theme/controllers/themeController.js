import Theme from '../models/Theme.js'; 

const getAllThemes = async (req, res) => {
  try {
    const themes = await Theme.find();
    res.status(200).json(themes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTheme = async (req, res) => {
  try {
    const theme = await Theme.findById(req.params.id);
    if (theme == null) {
      return res.status(404).json({ message: 'Cannot find theme' });
    }
    res.status(200).json(theme);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTheme = async (req, res) => {
  const theme = new Theme({
    //ToDo: Hier den Code zum Erstellen eines neuen Themes hinzufügen
  });

  try {
    const newTheme = await theme.save();
    res.status(201).json(newTheme);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateTheme = async (req, res) => {
  try {
    const theme = await Theme.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(theme);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTheme = async (req, res) => {
  try {
    await Theme.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: 'Deleted theme' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getAllThemes,
  getTheme,
  createTheme,
  updateTheme,
  deleteTheme,
};
