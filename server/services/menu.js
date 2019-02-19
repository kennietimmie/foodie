import data from '../data/data'
import Menu from '../models/menu'

const menuService = {
  allMenus () {
    const validMenus = data.meals.map((menu) => {
      const newMenu = new Menu()

      newMenu.id = menu.id
      newMenu.name = menu.name
      newMenu.price = menu.price
      return newMenu
    })
    // return all menus
    return validMenus
  },
  addAMenu (menu) {
    //  Check to make sure menu
    //  contains the right object, and values
    if (typeof menu === 'object' && typeof menu.name === 'string' && typeof menu.price === 'string') {
      // Remove trialling white space(s)
      menu.name = menu.name.trim()
      menu.price = menu.price.trim()

      // Return an empty object if
      // any of the parameter is empty
      if (menu.price === '' || menu.name === '') {
        return {}
      } else {
        // Get the length of the of
        // database
        const menuLength = data.meals.length
        const lastId = data.meals[menuLength - 1].id
        const newId = lastId + 1

        // add the menu to the database
        menu = { id: newId, name: menu.name, price: menu.price }
        data.meals.push(menu)

        // return the added menu
        return menu
      }
    } else {
      // Return epmty object
      // if the test fails
      return {}
    }
  },
  getAMenu (id) {
    id = Number(id)
    const newMenu = new Menu()

    const menu = data.meals.find(menu => menu.id === id)

    //  Check to make sure menu
    //  contains the right object, and values
    if (typeof menu === 'undefined') {
      // Return empty object
      // if test is successfull
      return newMenu
    } else {
      return menu
    }
  },
  deleteAMenu (id) {
    id = Number(id)
    const newMenu = new Menu()
    //  Check to make sure menu
    //  contains the right object, and values
    if (typeof id === 'number' && data.meals) {
      data.meals.map((menu, index) => {
        if (menu.id === id) {
          data.meals.splice(index, 1)

          newMenu.id = menu.id
          newMenu.name = menu.name
          newMenu.price = menu.price
          return newMenu
        } else {
          return newMenu
        }
      })

      return newMenu
    } else {
      return newMenu
    }
  },
  updateAMenu (updateMenu, ID) {
    const newMenu = new Menu()
    //  Check to make sure updatemenu
    //  contains the right object, and values

    if (typeof updateMenu === 'object' && typeof updateMenu.name === 'string' && typeof updateMenu.price === 'string') {
      // Get the id of what will
      // want to update
      const id = Number(ID)

      // Remove trialling white space(s)
      updateMenu.name = updateMenu.name.trim()
      updateMenu.price = updateMenu.price.trim()

      // Return an empty object if
      // any of the parameter is empty
      if (updateMenu.price === '' || updateMenu.name === '') {
        return newMenu
      }
      data.meals.map((menu, index) => {
        // compare the id of the
        // from query with database
        if (menu.id === id) {
        // Add the value to the
        // return object
          newMenu.id = id
          newMenu.name = updateMenu.name
          newMenu.price = updateMenu.price

          // update the specific menu
          // index in the database
          data.meals.splice(index, 1, newMenu)
        }
      })
      return newMenu
    } else {
      return newMenu
    }
  }
}

export default menuService
