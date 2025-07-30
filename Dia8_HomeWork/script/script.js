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

function obtenerPlaneta(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const planeta = JSON.parse(xhr.responseText);
            callback(planeta.name);
        }
    };
    xhr.send();
}

function obtenerPelicula(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const pelicula = JSON.parse(xhr.responseText);
            callback(pelicula.title);
        }
    };
    xhr.send();
}

function mostrarDatos(personaje, planeta, pelicula) {
    alert(
        "Nombre: " + personaje.name + "\n" +
        "Altura: " + personaje.height + " cm\n" +
        "Peso: " + personaje.mass + " kg\n" +
        "Cabello: " + personaje.hair_color + "\n" +
        "Piel: " + personaje.skin_color + "\n" +
        "Género: " + personaje.gender + "\n" +
        "Planeta natal: " + planeta + "\n" +
        "Primera película: " + pelicula
    );
}

buscarPersonaje();
