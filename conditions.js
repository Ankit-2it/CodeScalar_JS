let a,b,c;

a = 1.2;
b = 1.11;
c = -10.4;

// 1.)
let greaterst = Math.max(a, b, c)
console.log(`The greatest no is : ${greaterst}`);
 

// 2.)
if(a > b){
    if(a > c){
        console.log("a is greatest")
    }else{
        console.log("c is greatest")

    }
}else{
    if(b > c){
        console.log("b is greatest")
    }else{
        console.log("c is greatest")

    }
}

// 3.)
let greatEst = (a > b) ? (a > c ? a : c):(b > c ? b : c)

console.log(`The greatest number is ${greatEst}`);

// 4.)    reduce()

let nos = [12, 7, 51]
let greatEST = nos.reduce((max, num) => (num > max ? num : max), nos[0]);
console.log(`The greatest number is ${greatEST}`);

// 5.)  Sorting

let numberss = [31, 45, 29]
numberss.sort((a,b) => a - b);
let greaTest = numberss[numberss.length - 1]

console.log(`The greatest number is ${greaTest}`);

