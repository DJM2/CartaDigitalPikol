function incrementar(precio, num, valor) {
    var numInput = document.getElementById(num);
    var numValue = parseInt(numInput.value);
    numValue++;
    numInput.value = numValue;

    var subtotalElement = document.getElementById(precio);
    var subtotalValue = parseFloat(subtotalElement.innerHTML);
    var nuevoSubtotal = subtotalValue * numValue;
    var valor = document.getElementById(valor);
    valor.innerHTML = nuevoSubtotal.toFixed(2);
}

function decrementar(precio, num, valor) {
    var numInput = document.getElementById(num);
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
        var decrementButton = document.getElementById("decremento");
        decrementButton.disabled = true;
    }
}

function sumar(precio, num, producto) {
    var sumaTotal = parseFloat(document.getElementById(precio).innerHTML);
    var cantidad = parseFloat(document.getElementById(num).value);
    var display = document.getElementById('display');
    display.style.display = "block";
    var valores = document.getElementById('valores');
    var izq = document.getElementById(producto).innerHTML;
    valores.innerHTML += '<br> → ' + cantidad + '(' + izq + ')' + ' = s/.' + sumaTotal.toFixed(2);

    var precioTotal = parseFloat(document.getElementById('mtotal').innerHTML.replace('s/.', ''));

    // Verificar que el valor sea numérico
    if (isNaN(precioTotal)) {
        precioTotal = 0;
    }

    var nuevoTotal = precioTotal + sumaTotal;
    document.getElementById('mtotal').innerHTML = 's/.' + nuevoTotal.toFixed(2);
}

/* function sumarTotal(precioId) {
    var precio = parseFloat(document.getElementById(precioId).innerHTML);
    var subtotal = document.getElementById('mastotal');

    // Obtenemos el valor actual del subtotal, lo convertimos a número y sumamos el precio del producto actual
    var subtotalValor = parseFloat(subtotal.innerHTML);
    subtotalValor = subtotalValor + precio;

    // Actualizamos el valor del subtotal con la suma total
    subtotal.innerHTML = subtotalValor.toFixed(2);
} */