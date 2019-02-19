import menuService from '../services/menu'

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

const menuController = {
  allMenus (req, res) {
    const allMenus = menuService.allMenus()
    if (isEmpty(allMenus)) {
      return res.status(200).send({
        success: 'true',
        message: 'This is embarrassing, no menu were found',
        data: allMenus

      })
    } else {
      return res.status(200).send({
        success: 'true',
        message: 'All found menus',
        data: allMenus

      })
    }
  },
  addAMenu (req, res) {
    const newMenu = menuService.addAMenu(req.body)
    if (isEmpty(newMenu)) {
      return res.status(400).send({
        success: 'false',
        message: 'menu name and price are required',
        data: newMenu
      })
    } else {
      return res.status(201).send({
        success: 'true',
        message: 'menu was successfully added',
        data: newMenu
      })
    }
  },
  getAMenu (req, res) {
    const id = Number(req.params.id)
    const foundMenu = menuService.getAMenu(id)

    if (isEmpty(foundMenu)) {
      return res.status(404).send({
        success: 'false',
        message: 'No menu was found',
        data: foundMenu

      })
    } else {
      return res.status(200).send({
        success: 'true',
        message: 'menu was found successfully',
        data: foundMenu

      })
    }
  },
  updateAMenu (req, res) {
    const id = Number(req.params.id)
    const updatedMenu = menuService.updateAMenu(req.body, id)

    if (isEmpty(updatedMenu)) {
      return res.status(404).send({
        success: 'false',
        message: 'Sorry, your menu does not exist',
        data: updatedMenu

      })
    } else {
      return res.status(200).send({
        success: 'true',
        message: 'menu updated successfully',
        data: updatedMenu

      })
    }
  },
  deleteAMenu (req, res) {
    const id = Number(req.params.id)
    const deletedMenu = menuService.deleteAMenu(id)

    if (isEmpty(deletedMenu)) {
      return res.status(404).send({
        success: 'false',
        message: 'No menu was found',
        data: deletedMenu

      })
    } else {
      return res.status(200).send({
        success: 'true',
        message: 'menu was successfully deleted',
        data: deletedMenu
      })
    }
  }
}

export default menuController
