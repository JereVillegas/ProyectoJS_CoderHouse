// Variables Globales
let id = 0;
let nombre = "";
let precio = 0;
let stock = 0;
let repetir = true;
let respuesta = 0;
let mostarProductos = "";
let arregloProductos = [];

class Producto {
  constructor(id, nombre, precio, stock) {
    (this.id = id),
      (this.nombre = nombre),
      (this.precio = precio),
      (this.stock = stock),
      (this.subtotalProducto = 0);
  }

  subtotalPorProducto() {
    this.subtotalProducto = this.precio * this.stock;
  }
}

respuesta = parseInt(
  prompt(
    "Hola! Acá podrás ingresar el stock de cereales con sus características (nombre, precio y stock). El sistema calculará automáticamente el subtotal. Seleccioná la opción correspondiente y luego hacé click en aceptar. \n\n1.Agregar nuevo cereal \n2.Salir\n"
  )
);

do {
  if (respuesta == 1) {
    ingresarProducto();
    alert("Ingresaste un cereal con éxito");
    respuesta = parseInt(
      prompt(
        "Seleccioná la opción correspondiente y luego hacé click en aceptar. \n\n1.Agregar nuevo cereal \n2.Salir\n"
      )
    );
  } else if (respuesta == 2) {
    repetir = false;
    alert("Elegiste salir");
  } else {
    alert(
      "Ingresaste una opción incorrecta. Recordá que para agregar un nuevo cereal debés seleccionar (1) y para salir (2)"
    );
    respuesta = parseInt(
      prompt(
        "Seleccioná la opción correspondiente y luego hacé click en aceptar. \n\n1.Agregar nuevo cereal \n2.Salir\n"
      )
    );
  }
} while (repetir);

arregloProductos.forEach(recorrerArreglo);
alert(JSON.stringify(arregloProductos));
console.log(`Arreglo productos: ${JSON.stringify(arregloProductos)}`);
console.log(arregloProductos);
console.log(typeof `Arreglo productos: ${JSON.stringify(arregloProductos)}`);
console.log(typeof arregloProductos);

document.getElementById("mostrar").innerHTML = mostarProductos;
eliminarProducto();

mostarProductos = "";
arregloProductos.forEach(recorrerArreglo);
alert(JSON.stringify(arregloProductos));
console.log(arregloProductos);
document.getElementById("mostrar").innerHTML = mostarProductos;

// funciones
function ingresarProducto() {
  let nuevoProducto;

  id = ++id;
  nombre = prompt(`Introduzca el nombre del producto${id}.`);
  precio = prompt(`Introduzca el precio del producto${id}.`);
  stock = prompt(`Introduzca la stock del producto${id}.`);
  nuevoProducto = new Producto(id, nombre, precio, stock);
  nuevoProducto.subtotalPorProducto();
  console.log(nuevoProducto);
  arregloProductos.push(nuevoProducto);
}

function recorrerArreglo(item, index) {
  mostarProductos += index + ": " + JSON.stringify(item) + "<br>";
}

function eliminarProducto() {
  let preguntar = true;
  let respuesta = "";
  let borrarProducto = "";
  let productoEncontrado = "";

  respuesta = parseInt(
    prompt("¿Querés eliminar un cereal del stock? \n\n1- Sí \n2- No.")
  );

  while (preguntar) {
    if (respuesta == 1) {
      borrarProducto = prompt(
        "Escribí el nombre del cereal que querés quitar del stock"
      );
      productoEncontrado = arregloProductos.find(
        (producto) => producto.nombre === borrarProducto
      );
      if (productoEncontrado) {
        alert("Se encontró el cereal que será quitado del stock");
        arregloProductos = arregloProductos.filter(
          (producto) => producto.nombre !== borrarProducto
        );
        preguntar = false;
      } else {
        alert("No se encontro el cereal que querés eliminar");
        respuesta = parseInt(
          prompt("¿Querés eliminar un cereal del stock? \n\n1- Sí \n2- No.")
        );
      }
    } else if (respuesta == 2) {
      alert("Elegiste no eliminar cereales");
      preguntar = false;
    } else {
      alert(
        "Elegiste una opción inválida. Escribí (1) si querés quitar un cereal del stock o (2) si querés confirmar el stock actual."
      );
      respuesta = parseInt(
        prompt("¿Querés eliminar un cereal del stock? \n\n1- Sí \n2- No.")
      );
    }
  }
}
