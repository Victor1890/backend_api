
# API for Furt-Project

## Installations

It is necessary to have software or settings already preset on your PC.

### Technologies

* [Node and NPM](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [ExpressJs](https://expressjs.com/)
* [VS Code](https://code.visualstudio.com/)

### Clone project

```bash
git clone https://github.com/Victor1890/backend_api.git backend_api_furtProject
```

```bash
cd backend_api_furtProject
```

```bash
npm install && npm run dev
```

## Routes

Using VSCode, open the files `src/routers/products.routes.js` to be able to edit or add new functionalities.

```js
router.post("/", productCtrls.createProducts);
router.get("/", productCtrls.getProducts);
router.get("/:id", productCtrls.getProductById);
router.put("/:id", productCtrls.updateProductById);
router.delete("/:id", productCtrls.deleteProductById);
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
