const Expense = require('../models/expense');

// exports.getAddExpense = (req, res, next) => {
//   res.render('admin/add-user', {
//     pageTitle: 'Add Product',
//     path: '/admin/add-users',
//     editing : false
//   });
// };

exports.postAddExpense = (req, res, next) => {
  const amount = req.body.amount;
  const description = req.body.description;
  const category = req.body.category;
  Expense.create({
    amount : amount,
    description : description,
    category : category
  })
  .then(result =>{
    res.status(200);
  })
  .catch(err => {
    res.status(500).json({ error: err})
  })
  //res.redirect('/admin/users');
};

exports.getExpenses = (req, res, next) => {
  Expense.findAll()
  .then(expenses=>{
    res.status(200).json({allExpenses: expenses})
  })
  .catch(err => res.status(500).json({error: err}));
};

exports.postDeleteExpense = async (req, res, next) => {
  const prodId = req.params.id;
 await Expense.findByPk(prodId)
  .then(expenses =>{
   return expenses.destroy()
})
.then(result =>{
  res.status(200)
})
.catch(err => res.status(500).json({error: err}));
//res.redirect('/admin/users');
 
};
exports.postEditExpense = async (req, res, next) => {
  const prodId = req.params.id;
 await Expense.findByPk(prodId)
  .then(expenses =>{
   return expenses.destroy()
})
.then(result =>{
  res.status(200)
})
.catch(err => res.status(500).json({error: err}));
//res.redirect('/admin/users');
 
};

