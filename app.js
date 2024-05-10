// app.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./sequelize'); // Import your Sequelize setup
const Profile = require('./models/profile'); // Import your Profile model

const app = express();
app.use(bodyParser.json());

// Define your POST API route to receive data
app.post('/api/profiles', async (req, res) => {
  try {
    const { name, url, about, bio, location, followerCount, connectionCount } = req.body;
    const profile = await Profile.create({
      name,
      url,
      about,
      bio,
      location,
      followerCount,
      connectionCount
    });
    res.status(201).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
