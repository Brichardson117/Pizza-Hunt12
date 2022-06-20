const router = require('express').Router();
const {
    getAllPizzas,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controllers');

// Set up GET all and POST a /api/pizzas


// instead of creating duplicate routes for the individual HTTP methods, we can combine them!

// /api/pizzas
router
.route('/')
.get(getAllPizzas)
.post(createPizza);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id

// /api/pizzas/:id
router
.route('/:id')
.get(getPizzaById)
.put(updatePizza)
.delete(deletePizza);

module.exports = router;