# desafio-clase-8

API RESTful de productos. En detalle, que incorpore las siguientes rutas:

- GET '/api/productos' -> devuelve todos los productos.
- GET '/api/productos/:id' -> devuelve un producto según su id.
- POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
- PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
- DELETE '/api/productos/:id' -> elimina un producto según su id.

Cada producto estará representado por un objeto con el siguiente formato:

```
{
    title: (nombre del producto),
    price: (precio),
    thumbnail: (url al logo o foto del producto)
}
```

## Notas Adicionales:

- La colección `DesafioClase8.postman_collection.json` incluye todos los endpoints para Postman.
- La ruta `/static/index.html` provee de un formulario que interactúa con el método POST de la API.

## Instalación

Con nodemon:

`nodemon server.js`

O bien:

`npm install`

`npm run serve`
