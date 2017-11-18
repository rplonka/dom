//tablice
//indeksowane od 0
//dostęp do elementu tablicy- nazwa tablicy[indeks]

var tablica =[10, 'Marcin', 30, 40];
console.log(tablica);
console.log(tablica[1]);

//dodanie wartosci na koniec tablicy za pomocą indeksu ostatniego elementu +1
tablica[4]='anna';
console.log(tablica);

//dodanie wartosci do tablicy za pomocą metody push()
tablica.push(50, 'michal');
console.log(tablica);


//metoda pop() usuwa tylko ostatni element z tablicy
tablica.pop();
console.log(tablica);

//unshift() wstawia nowe wartosci na początek tablicy
tablica.unshift('robert', 105);
console.log(tablica);

//metoda shift() usuwa tylko pierwszy element tablicy
tablica.shift();
console.log(tablica);

//.length zwraca dlugosc tablicy
console.log(tablica.length);

//metoda join laczy do stringa elementy tablicy
console.log(tablica.join('-'));

//metoda reverse() odwraca kolejność elementów tablicy
console.log(tablica.reverse());
console.log(tablica);

//metoda sort()służy do sortowania tablicy
console.log(tablica.sort());
console.log(tablica);




