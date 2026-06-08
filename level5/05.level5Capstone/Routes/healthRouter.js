//after following "councilRouter.js" and selecting "Health Advisor", this route will present the Health Dashboard
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Health Dashboard' });
});

module.exports = router;
