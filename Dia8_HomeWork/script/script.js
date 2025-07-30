// Consumo de API mediante XMLHttpRequest
// Modularizado y adaptado a SWAPI por ID

function buscarPersonaje() {
    const idUsar = prompt("Ingresa el ID del personaje a buscar (ej. 1 para Luke Skywalker):");

    const xhr = new XMLHttpRequest(); 
    const url = `https://swapi.py4e.com/api/people/${idUsar}/`; 

    console.log("URL:", url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {
            alert("Cargando...");
        } else if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const daticos = JSON.parse(xhr.responseText);

                obtenerPlaneta(daticos.homeworld, function (nombrePlaneta) {

                    if (daticos.films.length > 0) {
                        obtenerPelicula(daticos.films[0], function (tituloPelicula) {
                            mostrarDatos(daticos, nombrePlaneta, tituloPelicula);
                        });
                    } else {
                        mostrarDatos(daticos, nombrePlaneta, "N/A");
                    }

                });

            } catch (err) {
                console.log("Error al procesar JSON:", err.message);
            }
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            alert("Personaje no encontrado. Verifica el ID.");
        }
    };

    xhr.send();
}

