var n = 18;
// for ( i = 2; i < n-1; i++ ) {
//     console.log(i, n%i);
//     if ( n%i == 0 ) {
//         console.log('not a prime number');
//         break;
//     }
// }

// var n = 77;
// for ( i = 2; i < n-1; i++ ) {
//     console.log(i, n%i);
//     if ( n%i == 0 ) {
//         console.log('not a prime number');
//         break;
//     }
// }

// var n = 79;
// for ( i = 2; i < n; i++ ) {
//     console.log(i, n%i);
//     if ( n%i == 0 ) {
//         console.log('not a prime number');
//         break;
//     }
// }
// console.log('Your number is a primeNumber');

    function isPrimeNumber (n) {
        for ( i = 2; i < n; i++ ) {
            if ( n % i == 0 ) {
            return 'not a prime number';
        }
    
    return 'Your number is a primeNumber';

    }
}
var result = isPrimeNumber(139);
console.log(result);