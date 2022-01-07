var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hello There',
    user: 'Obi-Wan',
    added: new Date()
  },
  {
    text: 'General Kenobi!',
    user: "Grievous",
    added: new Date()
  },
  {
    text: 'Check this out!',
    user: 'Jimmy',
    added: new Date()
  },
  {
    text: 'Oh, no way!',
    user: 'Shantae',
    added: new Date()
  }
]

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.render('index', { title: 'Mini MessageBoard', messages: messages });
});

router.get('/new', async (req, res) => {
  res.render('form', { title: 'New Post'})
})

router.post('/new', async (req, res) => {
  const messageText = req.body.messageText
  const userText = req.body.userText
  messages.push({
    text: messageText,
    user: userText,
    added: new Date()
  })
  res.redirect('/')
})

module.exports = router;
