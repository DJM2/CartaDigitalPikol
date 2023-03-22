function incrementar(precio, valor) {
    var numInput = document.getElementById("num");
    var numValue = parseInt(numInput.value);
    numValue++;
    numInput.value = numValue;

    var subtotalElement = document.getElementById(precio);
    var subtotalValue = parseFloat(subtotalElement.innerHTML);
    var nuevoSubtotal = subtotalValue * numValue;
    var valor = document.getElementById(valor);
    valor.innerHTML = nuevoSubtotal.toFixed(2);
}

function decrementar(precio, valor) {
    var numInput = document.getElementById("num");
    var numValue = parseInt(numInput.value);
    if (numValue > 0) {
        numValue--;
        numInput.value = numValue;

        var subtotalElement = document.getElementById(precio);
        var subtotalValue = parseFloat(subtotalElement.innerHTML);
        var nuevoSubtotal = subtotalValue * numValue;
        var valor = document.getElementById(valor);
        valor.innerHTML = nuevoSubtotal.toFixed(2);
    }


    if (numValue === 0) {
        var decrementButton = document.getElementById("decremento"); // Obtenemos el botón o el elemento span que se está utilizando para decrementar
        decrementButton.disabled = true; // Bloqueamos el botón o el elemento span
    }
}



function input() {
    document.getElementById('input')
}

/* function sumar(subtotalId) {
    var subtotal = document.getElementById(subtotalId);
    var conversion = parseFloat(subtotal.innerHTML);
    var total = document.getElementById('total');
    total.innerHTML = (parseFloat(total.innerHTML) + conversion).toFixed(2);
} */
function sumar(precio) {
    var sumaTotal = document.getElementById(precio);
    var conversion = parseFloat(sumaTotal.innerHTML);
    var total = document.getElementById('total');
    total.innerHTML = conversion.toFixed(2);
}

function restar(precio) {
    sumaTotal -= precio;
    document.getElementById('total').innerText = `Total: s/` + sumaTotal;
}