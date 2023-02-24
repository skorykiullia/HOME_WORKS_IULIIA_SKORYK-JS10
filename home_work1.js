function quadraticEquation (a,b,c) 
{let d = (b * b) - (4 * a * c);
let x1;
let x2;
if (a === 0) {
    if (b === 0) {
        if (c === 0) {
            alert('x1 = any');
        }
        else {
            alert('no solutions')
        }

    }
    else {
        alert(x1 = c / b)
    }

}
else {
    if (d > 0) {
        alert(x1 = (-b + Math.sqrt(d)) / (2 * a));
        alert(x2 = (-b - Math.sqrt(d)) / (2 * a));
    }
    else {
        if (d < 0) {
            alert('no solutions')
         }
        else if (d === 0) {
            alert(x1 = -b / (2 * a));

        }
    }
}
return alert;
}
let a = +prompt('Введите а');
let b = +prompt('Введите b');
let c = +prompt('Введите c');
quadraticEquation (a,b,c);




function myFactorial(n) 
{let F = 1;
if (n < 0) {
    alert('Enter any natural number')
}
else {
    for (let k = 1; k <= n; k++) {
        F = F * k;
    }
}
alert(F);
return alert;
}
let n = +prompt('Enter n');
myFactorial(n);






function myFib(e)
{let fib = [0, 1];
let i = 1;
if (e < 0) {
    alert('Enter any natural number')
}
else {
    while (fib[i] < e) {
        fib[i + 1] = fib[i] + fib[i - 1];
        i++;
    }
}
alert(fib.slice(0, -1));
return alert;
}
let e = +prompt('Enter number');
myFib(e);





function myPir(n1)
{
let pyr = "";
    for(let i = 1; i <= n1; i++) {
        for(let j = 1; j <= n1 + n1- 1; j++) {
            if(j <= n1 - i || j >= n1 + i) {
                pyr += "-";
            } else {
                pyr += "#";
            }
        }
        pyr+="\n"
}
return alert(pyr)};
let n1 = +prompt('Enter natural number');
myPir(n1);
