// Función para manejar el clic del botón "Agregar Gasto"
function clickBoton() {
    // Obtener los valores del formulario
    const nombreGasto = document.getElementById('nombreGasto').value;
    const valorGasto = parseFloat(document.getElementById('valorGasto').value);
    
    // Expresión regular para permitir letras, incluyendo acentos y la letra "ñ"
    const regexAlfabetico = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
    
    // Validar que el nombre del gasto contenga solo letras y que el valor sea válido
    if (!nombreGasto || !regexAlfabetico.test(nombreGasto)) {
        alert('Por favor, introduce un nombre de gasto válido con solo letras.');
        return;  // Salimos de la función si la validación falla
    }

    if (isNaN(valorGasto) || valorGasto <= 0) {
        alert('Por favor, introduce un valor de gasto mayor que 0.');
        return;
    }

    // Crear un nuevo elemento de lista para agregar el gasto
    const nuevoGasto = document.createElement('li');
    nuevoGasto.textContent = `${nombreGasto}: US$ ${valorGasto.toFixed(2)}`;

    // Agregar el nuevo gasto a la lista
    document.getElementById('listaDeGastos').appendChild(nuevoGasto);

    // Actualizar el total de gastos
    actualizarTotal(valorGasto);

    // Limpiar los campos del formulario
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

// Función para actualizar el total de gastos
function actualizarTotal(valorGasto) {
    // Obtener el valor actual del total
    const totalActual = parseFloat(document.getElementById('totalGastos').textContent);

    // Sumar el nuevo gasto al total
    const nuevoTotal = totalActual + valorGasto;

    // Actualizar el total en el HTML
    document.getElementById('totalGastos').textContent = nuevoTotal.toFixed(2);
}