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
      alert("⚠️ Opción inválida. Intente de nuevo.");
  }
}


function registrarGasto() {
  let monto = parseFloat(prompt("Ingrese el monto del gasto:"));
  if (isNaN(monto)) {
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
    alert("Gasto no guardado.");
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

function calcularTotal() {
  if (gastos.length === 0) {
    alert(" No hay gastos para calcular.");
    return;
  }

  let total = gastos.reduce((suma, gasto) => suma + gasto.monto, 0);
  alert(` Total de gastos: $${total.toFixed(2)}`);
}

function generarReporte() {
  if (gastos.length === 0) {
    alert(" No hay gastos para generar reporte.");
    return;
  }

  let resumen = {};
  let total = 0;

  gastos.forEach(gasto => {
    total += gasto.monto;
    if (resumen[gasto.categoria]) {
      resumen[gasto.categoria] = gasto.monto;
    } else {
      resumen[gasto.categoria] += gasto.monto;
    }
  });

  let reporte = ` Reporte de Gastos\n\nTotal: $${total.toFixed(2)}\n`;
  for (let categoria in resumen) {
    reporte += `- ${categoria}: $${resumen[categoria].toFixed(2)}\n`;
  }

  alert(reporte);
}


// Desarrollado por Julian David Acevedo Gómez T.I: 1.097.100.290