//after following "councilRouter.js" and selecting "Battle Advisor", this route will present the Battle Dashboard
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Battle Dashboard' });
});

module.exports = router;
