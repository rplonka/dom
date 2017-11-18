//skrótowe wersje np. +=, -=, *=

var liczba=10;
var liczba2=20;
liczba += liczba2;
console.log(liczba);
liczba = liczba + liczba2
console.log(liczba);

var liczba3=30;
var liczba4='30';


//== - sprawdza czy wartości są takie same 
//=== - sprawdza czy wartości i typ jest taki sam

if(liczba3 === liczba4) {
    console.log('prawda');
}
else {
    console.log('nieprawda');
}

if (!('2' == 2 || (8 < 4)))
{    console.log('prawda2');
}
else {
    console.log('nieprawda2');
}


//operator warunkowy
//warunek ? wartości jeżeli prawda : wartości jeżeli nieprawda
var wynik = (liczba <0) ? -1: 1;
console.log(wynik);

