import { Router } from 'express'

// controller
import mealController from '../controllers/meal'

const router = Router()

router.get('/', mealController.allMeals)
router.post('/', mealController.addAMeal)
router.get('/:id', mealController.getAMeal)
router.delete('/:id', mealController.deleteAMeal)
router.put('/:id', mealController.updateAMeal)

export default router
