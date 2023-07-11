document.addEventListener('DOMContentLoaded', function() {
    let sieteBtn = document.getElementById('calc(btnSiete)');
    let ochoBtn = document.getElementById('calc(btnOcho)');
    let nueveBtn = document.getElementById('calc(btnNueve)');
    let sumarBtn = document.getElementById('calc(btnSuma)');
    let cuatroBtn = document.getElementById('calc(btnCuatro)');
    let cincoBtn = document.getElementById('calc(btnCinco)');
    let seisBtn = document.getElementById('calc(btnSeis)');
    let restaBtn = document.getElementById('calc(btnResta)');
    let unoBtn = document.getElementById('calc(btnUno)');
    let dosBtn = document.getElementById('calc(btnDos)');
    let tresBtn = document.getElementById('calc(btnTres)');
    let dividirBtn = document.getElementById('calc(btnDividir)');
    let resetearBtn = document.getElementById('calc(btnResetear)');
    let ceroBtn = document.getElementById('calc(btnCero)');
    let puntoBtn = document.getElementById('calc(btnPunto)');
    let multiplicarBtn = document.getElementById('calc(btnMultipl)');
    let menorBtn = document.getElementById('calc(btnMenor)');
    let mayorBtn = document.getElementById('calc(btnMayor)');
    let igualBtn = document.getElementById('calc(btnIgual)');

    sieteBtn.addEventListener('click', function() {
       numeros('7');
    });
    ochoBtn.addEventListener('click', function() {
        numeros('8');
    });
    nueveBtn.addEventListener('click', function() {
        numeros('9');
    });
    sumarBtn.addEventListener('click', function() {
        numeros('+');
    });
    cuatroBtn.addEventListener('click', function() {
        numeros('4');
    });
    cincoBtn.addEventListener('click', function() {
        numeros('5');
    });
    seisBtn.addEventListener('click', function() {
        numeros('6');
    });
    restaBtn.addEventListener('click', function() {
        numeros('-');
    });
    unoBtn.addEventListener('click', function() {
        numeros('1');
    });
    dosBtn.addEventListener('click', function() {
        numeros('2');
    });
    tresBtn.addEventListener('click', function() {
        numeros('3');
    });
    dividirBtn.addEventListener('click', function() {
        numeros('/');
    });
    resetearBtn.addEventListener('click', function() {
       resetear();
    });
    ceroBtn.addEventListener('click', function() {
        numeros('0');
    });
    puntoBtn.addEventListener('click', function() {
        numeros('.');
    });
    multiplicarBtn.addEventListener('click', function() {
        numeros('X');
    });
    menorBtn.addEventListener('click', function() {
        numeros('<');
    });
    mayorBtn.addEventListener('click', function() {
        numeros('>');
    });
    igualBtn.addEventListener('click', function() {
        operacion();
    });
});
function numeros(valor){
    document.getElementById('resultado').value += valor;
}

function operacion(){
    var opera = document.getElementById('resultado').value;
    if( opera == 0){
        document.getElementById('resultado').value = "Sin Operacion";
    } else {
        document.getElementById('resultado').value = eval(opera);
    }
}

function resetear(){
    document.getElementById('resultado').value = " ";
}