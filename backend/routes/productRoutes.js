import express from 'express';

import {
	createProduct,
	createProductReview,
	deleteProduct,
	getProductById,
	getProducts,
	updateProduct,
} from '../controllers/productController.js';

import { admin, protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);
router
	.route('/:id')
	.get(getProductById)
	.delete(protect, admin, deleteProduct)
	.put(protect, admin, updateProduct);

export default router;
