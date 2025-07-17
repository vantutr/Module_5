function fibonacci(n) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
var totalNumber = 10;
var sum = 0;
console.log("D\u00E3y ".concat(totalNumber, " s\u1ED1 Fibonacci \u0111\u1EA7u ti\u00EAn: "));
for (var i = 0; i < totalNumber; i++) {
    var fib = fibonacci(i);
    console.log(fib);
    sum += fib;
}
console.log("T\u1ED5ng c\u00E1c s\u1ED1 Fibonacci: ".concat(sum));
