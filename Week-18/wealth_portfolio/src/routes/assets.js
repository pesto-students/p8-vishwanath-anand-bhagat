const express = require('express');
const router = express.Router();
const assetController = require('../controllers/asset');

const isAuthenticated = require('../middlewares/isAuthenticated');

router.use(isAuthenticated);

router.post('/', assetController.createAsset);
router.get('/', assetController.getAssets);
router.get('/:id', assetController.getAssetById);
router.put('/:id', assetController.updateAsset);
router.delete('/:id', assetController.deleteAsset);

module.exports = router;
