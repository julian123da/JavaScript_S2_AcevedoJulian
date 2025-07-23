let Consultar = [];
let continuar = true;

while (Hamburguesas) {
    let = eleccion = prompt (`
    =============================================
       Simulador de la Hamburgueseria 
    =============================================
  Seleccione una opción:

    1. Añadir
    2. Listar 
    3. Eliminar
    4. Actualizar
    5. Consultar
    6. Salir
    ===========================================`);

};

if (seleccioneCategoria == 2) {
    let = especificar = prompt (`
    =============================================
       Añadir
    =============================================
  Ingrese una opción para continuar:

    1.Ingrediente
    2.Categoria
    3.Hamburguesa
    4.Chef
    5.Regresar
    ===========================================`);

}switch (eleccion) {
    case "1":
      Añadir();
      break;
    case "2":
      Listar();
      break;
    case "3":
      Eliminar();
      break;
    case "4":
      Actualizar();
      break;
    case "5":
        Consultar();
        break
    case "6":
        Salir();
        break
      continuar = true;
      alert("Gracias por usar el Simulador de la Hamburgueseria.");
      break;
      alert("Opción inválida. Intente de nuevo.");
}

let JSONIngredientes 
[
    {
        "nombre": "Pan",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 2.5,
        "stock": 500
    },
    {
        "nombre": "Carne de res",
        "descripcion": "Carne de res jugosa y sabrosa",
        "precio": 8,
        "stock": 300
    },
    {
        "nombre": "Queso cheddar",
        "descripcion": "Queso cheddar derretido",
        "precio": 1.5,
        "stock": 200
    }
]

let JSONCategorías

[
    {
        "nombre": "Clásica",
        "descripcion": "Hamburguesas clásicas y sabrosas"
    },
    {
        "nombre": "Vegetariana",
        "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
    },
    {
        "nombre": "Gourmet",
        "descripcion": "Hamburguesas gourmet con ingredientes premium"
    }
]

let JSONHamburguesas
[
    {
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
        "precio": 10,
        "chef": "ChefA"
    },
    {
        "nombre": "Vegetariana",
        "categoria": "Vegetariana",
        "ingredientes": ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
        "precio": 8,
        "chef": "ChefB"
    },
    {
        "nombre": "Doble Carne",
        "categoria": "Gourmet",
        "ingredientes": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
        "precio": 12,
        "chef": "ChefC"
    }
]

let JSONChefs
[
    {
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
]

function Añadir() {
    let = ingredientes(prompt("Ingresa el ingrediente que quieras utilizar"));
    if (ingredientes) 
    alert("Ingrediente invalidos.")
return; 
 }

    
