const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');
const jwt = require('jsonwebtoken');

const multer = require('multer');

const uploadMiddleware = multer({
  dest: 'uploads/',
});
const fs = require('fs');

const cookieParser = require('cookie-parser');

const bcrypt = require('bcryptjs'); //for hashing password
var salt = bcrypt.genSaltSync(10); // salt= to the hashed password
const secret = 'sdsgdfgzdrgzrdgd4g5f4fgs5dvd6';
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  }),
);

app.use(express.json());
app.use(cookieParser());

mongoose.connect(
  'mongodb+srv://Stephanie:eMsZpNLBcgSfhtxI@cluster0.bp39mje.mongodb.net/?retryWrites=true&w=majority',
);

app.post('/register', async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
      email,
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e.message);
  }

  // res.json('test 4000');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });

  const passOk = bcrypt.compareSync(
    password,
    userDoc.password,
  );
  if (passOk) {
    // logged in
    jwt.sign(
      {
        id: userDoc._id,
        username: userDoc.username,
      },
      secret,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json({
          id: userDoc._id,
          username: userDoc.username,
        });
      },
    );
  } else {
    res.status(400).json('wrong credentials');
  }
});

app.get('/proflie', (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post('/logout', (req, res) => {
  res.cookie('token', '').json('ok');
});

app.post(
  '/createpost',
  uploadMiddleware.single('file'),
  async (req, res) => {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;

    fs.renameSync(path, newPath);

    const { tile, summary, content } = req.body;
    const postDoc = await Post.create({
      tile,
      summary,
      content,
      cover: newPath,
    });
    res.json(postDoc);
  },
);/// collect the data from the create post form 


app.get('/createpost', async (req,res) => {
  const posts = await Post.find()
  res.json(posts)
})


app.listen(4000);

//mongodb+srv://Stephanie:eMsZpNLBcgSfhtxI@cluster0.bp39mje.mongodb.net/?retryWrites=true&w=majority
//Stephanie=>eMsZpNLBcgSfhtxI
