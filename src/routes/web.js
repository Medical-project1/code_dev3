const express=require('express');
const {getHomepage, postCreateUser,getCreatePage,getUpdatePage,postUpdateUser,postDeleteUser,postHandleRemoveUser}=require('../controllers/homeControllers');
const router = express.Router();
router.get('/3', getHomepage);
router.get('/create',getCreatePage);
router.get('/update/:id',getUpdatePage);
router.post('/create-user',postCreateUser)
router.post('/update-user',postUpdateUser);
router.post('/delete-user/:id',postDeleteUser);
router.post('/delete-user',postHandleRemoveUser)
module.exports = router;