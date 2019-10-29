
function isPrime(num){
    for(let i=2;i<=Math.sqrt(num);i++){
        if((num%i) == 0)
            return false
    }
    return true
}
console.log('Enter a number');
let num = process.stdin.on('data', (data) => {
    console.log(isPrime(data.toString()))
    process.exit(0)
})
//console.log(num);



