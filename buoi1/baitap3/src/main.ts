function fibonacci(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let totalNumber: number = 10;
let sum:number = 0;

console.log(`Dãy ${totalNumber} số Fibonacci đầu tiên: `);
for (let i = 0; i < totalNumber; i++) {
    const fib = fibonacci(i);
    console.log(fib);
    sum += fib;
}
console.log(`Tổng các số Fibonacci: ${sum}`);
