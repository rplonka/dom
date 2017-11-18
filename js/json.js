var jsonOsoby = {
    'osoby': [
        {
            imie: 'krystian',
            nazwisko: 'dziopa',
            zainteresowania: [
            {
            nazwa: 'podroze'},
            {nazwa: 'gotowanie'
        }
            ]
        },
        {
            imie: 'dominik',
            nazwisko: 'nowak',
            zainteresowania: [
            {
            nazwa: 'pilka nozna'},
            {nazwa: 'koszykowka'
        }
            ]
        },
        {
            imie: 'klaudia',
            nazwisko: 'kowalska',
              zainteresowania: [
            {
            nazwa: 'plywanie'},
            {nazwa: 'ksiazki'
        }
            ]
        }
    ]
}

for(var i=0; i<jsonOsoby.osoby.length; i++) {
    for(var j=0; j<jsonOsoby.osoby[i].zainteresowania.length;j++)
        {
            console.log(jsonOsoby.osoby[i].zainteresowania[j].nazwa);
        }
}



console.log(jsonOsoby.osoby[2].zainteresowania[1].nazwa);


//for(var i=0; i < jsonOsoby.osoby.length; i++) {
//    console.log(jsonOsoby.osoby[i].imie);
//}

//za pomocą forEach

jsonOsoby.osoby.forEach(function(element, index) {
    console.log(element.imie + ' ' + element.nazwisko);
})