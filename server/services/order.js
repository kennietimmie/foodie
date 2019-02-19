import data from '../data/data'
import Order from '../models/order'

const orderService = {
  allOrders () {
    const validOrders = data.meals.map((order) => {
      const newOrder = new Order()

      newOrder.id = order.id
      newOrder.name = order.name
      newOrder.price = order.price
      return newOrder
    })
    // return all menus
    return validOrders
  },
  addAOrder (order) {
    //  Check to make sure order
    //  contains the right object, and values
    if (typeof order === 'object' && typeof order.name === 'string' && typeof order.price === 'string') {
      // Remove trialling white space(s)
      order.name = order.name.trim()
      order.price = order.price.trim()

      // Return an empty object if
      // any of the parameter is empty
      if (order.price === '' || order.name === '') {
        return {}
      } else {
        // Get the length of the of
        // database
        const orderLength = data.meals.length
        const lastId = data.meals[orderLength - 1].id
        const newId = lastId + 1

        // add the order to the database
        order = { id: newId, name: order.name, price: order.price }
        data.meals.push(order)

        // return the added order
        return order
      }
    } else {
      // Return epmty object
      // if the test fails
      return {}
    }
  },
  getAOrder (id) {
    id = Number(id)
    const newOrder = new Order()

    const order = data.meals.find(order => order.id === id)

    //  Check to make sure order
    //  contains the right object, and values
    if (typeof order === 'undefined') {
      // Return empty object
      // if test is successfull
      return newOrder
    } else {
      return order
    }
  },
  deleteAOrder (id) {
    id = Number(id)
    const newOrder = new Order()
    //  Check to make sure order
    //  contains the right object, and values
    if (typeof id === 'number' && data.meals) {
      data.meals.map((order, index) => {
        if (order.id === id) {
          data.meals.splice(index, 1)

          newOrder.id = order.id
          newOrder.name = order.name
          newOrder.price = order.price
          return newOrder
        } else {
          return newOrder
        }
      })

      return newOrder
    } else {
      return newOrder
    }
  },
  updateAOrder (updateOrder, ID) {
    const newOrder = new Order()
    //  Check to make sure updateorder
    //  contains the right object, and values

    if (typeof updateOrder === 'object' && typeof updateOrder.name === 'string' && typeof updateOrder.price === 'string') {
      // Get the id of what will
      // want to update
      const id = Number(ID)

      // Remove trialling white space(s)
      updateOrder.name = updateOrder.name.trim()
      updateOrder.price = updateOrder.price.trim()

      // Return an empty object if
      // any of the parameter is empty
      if (updateOrder.price === '' || updateOrder.name === '') {
        return newOrder
      }
      data.meals.map((order, index) => {
        // compare the id of the
        // from query with database
        if (order.id === id) {
        // Add the value to the
        // return object
          newOrder.id = id
          newOrder.name = updateOrder.name
          newOrder.price = updateOrder.price

          // update the specific menu
          // index in the database
          data.meals.splice(index, 1, newOrder)
        }
      })
      return newOrder
    } else {
      return newOrder
    }
  }
}

export default orderService
