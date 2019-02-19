import { Router } from 'express'

// controller
import orderController from '../controllers/order'

const router = Router()

router.get('/', orderController.allOrders)
router.post('/', orderController.addAOrder)
router.get('/:id', orderController.getAOrder)
router.delete('/:id', orderController.deleteAOrder)
router.put('/:id', orderController.updateAOrder)

export default router
