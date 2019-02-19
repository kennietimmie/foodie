import { Router } from 'express'

// controller
import menuController from '../controllers/menu'

const router = Router()

router.get('/', menuController.allMenus)
router.post('/', menuController.addAMenu)
router.get('/:id', menuController.getAMenu)
router.delete('/:id', menuController.deleteAMenu)
router.put('/:id', menuController.updateAMenu)

export default router
