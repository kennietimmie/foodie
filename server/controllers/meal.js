import mealService from '../services/meal'

const isEmpty = (obj) => {
  if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0 || obj.id === null || obj.name === null || obj.price === null) {
      return true
    }
  } else if (typeof obj === 'string') {
    return obj === ''
  } else if (typeof obj === 'undefined') {
    return true
  } else if (typeof obj === 'boolean') {
    return obj === false
  }
}

const mealController = {
  allMeals (req, res) {
    const allMeals = mealService.allMeals()
    if (isEmpty(allMeals)) {
      return res.status(200).send({
        success: 'true',
        message: 'This is embarrassing, no meal were found',
        data: allMeals

      })
    } else {
      return res.status(200).send({
        success: 'true',
        message: 'All found Meals',
        data: allMeals

      })
    }
  },
  addAMeal (req, res) {
    const newMeal = mealService.addAMeal(req.body)
    if (isEmpty(newMeal)) {
      return res.status(400).send({
        success: 'false',
        message: 'Meal name and price are required',
        data: newMeal
      })
    } else {
      return res.status(201).send({
        success: 'true',
        message: 'Meal was successfully added',
        data: newMeal
      })
    }
  },
  getAMeal (req, res) {
    const id = Number(req.params.id)
    const foundMeal = mealService.getAMeal(id)

    if (isEmpty(foundMeal)) {
      return res.status(404).send({
        success: 'false',
        message: 'No meal was found',
        data: foundMeal

      })
    } else {
      return res.status(200).send({
        success: 'true',
        message: 'Meal was found successfully',
        data: foundMeal

      })
    }
  },
  updateAMeal (req, res) {
    const id = Number(req.params.id)
    const updatedMeal = mealService.updateAMeal(req.body, id)

    if (isEmpty(updatedMeal)) {
      return res.status(404).send({
        success: 'false',
        message: 'Sorry, your meal does not exist',
        data: updatedMeal

      })
    } else {
      return res.status(200).send({
        success: 'true',
        message: 'Meal updated successfully',
        data: updatedMeal

      })
    }
  },
  deleteAMeal (req, res) {
    const id = Number(req.params.id)
    const deletedMeal = mealService.deleteAMeal(id)

    if (isEmpty(deletedMeal)) {
      return res.status(404).send({
        success: 'false',
        message: 'No meal was found',
        data: deletedMeal

      })
    } else {
      return res.status(200).send({
        success: 'true',
        message: 'Meal was successfully deleted',
        data: deletedMeal
      })
    }
  }
}

export default mealController
