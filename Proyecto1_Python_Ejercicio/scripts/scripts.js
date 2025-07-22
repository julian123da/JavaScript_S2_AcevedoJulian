// ###############################################
// #### Proyecto1_Python_Ejercicio ###############
// ###############################################

let gastos = [];
let continuar = true;

while (continuar) {
  let eleccion = prompt(`
=============================================
   Simulador de Gasto Diario
=============================================
Seleccione una opción:
1. Registrar nuevo gasto
2. Listar gastos
3. Calcular total de gastos
4. Generar reporte de gastos
5. Salir
=============================================
Ingrese el número de la opción:
`);

  switch (eleccion) {
    case "1":
      registrarGasto();
      break;
    case "2":
      listarGastos();
      break;
    case "3":
      calcularTotal();
      break;
    case "4":
      generarReporte();
      break;
    case "5":
      continuar = false;
      alert(" Gracias por usar el simulador.");
      break;
    default:
      alert("Opción inválida. Intente de nuevo.");
  }
}



function registrarGasto() {
  let monto = parseFloat(prompt("Ingrese el monto del gasto:"));
  if (monto) {
    alert("Monto inválido.");
    return;
  }

  let categoria = prompt("Ingrese la categoría (comida, transporte, etc):");
  let descripcion = prompt("Descripción (opcional):");
  let confirmacion = prompt("Ingrese 'S' para guardar o 'C' para cancelar.").toUpperCase();

  if (confirmacion === "S") {
    const nuevoGasto = {
      fecha: new Date().toLocaleDateString(),
      monto: monto,
      categoria: categoria,
      descripcion: descripcion
    };
    gastos.push(nuevoGasto);
    alert(" Gasto guardado correctamente.");
  } else {
    alert("gasto no guardado.");
  }
}

function listarGastos() {
  if (gastos.length === 0) {
    alert(" No hay gastos registrados.");
    return;
  }

  let lista = "Lista de Gastos:\n\n";
  gastos.forEach((gasto, index) => {
    lista += `${index + 1}. [${gasto.fecha}] $${gasto.monto} - ${gasto.categoria} (${gasto.descripcion})\n`;
  });

  alert(lista);
}




// Desarrollado por Julian David Acevedo Gómez T.I: 1.097.100.290