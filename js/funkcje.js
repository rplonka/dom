function wypiszWKonsoli() {
    console.log('Wywolanie funkcji');
}
wypiszWKonsoli();

function dodawanie(parametr1, parametr2) {
    /*return;
    console.log(parametr1+parametr2);*/
//    zwracanie wartości poprzez użycie słowa return, jeżeli funkcja dojdzie do return, przerywa działalność (kod następujący nie jest wykonywany)
    return parametr1 + parametr2;
}
console.log(dodawanie(4,5));

function mnozenie(parametr3, parametr4) {
    console.log(parametr3*parametr4);
}
mnozenie(dodawanie(3,4),5);
