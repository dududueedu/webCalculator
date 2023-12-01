export function adding() {
    var valor1 = document.getElementById("txt1").value;
    var valor2 = document.getElementById("txt2").value;
    var res = document.getElementById("res");
    var resultado = parseInt(valor1) + parseInt(valor2);
    res.innerHTML = `Resultado: <strong>${valor1}</strong> + <strong>${valor2}</strong> é: <strong>${resultado}</strong>`
}

export function reduce() {
    var valor1 = document.getElementById("txt1").value;
    var valor2 = document.getElementById("txt2").value;
    var res = document.getElementById("res");
    var resultado = parseInt(valor1) - parseInt(valor2);
    res.innerHTML = `Resultado: <strong>${valor1}</strong> - <strong>${valor2}</strong> é: <strong>${resultado}</strong>`
}

export function multiply() {
    var valor1 = document.getElementById("txt1").value;
    var valor2 = document.getElementById("txt2").value;
    var res = document.getElementById("res");
    var resultado = parseInt(valor1) * parseInt(valor2);
    res.innerHTML = `Resultado: <strong>${valor1}</strong> X <strong>${valor2}</strong> é: <strong>${resultado}</strong>`
}

export function share() {
    var valor1 = document.getElementById("txt1").value;
    var valor2 = document.getElementById("txt2").value;
    var res = document.getElementById("res");
    var resultado = parseInt(valor1) / parseInt(valor2);
    res.innerHTML = `Resultado: <strong>${valor1}</strong> / <strong>${valor2}</strong> é: <strong>${resultado}</strong>`
}