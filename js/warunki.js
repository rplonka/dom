//if/else-if/else/switch

//najprostszy if wykonuje się tylko wtedy, kiedy warunek jest spełniony (wynikiem jest prawda)
//else wykonuje się wtedy, kiedy wartośc warunku if jest nieprawda (else jest opcjonalnym blokiem)

if ('2' === 2) {
console.log('prawda');

} else if ('2' == 2) {
    console.log('"2" == 2');

} else {
    console.log('nieprawda');
}
       


//switch

var kolor = 'zielony';
switch (kolor) {
    case 'czerwony':
        console.log('wybrales czerwony');
        break;
    case 'zielony':
        console.log('wybrales zielony');
        break;
    case 'bialy':
        console.log('wybrales bialy');
        break;
    default:
        console.log('jestes daltonistą');
}