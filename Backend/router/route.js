import express from 'express';
const router = express.Router();
import { deleteProducts, postProduct, putProduct,getPruduct } from '../controlers/productcontroler.js';


  router.post('/', postProduct);
  router.delete('/:id', deleteProducts);
  router.get('/', getPruduct);
  router.put('/:id', putProduct)

export default router;