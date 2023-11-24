console.log("hello js");

//first problem

let numOne = 50;
let numTwo = 20;

if (numOne>numTwo){
    console.log("numOne is maximum number");
}
else if (numOne<numTwo){
    console.log("numTwo is maximum number");
}

//secound problem

let number = -5;

if (number<0){
    console.log("Number is negative:", number);
}
else if (number>0){
    console.log("Number is Positive:", number);
}
else{
    console.log("number is 0");
}

// 3rd Problem

let numDevide =50;

if(numDevide %10 == 0) {
    console.log("Number is Divisible by 10");
}
else{
    console.log("Number is not divisible by 10");
}

//4th problem

let numFour = 8;

if (numFour%2==0) {
    console.log(numFour, "number is even");
}

else{
    console.log(numFour, 'number is odd');
}

//5th problem

let character = "rohan";

if (character==='rohan'){
    console.log("Charecter is Alphabet")
}
else{
    console.log("charecter is Number")
}

//6th problem 

let temperature = 28;

if (temperature>=30){
    console.log("Temperatur is hot");
}
else if (temperature>=25){
    console.log("Temperature is normal")
}
else if(25>temperature){
    console.log("Temperature is cold");
}

//7th problem

let number1 = 3;
let number2 = 2;
let number3 = 2;

if (number1, number2<number3){
    console.log("Nunber3 is Maximum Number")
}
else if (number1, number3<number2) {
    console.log("Number2 is MAximum number");
}
else if (number2, number3 <number1){
    console.log("Number1 is Maximum Number");
}

//8th Problem

let numberFive = 22;

numberFive % 2 ==0 ? console.log("numberFive is even Number") :  console.log("numberFive is ODD number");

// 9th Problem

let numberSix = 30;
let numberSeven = 40;

if (numberSix>=30 && numberSeven>=30) {
    console.log("Both are grather than 30");
}
else{
    console.log("Both are less than 30")
}

//10th Problem

let age = 14;

if (age>=19) {
    console.log("person is Not a teenager");
}
else if (age>=13){
    console.log("person is Teenager")
}
else{
    console.log("person is baby")
}

//12th Problem

let math = 55;
let english = 55;
let science = 48;

let avarageNumber = Math.ceil((math+english+science) / 3);

console.log("Avarage Number:", avarageNumber);

if (avarageNumber>=90){
    console.log("Result is Grade A");
}
else if(avarageNumber>=80){
    console.log('Result is Grade B');
}
 else if(avarageNumber>=70) {
    console.log('Result is Grade C');
}
else if (avarageNumber>=60) {
    console.log('Result is Grade D');
}
else if (avarageNumber>=40) {
    console.log("Result is E");
}
else{
    console.log("Result is FAIL")
}

// 13th Problem

console.log ('Rendom Number:', Math.floor(Math.random()*10+1))

