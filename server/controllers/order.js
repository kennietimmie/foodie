import orderService from '../services/order'

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

const orderController = {
  allOrders (req, res) {
    const allOrders = orderService.allOrders()
    if (isEmpty(allOrders)) {
      return res.status(200).send({
        success: 'true',
        message: 'This is embarrassing, no order were found',
        data: allOrders

      })
    } else {
      return res.status(200).send({
        success: 'true',
        message: 'All found orders',
        data: allOrders

      })
    }
  },
  addAOrder (req, res) {
    const newOrder = orderService.addAOrder(req.body)
    if (isEmpty(newOrder)) {
      return res.status(400).send({
        success: 'false',
        message: 'order name and price are required',
        data: newOrder
      })
    } else {
      return res.status(201).send({
        success: 'true',
        message: 'order was successfully added',
        data: newOrder
      })
    }
  },
  getAOrder (req, res) {
    const id = Number(req.params.id)
    const foundOrder = orderService.getAOrder(id)

    if (isEmpty(foundOrder)) {
      return res.status(404).send({
        success: 'false',
        message: 'No order was found',
        data: foundOrder

      })
    } else {
      return res.status(200).send({
        success: 'true',
        message: 'order was found successfully',
        data: foundOrder

      })
    }
  },
  updateAOrder (req, res) {
    const id = Number(req.params.id)
    const updatedOrder = orderService.updateAOrder(req.body, id)

    if (isEmpty(updatedOrder)) {
      return res.status(404).send({
        success: 'false',
        message: 'Sorry, your order does not exist',
        data: updatedOrder

      })
    } else {
      return res.status(200).send({
        success: 'true',
        message: 'order updated successfully',
        data: updatedOrder

      })
    }
  },
  deleteAOrder (req, res) {
    const id = Number(req.params.id)
    const deletedOrder = orderService.deleteAOrder(id)

    if (isEmpty(deletedOrder)) {
      return res.status(404).send({
        success: 'false',
        message: 'No order was found',
        data: deletedOrder

      })
    } else {
      return res.status(200).send({
        success: 'true',
        message: 'order was successfully deleted',
        data: deletedOrder
      })
    }
  }
}

export default orderController
