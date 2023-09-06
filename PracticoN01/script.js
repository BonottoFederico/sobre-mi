document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar elementos del DOM
    const calcularButton = document.getElementById("calcular");
    const borrarButton = document.getElementById("borrar");
    const copiarButton = document.getElementById("copiar");
    const numero1Input = document.getElementById("numero1");
    const numero2Input = document.getElementById("numero2");
    const operacionSelect = document.getElementById("operacion");
    const resultadoP = document.getElementById("resultado");

    // Función para calcular y mostrar el resultado
    calcularButton.addEventListener("click", () => {
        // Obtener valores de los campos de entrada y la operación seleccionada
        const num1 = parseFloat(numero1Input.value);
        const num2 = parseFloat(numero2Input.value);
        const selectedOperacion = operacionSelect.value;

        // Validar si los números son válidos y se ha seleccionado una operación
        if (isNaN(num1) || isNaN(num2) || selectedOperacion === "default") {
            resultadoP.textContent = "Por favor, ingrese números válidos y seleccione una operación.";
            return;
        }

        let result;

        // Realizar cálculo según la operación seleccionada
        switch (selectedOperacion) {
            case "suma":
                result = num1 + num2;
                break;
            case "resta":
                result = num1 - num2;
                break;
            case "multiplicacion":
                result = num1 * num2;
                break;
            case "division":
                if (num2 === 0) {
                    resultadoP.textContent = "No se puede dividir por cero.";
                    return;
                }
                result = num1 / num2;
                break;
            default:
                resultadoP.textContent = "Operación no válida";
                return;
        }

        // Mostrar el resultado con precisión de dos decimales
        resultadoP.textContent = `Resultado: ${result.toFixed(2)}`;
    });

    // Función para borrar campos de entrada y resultado
    borrarButton.addEventListener("click", () => {
        numero1Input.value = "";
        numero2Input.value = "";
        operacionSelect.value = "default";
        resultadoP.textContent = "Resultado: ";
    });

    // Función para copiar el resultado al portapapeles
    copiarButton.addEventListener("click", () => {
        if (resultadoP.textContent !== "Resultado: ") {
            const resultado = resultadoP.textContent.replace("Resultado: ", "");
            navigator.clipboard.writeText(resultado)
                .then(() => {
                    alert("Resultado copiado al portapapeles.");
                })
                .catch((error) => {
                    console.error("Error al copiar el resultado: ", error);
                });
        } else {
            alert("No hay resultado para copiar.");
        }
    });
});
