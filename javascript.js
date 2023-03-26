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

    const valoresConSaltos = valores.replace(/<br>/g, '\n');

    const valorespopConSaltos = valorespop.innerHTML + '\n' + valoresConSaltos;

    valorespop.innerHTML = valorespopConSaltos.split('\n').map(val => val.trim() !== '' ? `<br>${val}` : '').join('');

    const precio = document.getElementById("mtotal").innerHTML;
    const preciopop = document.getElementById("mtotal-pop");
    preciopop.innerHTML = '\n' + precio;
}



function refresh() {
    location.reload(true);
}

function wasa() {
    var valores = document.getElementById("valores-pop").innerText;
    valores = valores.replace(/<br>/g, '\n');

    var mtotal = document.getElementById("mtotal-pop").innerHTML.trim();

    var telefono = "51921136755";
    var mensaje = "Hola Pikol, mi pedido es el siguiente:\n" + valores + "\n\nTotal: " + mtotal;
    var url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
    window.open(url);
}


/* function wasa() {
    var valores = document.getElementById("valores-pop").innerHTML;
    valores = valores.replace(/<\/?[^>]+(>|$)/g, '');

    var mtotal = document.getElementById("mtotal-pop").textContent;

    var telefono = "51921136755";
    var mensaje = "Hola Pikol, mi pedido es el siguiente:\n\n" + valores + "\n\nTotal: " + mtotal;
    var url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
    window.open(url);
} */