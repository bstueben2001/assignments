//after following "councilRouter.js" and selecting "Diplomacy Advisor", this route will present the Diplomacy Dashboard
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Diplomacy Dashboard' });
});

module.exports = router;
