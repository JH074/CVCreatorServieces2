const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/requireAuth');

const {
    createProfile,
    getProfiles,
    getOneProfile,
    updateProfile,
    deleteOneProfile
} = require('../controllers/profile.controller')

router.use(requireAuth);

router.get("/", getProfiles);
router.get("/:page-:limit", getProfiles);
router.get("/:id", getOneProfile);

router.patch("/:id", updateProfile);
router.post("/", createProfile);
router.delete("/:id", deleteOneProfile);


module.exports = router;