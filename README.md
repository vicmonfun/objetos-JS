# objetos-JS

## Ejercicio

Trabajaremos los objetos de los más simples a los más complicados. Resolviendo el ejercicio por iteraciones

Hemos recibido una petición de la biblioteca municipal para enviarles un ejemplo de organización de su registro:

1. Quieren marcar la información de los usuarios (user id y nombre completo), así como los libros que tienen en prestamo.
2. De cada libro, quieren la siguiente información: título, autor, categoría y [ISBN](https://en.wikipedia.org/wiki/International_Standard_Book_Number).

Dividamos el problema en pequeñas partes:

### Iteración 1

Primero, se ha de crear el objeto `user`. Algo así:

```javascript
let user = { name: "Nick", id: 7 };
```
Cread vuestro propio objeto de usuario

### Iteración 2

Crear objetos `book`. Crear dos libros diferentes (tus libros favoritos) con los siguientes datos: Title, Author, ISBN and Category.

```javascript
var book1 = { title: "The Catcher in the Rye", author: "J.D Salinger", isbn: "0316769487", category: "Classic Literature" };
var book2 = { title: "To Kill a Mockingibrd", author: "Harper Lee", isbn: "0446310786", category: "Classic Literature" };
```

### Iteración 3

Siguiente paso. Relacionar los libros con el usuario. Un usuario puede tener varios libros en préstamo al mismo tiempo.
Cread un **array** dentro del usuario que represente los libros. El array debe contener los libros creados.

**Usa la notación de `punto` para añadir una nueva clave al objeto usuario.**

### Iteración 4

Ahora, habría que crear un objeto `library` y añadir el objeto usuario. De nuevo, tendremos varios usuarios de la biblioteca así que habría que crear un array para almacenarlos todos.

```javascript
var library = [];
```

Tres pasos por tanto:
- Añadir el array de libros al objeto `user`
- Crear el array `library`
- Añadir el objeto `user` al arraky `library`.

### Iteración 5

Ahora tenemos un nuevo libro en préstamo. Por tanto, habrá que añadir un nuevo libro al array `user.books`. Pero ahora el `user` está dentro del objeto `library`. Hay que acceder a `library`, después a `user` y, finalmente al array `books` para añadir el nuevo libro.

```javascript
var book3 = {};
```

### Bonus track

Ahora **iterad** sobre usuarios y libros para obtener una lista de los usuarios y los libros que tiene cada usuario. Por ejemplo:

```
Libros alumno1:

- JavaScript - The Good Parts, Douglas Crockford
- JavaScript - The Definitive Guide, David Flanagan
- High Performance JavaScript, Nicholas C. Zakas
```

**En este caso tenenmos sólo un usuario. Añade otro con sus libros y lista los libros de los dos usuarios.**
