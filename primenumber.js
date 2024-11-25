// Prime Number Check 
const numberCheck = 1

let isPrime

for (let index = 0; index < numberCheck/2; index++) {
    if(numberCheck % index == 0){
        isPrime = false;
        break
    }
    if (isPrime) {
        console.log(`${numberCheck} is not a prime number`);
    } else {
        console.log(`${numberCheck} is a prime number`);
    }
    
}