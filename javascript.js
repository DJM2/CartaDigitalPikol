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

//Sumar
var nTotal = 0;

function sumar(precio, num, producto) {
    var sumaTotal = parseFloat(document.getElementById(precio).innerHTML);
    var cantidad = parseFloat(document.getElementById(num).value);
    var display = document.getElementById('display');
    display.style.display = "block";
    var valores = document.getElementById('valores');
    var izq = document.getElementById(producto).innerHTML;
    valores.innerHTML += '<br> ➤ ' + cantidad + '(' + izq + ')' + ' = s/.' + sumaTotal.toFixed(2);

    //acumular precio
    var precioTotal = parseFloat(document.getElementById('mtotal').innerHTML.replace('s/.', ''));
    if (isNaN(precioTotal)) {
        precioTotal = 0;
    }
    var nuevoTotal = precioTotal + sumaTotal;
    document.getElementById('mtotal').innerHTML = 's/.' + nuevoTotal.toFixed(2);

    // acumular cantidad en nTotal
    nTotal += cantidad;
    document.getElementById('numeroT').innerHTML = nTotal;
}

function pedido() {
    const valores = document.getElementById("valores").innerHTML;
    const valorespop = document.getElementById("valores-pop");
    /*valorespop.innerHTML = valores; */

    valorespop.innerHTML = '';

    const div = document.createElement('div');
    div.className = 'col-12';

    const valoresArray = valores.split('<br>');
    for (let i = 0; i < valoresArray.length; i++) {
        const span = document.createElement('span');
        span.innerHTML = valoresArray[i];
        div.appendChild(span);

        if (i !== valoresArray.length - 1) {
            const br = document.createElement('br');
            div.appendChild(br);
        }
    }

    valorespop.appendChild(div);

    const precio = document.getElementById("mtotal").innerHTML;
    const preciopop = document.getElementById("mtotal-pop");
    preciopop.innerHTML = '<br>' + precio;
}