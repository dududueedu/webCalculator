export function adding() {
    var valor1 = document.getElementById("txt1").value;
    var valor2 = document.getElementById("txt2").value;
    var res = document.getElementById("res");
    var resultado = parseInt(valor1) + parseInt(valor2);
    res.value = resultado;
}

export function reduce() {
    var valor1 = document.getElementById("txt1").value;
    var valor2 = document.getElementById("txt2").value;
    var res = document.getElementById("res");
    var resultado = parseInt(valor1) - parseInt(valor2);
    res.value = resultado;
}

export function multiply() {
    var valor1 = document.getElementById("txt1").value;
    var valor2 = document.getElementById("txt2").value;
    var res = document.getElementById("res");
    var resultado = parseInt(valor1) * parseInt(valor2);
    res.value = resultado;
}

export function share() {
    var valor1 = document.getElementById("txt1").value;
    var valor2 = document.getElementById("txt2").value;
    var res = document.getElementById("res");
    var resultado = parseInt(valor1) / parseInt(valor2);
    res.value = resultado;
}