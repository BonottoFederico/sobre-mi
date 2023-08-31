// Variables globales
let nombreJugador = "";
let puntajeJugador = 0;
let puntajeComputadora = 0;
let puedeJugar = true;

// Elementos del DOM
const nombreInput = document.getElementById("nombre");
const nombreJugadorElement = document.getElementById("nombreJugador");
const jugadaComputadoraElement = document.getElementById("jugadaComputadora");
const mensajeResultadoElement = document.getElementById("mensajeResultado");
const puntajeJugadorElement = document.getElementById("puntajeJugador");
const puntajeComputadoraElement = document.getElementById("puntajeComputadora");
const juegoContainer = document.getElementById("juego-container");

// Función para iniciar el juego
function iniciarJuego() {
    nombreJugador = nombreInput.value.trim();

    if (nombreJugador === "") {
        alert("Por favor, ingrese su nombre.");
    } else {
        nombreJugadorElement.textContent = nombreJugador;
        nombreInput.disabled = true;
        juegoContainer.style.display = "block";
        document.getElementById("nombre-container").style.display = "none";
    }
}

// Función para que el jugador haga una jugada
function jugadaUsuario(jugada) {
    if (puedeJugar) {
        if (puntajeJugador < 3 && puntajeComputadora < 3) {
            // Obtener todas las opciones
            const opcionesElegidas = document.querySelectorAll(".opciones");
            // Ocultar las opciones no seleccionadas
            opcionesElegidas.forEach((opcion) => {
                if (opcion.getAttribute("data-jugada") !== jugada) {
                    opcion.style.display = "none";
                }
            });
            const opciones = ["piedra", "papel", "tijeras"];
            const jugadaComputadora = opciones[Math.floor(Math.random() * 3)];
            jugadaComputadoraElement.textContent = jugadaComputadora;
            const resultado = determinarGanador(jugada, jugadaComputadora);
            if (resultado === "Gana el usuario") {
                mensajeResultadoElement.textContent = `Gana ${nombreJugador}`;
            } else {
                mensajeResultadoElement.textContent = resultado;
            }
            if (resultado === "Gana el usuario") {
                puntajeJugador++;
            } else if (resultado === "Gana la computadora") {
                puntajeComputadora++;
            }
            puntajeJugadorElement.textContent = puntajeJugador;
            puntajeComputadoraElement.textContent = puntajeComputadora;
            // Temporizador para mostrar las opciones nuevamente después de 2 segundos
            setTimeout(() => {
                // Mostrar todas las opciones nuevamente
                opcionesElegidas.forEach((opcion) => {
                    opcion.style.display = "inline-block";
                });
                // Limpiar mensaje de resultado
                mensajeResultadoElement.textContent = "";
                if (puntajeJugador === 3 || puntajeComputadora === 3) {
                    mostrarGanador();
                }
            }, 2000);
            // Establecer puedeJugar en false para evitar jugadas adicionales
            puedeJugar = false;
            // Temporizador para permitir que el usuario juegue nuevamente después de 3 segundos
            setTimeout(() => {
                puedeJugar = true;
            }, 2000); // 
        } else {
            mostrarGanador();
        }
    }
}
// Función para determinar el ganador de una ronda
function determinarGanador(jugador, computadora) {
    if (jugador === computadora) {
        return "Empate";
    } else if (
        (jugador === "piedra" && computadora === "tijeras") ||
        (jugador === "papel" && computadora === "piedra") ||
        (jugador === "tijeras" && computadora === "papel")
    ) {
        return "Gana el usuario";
    } else {
        return "Gana la computadora";
    }
}

// Función para mostrar al ganador del juego
function mostrarGanador() {
    if (puntajeJugador === 3) {
        mensajeResultadoElement.textContent = `¡${nombreJugador} gana el juego!`;
    } else if (puntajeComputadora === 3) {
        mensajeResultadoElement.textContent = "La computadora gana el juego.";
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    nombreInput.value = "";
    nombreInput.disabled = false;
    puntajeJugador = 0;
    puntajeComputadora = 0;
    puntajeJugadorElement.textContent = "0";
    puntajeComputadoraElement.textContent = "0";
    mensajeResultadoElement.textContent = "";
    jugadaComputadoraElement.textContent = "";
}
