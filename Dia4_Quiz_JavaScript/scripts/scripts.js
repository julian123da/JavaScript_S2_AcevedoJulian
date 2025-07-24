// ###############################################
// #### Quiz ###############
// ###############################################


let ingredientes = [
    {
      nombre: "Pan",
      descripcion: "Pan de hamburguesa clásico",
      precio: 2.5,
      stock: 500
    },
    {
      nombre: "Carne de res",
      descripcion: "Carne de res jugosa y sabrosa",
      precio: 8,
      stock: 300
    },
    {
      nombre: "Queso cheddar",
      descripcion: "Queso cheddar derretido",
      precio: 1.5,
      stock: 200
    }
  ];
  
  let categorias = [
    {
      nombre: "Clásica",
      descripcion: "Hamburguesas clásicas y sabrosas"
    },
    {
      nombre: "Vegetariana",
      descripcion: "Hamburguesas sin carne, perfectas para vegetarianos"
    },
    {
      nombre: "Gourmet",
      descripcion: "Hamburguesas gourmet con ingredientes premium"
    }
  ];
  
  let chefs = [
    {
      nombre: "ChefA",
      especialidad: "Carnes"
    },
    {
      nombre: "ChefB",
      especialidad: "Cocina Vegetariana"
    },
    {
      nombre: "ChefC",
      especialidad: "Gourmet"
    }
  ];
  
  let hamburguesas = [
    {
      nombre: "Clásica",
      categoria: "Clásica",
      ingredientes: ["Pan", "Carne de res", "Queso cheddar"],
      precio: 10,
      chef: "ChefA"
    },
    {
      nombre: "Vegetariana",
      categoria: "Vegetariana",
      ingredientes: ["Pan", "Queso cheddar", "Lechuga"],
      precio: 8,
      chef: "ChefB"
    },
    {
      nombre: "Doble Carne",
      categoria: "Gourmet",
      ingredientes: ["Pan", "Carne de res", "Queso cheddar", "Carne de res"],
      precio: 12,
      chef: "ChefC"
    }
  ];

  function agregarIngrediente(nombre, descripcion, precio, stock) {
    ingredientes.push({ nombre, descripcion, precio, stock });
    console.log(`Ingrediente "${nombre}" agregado.`);
  }
  
  function listarIngredientes() {
    console.log(" Ingredientes:");
    ingredientes.forEach((i, index) => {
      console.log(`${index + 1}. ${i.nombre} - ${i.descripcion} | $${i.precio} | Stock: ${i.stock}`);
    });
  }
  
  function buscarIngrediente(nombre) {
    const ing = ingredientes.find(i => i.nombre.toLowerCase() === nombre.toLowerCase());
    if (ing) {
      console.log(" Ingrediente encontrado:", ing);
    } else {
      console.log(`Ingrediente "${nombre}" no encontrado.`);
    }
  }
  
  function actualizarStockIngrediente(nombre, nuevoStock) {
    const ing = ingredientes.find(i => i.nombre.toLowerCase() === nombre.toLowerCase());
    if (ing) {
      ing.stock = nuevoStock;
      console.log(` Stock actualizado para "${nombre}": ${nuevoStock}`);
    } else {
      console.log(`Ingrediente "${nombre}" no encontrado.`);
    }
  }
  


  
  