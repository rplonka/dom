var tablica = ['marcin', 10, -50, 'anna', 'michal'];

//indeks: 0, numer elementu: 1, wartosc: marcin
for(var i=0; i<tablica.length; i++) {
    if(i==3) {
            
    break
}
console.log('indeks: ' + i + ' numer elementu: ' + (i+1)+ ' wartosc: ' + tablica[i]);

}

tablica.forEach(function(element,index) {
    console.log('indeks: ' + index + 'numer elementu: ' + (index+1) + ' wartosc: ' + element);
});

//while

var it=0;
while (it <= 10) {
    console.log(it);
    it++;
}
var it=10;
while (it > 0) {
    console.log(it);
    it--;
}

do {
    console.log('wynik petli do...while');
} while('2' ===2)

for (var i=0; i<10; ++i) {
    if(i==5) {
        continue;
    } else {
        console.log(i);
    }
    console.log('--');
}
