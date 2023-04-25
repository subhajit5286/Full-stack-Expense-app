const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
//router.get('/add-users', adminController.getAddUser);

// /admin/products => GET
router.get('/expenses', adminController.getExpenses);

// /admin/add-product => POST
router.post('/add-expense', adminController.postAddExpense);

router.post('/edit-expense/:id', adminController.postEditExpense);
router.post('/delete-expense/:id', adminController.postDeleteExpense);
module.exports = router;
