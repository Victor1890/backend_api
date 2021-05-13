
# API for Furt-Project

## Installations

It is necessary to have software or settings already preset on your PC.

## Technologies

* [Node and NPM](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [ExpressJs](https://expressjs.com/)
* [VS Code](https://code.visualstudio.com/)

```bash
git clone https://gitlab.com/Victor1890/proyect-test-php-laravel.git
```

```bash
cd proyect-test-php-laravel
```

En los archivos que aparecen en la carpera `resources/views` deben editar los archivos `orders.blade.php` y `select.blade.php` para así poder editar las vistas.

```bash
cd resources/views
```

## Routes ó Rutas

Usando VSCode, open the files `web.php` para agregar o editar las rutas,

```php
Route::get('/', function () {
    return view('welcome');
});
Route::get('orders', function(){
    return view('orders');
});
Route::get('orders/selected', function(){
    return view('select');
});
```

## Screenshot

![img](design/img1.png)

![img](design/img2.png)

![img](design/img3.png)

## License

[MIT](https://choosealicense.com/licenses/mit/)