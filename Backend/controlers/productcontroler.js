
import Product from '../model/Product.model.js';
export const  putProduct = async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedProduct){
        return res.status(404).send('Product not found');
        }
        res.send(updatedProduct);
        console.log('Product updated successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };

export const getPruduct = async (req, res) => {
    try {
      const products = await Product.find();
      res.send(products);
      console.log('Products fetched successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
  };

export const deleteProducts = async (req, res) => {
    try {
      const result = await Product.findByIdAndDelete(req.params.productid);
      if (!result){
        return res.status(404).send('Product not found');
        }
        res.send(result);
        console.log('Product deleted successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };

export const postProduct =  async (req ,res) => {
    const product = new Product(req.body);
    if (!product.name || !product.price || !product.image || !product.description) {
        return res.status(400).send('Please fill all fields');
     }
    try {
      const result = await product.save();
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };