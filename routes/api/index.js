const router = require('express').Router();

const locationRoutes = require('./locationRoutes');
const travellerRoutes = require('./travelerRoutes');
const tripsRoutes = require('./tripsRoutes');

router.use('/location', locationRoutes);
router.use('/traveller', travellerRoutes);
router.use('/trips', tripsRoutes);

module.exports = router;