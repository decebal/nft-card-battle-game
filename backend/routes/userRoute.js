const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');

router.get('/', userController.getUsers);
router.get('/get/battle-deck', userController.getBattleDeck)
router.post('/add/battle-deck', userController.addToBattleDeck);
router.post('/login', userController.loginUser);
router.post('/update/wallet-address', userController.updateWalletAddress);

module.exports = router;