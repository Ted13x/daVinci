import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const authenticateUser = async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    const validPassword = await bcrypt.compare(req.body.password, user.password);
  
    if (user && validPassword) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      
      res.cookie('token', token, { httpOnly: true });
      res.status(200).json({ message: 'Authenticated successfully' });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  };


const saltRounds = 10;

const checkAuth = (req, res) => {
  const token = req.cookies.token;
  console.log('Generated Token:', token);

  if (!token) {
      return res.status(401).json({ message: 'Not authenticated' });
  } 

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
          return res.status(401).json({ message: 'Token is not valid' });
      }
      
      res.status(200).json({ message: 'Authenticated' });
  });
};

const registerUser = async (req, res) => {
  console.log(req.body);
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const user = new User({
      email: req.body.email,
      name: req.body.name,
      password: hashedPassword,
    });
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

const logoutUser = (req, res) => {
  res.clearCookie('token', { path: '/', domain: 'localhost', httpOnly: true });
  res.status(200).send({ message: 'Logged out successfully.' });
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};

export default {
    checkAuth,
    authenticateUser,
    registerUser,
    getUser,
    updateUser,
    logoutUser,
    deleteUser,
  };
  