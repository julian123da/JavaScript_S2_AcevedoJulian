// ###############################################
// #### Proyecto1_Python_Ejercicio #######
// ###############################################

booleanito= true
while(booleanito==true)
    let eleccion = prompt(`=============================================`)
=============================================
Simulador de Gasto Diario
=============================================
Seleccione una opción:

1. Registrar nuevo gasto
2. Listar gastos
3. Calcular total de gastos
4. Generar reporte de gastos
5. Salir
=============================================`))
    if (eleccion === 1)  {
        let montoGasto = prompt(`======================================================`)
    Registrar Nuevo Gasto
============================================================
Ingrese la información del gasto:

Monto del gasto:
========================================
       let categoria = prompt (`===============================================`)
       Registrar Nuevo Gasto 
==============================================
Ingrese la información del gasto:

Categoria (ej. comida, WebTransportError, entretenimiento, otros):
          let descripcion = prompt(`=====================================`)
Registrar Nuevo Gasto 
===================================
Ingresa la informacion del gasto:

descripcion:
(`===========================================`)
            let guardar = prompt(`Ingrese 'S' para guardar o 'C' para cancelar.`)
            if (guardar ==="s")  {
                let gastoNuevo={
                    montoGasto: montoGasto,
                    categoria: categoria,
                    descripcion: descripcion;
                
                }
                gasto.Push(gastonuevo);
                alert(gasto.toString);
            }else if (guardar === "c"){
                alert("Gasto no guardado);
                continue;  
            }else {
                alert("Ingresa una opcion valida"); 
            };

        };
    
    
 }
        
            






// Desarrollado por Julian David Acevedo Gómez T.I: 1.097.100.290