var osoba = {
    name: 'marcin',
    height: 170,
    print: function () {
        console.log(this.name);
    }
}

console.log(osoba.name + ' ' + osoba.height);
osoba.print();

//dodawanie właściwości do obiektu

osoba.weight = 65;
osoba.printDetail = function () {
    console.log(this.name + ' ' + this.height + ' ' + this.weight)
}

osoba.printDetail();

//tworzenie klas
class Osoba {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    wyswietlInfo() {
        console.log("Imię: " + this.imie + ", " + "Nazwisko: " + this.nazwisko);
    }
}
var krystian = new Osoba('Krystian', 'Dziopa');
krystian.wyswietlInfo();
var lukasz = new Osoba('Łukasz', 'Badocha');
lukasz.wyswietlInfo();