import data from '../data/data'
import Meal from '../models/meal'

const mealService = {
  allMeals () {
    const validMeals = data.meals.map((meal) => {
      const newMeal = new Meal()

      newMeal.id = meal.id
      newMeal.name = meal.name
      newMeal.price = meal.price
      return newMeal
    })
    // return all menus
    return validMeals
  },
  addAMeal (meal) {
    //  Check to make sure meal
    //  contains the right object, and values
    if (typeof meal === 'object' && typeof meal.name === 'string' && typeof meal.price === 'string') {
      // Remove trialling white space(s)
      meal.name = meal.name.trim()
      meal.price = meal.price.trim()

      // Return an empty object if
      // any of the parameter is empty
      if (meal.price === '' || meal.name === '') {
        return {}
      } else {
        // Get the length of the of
        // database
        const mealLength = data.meals.length
        const lastId = data.meals[mealLength - 1].id
        const newId = lastId + 1

        // add the meal to the database
        meal = { id: newId, name: meal.name, price: meal.price }
        data.meals.push(meal)

        // return the added meal
        return meal
      }
    } else {
      // Return epmty object
      // if the test fails
      return {}
    }
  },
  getAMeal (id) {
    id = Number(id)
    const newMeal = new Meal()

    const meal = data.meals.find(meal => meal.id === id)

    //  Check to make sure meal
    //  contains the right object, and values
    if (typeof meal === 'undefined') {
      // Return empty object
      // if test is successfull
      return newMeal
    } else {
      return meal
    }
  },
  deleteAMeal (id) {
    id = Number(id)
    const newMeal = new Meal()
    //  Check to make sure meal
    //  contains the right object, and values
    if (typeof id === 'number' && data.meals) {
      data.meals.map((meal, index) => {
        if (meal.id === id) {
          data.meals.splice(index, 1)

          newMeal.id = meal.id
          newMeal.name = meal.name
          newMeal.price = meal.price
          return newMeal
        } else {
          return newMeal
        }
      })

      return newMeal
    } else {
      return newMeal
    }
  },
  updateAMeal (updateMeal, ID) {
    const newMeal = new Meal()
    //  Check to make sure updateMeal
    //  contains the right object, and values

    if (typeof updateMeal === 'object' && typeof updateMeal.name === 'string' && typeof updateMeal.price === 'string') {
      // Get the id of what will
      // want to update
      const id = Number(ID)

      // Remove trialling white space(s)
      updateMeal.name = updateMeal.name.trim()
      updateMeal.price = updateMeal.price.trim()

      // Return an empty object if
      // any of the parameter is empty
      if (updateMeal.price === '' || updateMeal.name === '') {
        return newMeal
      }
      data.meals.map((meal, index) => {
        // compare the id of the
        // from query with database
        if (meal.id === id) {
        // Add the value to the
        // return object
          newMeal.id = id
          newMeal.name = updateMeal.name
          newMeal.price = updateMeal.price

          // update the specific menu
          // index in the database
          data.meals.splice(index, 1, newMeal)
        }
      })
      return newMeal
    } else {
      return newMeal
    }
  }
}

export default mealService
