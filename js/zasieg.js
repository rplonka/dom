//zmienn globalne, dostępne w całym skrypcie js

//zmienne lokalne, dostępne tylko wewnątrz danej funkcji

var liczba = 10;
var parametr5 = 30;

function policz() {
    var liczba = 20;
    console.log(liczba);
}

function pomnoz(parametr1, parametr2, parametr3) {
    var result;
    var parametr4=5;
    var parametr5=300;
    
    result = parametr1 * parametr2 * parametr3 * parametr4;
    return result;
}
console.log(pomnoz(3,9,parametr5));