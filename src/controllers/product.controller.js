import Product from "../models/Product";

export const createProducts = async (req, res) => {
  const newProduct = new Product(req.body);

  const productSaved = await newProduct.save();

  return res.status(200).json(productSaved);
};

export const getProducts = async (req, res) => {
  const getProduct = await Product.find();

  return res.json(getProduct);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  const getProduct = await Product.findById(id);

  return res.status(200).json(getProduct);
};

export const updateProductById = async (req, res) => {
  const { id } = req.params;

  const productById = await Product.findById(id).catch((error) =>
    console.log("error"),
  );

  if (!productById) {
    return res.status(404).json("The product not found");
  }

  const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  return res.status(200).json(updateProduct);
};

export const deleteProductById = async (req, res) => {
  const { id } = req.params;

  const productById = await Product.findById(id).catch((error) =>
    console.log("error"),
  );

  if (!productById) {
    return res.status(404).json("The product not found");
  }

  await Product.findByIdAndDelete(id);
  return res.status(200).json("The product is delete");
};
