var btn = document.getElementById("btn");
var resultado = document.getElementById("resultado")
var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");


btn.addEventListener("click", function () {
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    if (entero(n1) && entero(n2)) {

        if (validar(n1, n2)) {
            resultado.innerHTML = suma(n1, n2);
            resultado.style.color = "black";
        }
        else {
            resultado.innerHTML = "ERROR!";
            resultado.style.color = "red";
        }
    } else {
        resultado.innerHTML = "ERROR!";
        resultado.style.color = "red";
    }
});
btn1.addEventListener("click", function () {
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    if (entero(n1) && entero(n2)) {

        if (validar(n1, n2)) {
            resultado.innerHTML = resta(n1, n2);
            resultado.style.color = "black";
        }
        else {
            resultado.innerHTML = "ERROR!";
            resultado.style.color = "red";
        }
    } else {
        resultado.innerHTML = "ERROR!";
        resultado.style.color = "red";
    }
});
btn2.addEventListener("click", function () {
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    if (entero(n1) && entero(n2)) {

        if (validar(n1, n2)) {
            resultado.innerHTML = multiplicacion(n1, n2);
            resultado.style.color = "black";
        }
        else {
            resultado.innerHTML = "ERROR!";
            resultado.style.color = "red";
        }
    } else {
        resultado.innerHTML = "ERROR!";
        resultado.style.color = "red";
    }
});
btn3.addEventListener("click", function () {
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    if (n2 == 0) {
        resultado.innerHTML = "ERROR!";
        resultado.style.color = "red";
    } else {
        if (entero(n1) && entero(n2)) {

            if (validar(n1, n2)) {
                resultado.innerHTML = division(n1, n2);
                resultado.style.color = "black";
            }
            else {
                resultado.innerHTML = "ERROR!";
                resultado.style.color = "red";
            }
        } else {
            resultado.innerHTML = "ERROR!";
            resultado.style.color = "red";
        }
    }
});
function suma(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}
function resta(n1, n2) {
    return parseInt(n1) - parseInt(n2);
}
function multiplicacion(n1, n2) {
    return parseInt(n1) * parseInt(n2);
}
function division(n1, n2) {
    return parseInt(n1) / parseInt(n2);
}
function validar(n1, n2) {
    if (n1 == "" || n2 == "") {
        return false;
    }else {
            return true;
        }

    }
    function entero(val) {
        if (val % 1 == 0) {
            return true;
        }
        else {
            return false;
        }
    }
