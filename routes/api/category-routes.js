const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    attributes: [
      'id',
      'category_name'], // this is the info included in the Category.js model
    
      include: [{
      
      model: Product, // bring in data from Product.js
      attributes:[
        'id', 
        'product_name', 
        'price', 'stock', 
        'category_id'] // specify the data you want from the model
    }]
  }).then(dbCategoryData => res.json(dbCategoryData)) // return data from the findAll function
  .catch(err => {
    console.log(err);
    res.status(500).json(err) // return an error if caught
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id // allow user to be specific in search by the catregory id
    },

    attributes: [
      'id', 
      'category_name'],
      include: [{
        model: Product,
        attributes: [
          'id',
          'product_name',
          'price',
          'stock',
          'category_id'
        ]
    }]
 }).then(dbCategoryData => {
   if (!dbCategoryData) { // if the client searches an id that doesn't exist an error message returns
     res.status(404).json({ message: 'No category with this id was found!'});
     return;
   }
   res.json(dbCategoryData);
 }).catch(err => {
   console.log(err);
   res.status(500).json(err)
 });

});

router.post('/', (req, res) => {
  // create a new category
  //expects { Category Name: 'Movies'}
  Category.create({
    category_name: req.body.category_name // req.body populates the column in the Category.js table model ( INSERT INTO)
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    where: {
     id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if (dbCategoryData) {
      res.status(404).json({ message: 'No category with this id was found!' });
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category with this id was found!'});
      return;
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
