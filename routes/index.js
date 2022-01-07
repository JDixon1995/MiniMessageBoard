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
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini MessageBoard', messages: messages });
});

router.post('/new', (req, res) => {
  
})

module.exports = router;
