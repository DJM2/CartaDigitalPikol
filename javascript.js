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
    numeroT.classList.remove('rezoom');
    numeroT.classList.add('zoom');
    setTimeout(function() {
        numeroT.classList.remove('zoom');
        numeroT.classList.add('rezoom');
    }, 400);
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

    var telefono = "51935736496";
    var mensaje = "Hola Pikol, mi pedido es el siguiente:\n" + valores + "\n\nTotal: " + mtotal;
    var url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
    window.open(url);
}

//

document.addEventListener("DOMContentLoaded", function() {
    updateInfusionText("zenit", "zeniti", "zenitt");
    updateInfusionText("infusion", "infusioni", "infusiont");
    updateInfusionText("bardock", "bardocki", "bardockt");

    function updateInfusionText(infusionId, selectId, resultId) {
        const selectElement = document.getElementById(selectId);
        selectElement.addEventListener("change", (event) => {
            const infusionText = document.getElementById(infusionId).innerHTML;
            const resultado = document.getElementById(resultId);
            resultado.textContent = `${infusionText} ${event.target.value}`;
        });
    }
});

//Refrescantes
document.addEventListener("DOMContentLoaded", function() {
    updateLimonadaText("limonada", "limonadai", "limonadat", "sub-limonada", "valor-limonada", 6, 15, "num-limonada");
    updateLimonadaText("maracuya", "maracuyai", "maracuyat", "sub-maracuya", "valor-maracuya", 6, 15, "num-maracuya");
    updateLimonadaText("morada", "moradai", "moradat", "sub-morada", "valor-morada", 6, 15, "num-morada");
    updateLimonadaText("hierba", "hierbai", "hierbat", "sub-hierba", "valor-hierba", 8, 17, "num-hierba");
    updateLimonadaText("limonadaf", "limonadafi", "limonadaft", "sub-limonadaf", "valor-limonadaf", 8, 18, "num-limonadaf");
    updateLimonadaText("maracuyaf", "maracuyafi", "maracuyaft", "sub-maracuyaf", "valor-maracuyaf", 8, 18, "num-maracuyaf");
    updateLimonadaText("moradaf", "moradafi", "moradaft", "sub-moradaf", "valor-moradaf", 8, 18, "num-moradaf");
    updateLimonadaText("hierbaf", "hierbafi", "hierbaft", "sub-hierbaf", "valor-hierbaf", 8, 18, "num-hierbaf");
});

function updateLimonadaText(limonadaId, selectId, resultId, sub, valor, precioV, precioJ, numId) {
    const selectElement = document.getElementById(selectId);
    selectElement.addEventListener("change", (event) => {
        const infusionText = document.getElementById(limonadaId).innerHTML;
        const resultado = document.getElementById(sub);
        const valorT = document.getElementById(valor);
        const precio = (event.target.value === "Vaso") ? precioV : precioJ;
        const valorUnidad = parseInt(document.getElementById(numId).value);
        const valorTotal = valorUnidad * precio;
        resultado.innerHTML = precio;
        valorT.innerHTML = valorTotal;
        const texto = document.getElementById(resultId);
        texto.innerHTML = `${infusionText} ${event.target.value}`;
    });
}
//Gaseosas

document.addEventListener("DOMContentLoaded", function() {
    updateGasText("coca", "cocai", "cocat", "sub-coca", "valor-coca", 5, 10, 15, "num-coca");
    updateGasText("inka", "inkai", "inkat", "sub-inka", "valor-inka", 5, 10, 15, "num-inka");
});

function updateGasText(limonadaId, selectId, resultId, sub, valor, precioV, precioJ, precioK, numId) {
    const selectElement = document.getElementById(selectId);
    selectElement.addEventListener("change", (event) => {
        const infusionText = document.getElementById(limonadaId).innerHTML;
        const resultado = document.getElementById(sub);
        const valorT = document.getElementById(valor);
        let precio;
        if (event.target.value === "medioLitro") {
            valueText = "1/2 Litro";
            precio = precioV;
        } else if (event.target.value === "Litro") {
            valueText = "Litro";
            precio = precioJ;
        } else if (event.target.value === "2Litros") {
            valueText = "2 Litros";
            precio = precioK;
        }
        const valorUnidad = parseInt(document.getElementById(numId).value);
        const valorTotal = valorUnidad * precio;
        resultado.innerHTML = precio;
        valorT.innerHTML = valorTotal;
        const texto = document.getElementById(resultId);
        texto.innerHTML = `${infusionText} ${valueText}`;
    });
}

function local() {
    var quitar = document.getElementById('wasa');
    quitar.style.display = 'none';
    var local = document.getElementById('local');
    local.style.display = 'none';
    var mostrar = document.getElementById('mostrarPedido');
    mostrar.style.display = 'block';
}