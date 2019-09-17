
/*var firstName = "John" ;
console.log(firstName);

var lastName = "Doe";
console.log(lastName);

var age = 22;
console.log(age);

var isMarried = true;
console.log(isMarried);

var status3;
console.log(status3);


//Variable mutation and type coersion

var firstName = "John";
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = 'false';

console.log(firstName + 'is a ' + age + 'year old' + 'is he married? ' + isMarried);

//variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + 'is he married? ' + isMarried);

var lastName = prompt('what is his last name? ');
console.log(firstName + ' ' + lastName);


//Basic Operators



var now, ageJohn, ageMark, yearJoh, yearMark;

now = 2019;
ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn, yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical Operators
var johnOlder  = ageJohn > ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof now);
console.log(typeof 'John and Mark');
var x;
console.log(typeof x);

//operator precedence


var now = 2019;
var yearJohn = 1989;
var fullAge = 17;
    //multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
    //grouping
var ageJohn = now - yearJohn;
var ageMark = 35;

var average = (ageJohn + ageMark) / 2;
console.log(average);

var x, y;
y =  (3 + 5 ) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(y);

    //More operato
x = x * 2;
x *= 2;

x = x + 2;
x += 2;

x = x + 1;
x += 1;
x++;

/*TUGAS #1


Mark and John are trying to compare their 
BMI (Body Mass Index), which is calculated using the formula

BMI = mass/(height*height)
(mass in kg and height in metr).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMI's 
3. Create a boolean variable containing information about the whether Mark has 
   a higher BMI than John
4. Print a string to the console containing the variable from step 3.
   Something like
   (" Is Mark's BMI higher than John's? true")
  */

/*  var massMark, massJohn, heightMark, heightJohn;
  massMark = 60;
  massJohn = 65;
  heightMark = 1.70;
  heightJohn = 1.73;

  var bmiMark = massMark/(heightMark*heightMark);
  var bmiJohn = massJohn/(heightJohn*heightJohn);

  var isMarkHigher = bmiMark > bmiJohn;

  console.log('Mark mass is = ' + massMark);
  console.log('Mark height is = ' + heightMark);
  console.log('John mass is = ' + massJohn);
  console.log('John height is = ' + heightJohn);
  console.log('Marks BMI is = ' + bmiMark);
  console.log('Johns BMI is = ' + bmiJohn);
  console.log('Is Marks BMI higher than Johns ? ' + isMarkHigher);
*/


/*
* If / Else Statements
*/

/*var firstName = 'John';
var status = 'married';

if(status === 'married'){
  console.log(firstName + ' is married');
}else{
  console.log(firstName + ' will hopefully marry soon');
}

var isMarried = true;

if (iMarried) {
  console.log(firstName + ' is married');
}else{
  console.log(firstName + ' is hopefully marry soon');
}
/*

/*******************************************************************
/*
* Boolean Logic (AND, OR , NOT)
*/

/*
var firstName ='John';
var age = 20;

if(age <13){
  console.log(firstName + ' is a boy');
}else if(age >= 13 && age < 20){//age >= 13 AND age <20
  console.log(firstName + ' is a teenager');
}else if(age >= 20 && age < 30){
  console.log(firstName + ' is a young man');
}else{  
  console.log(firstName + ' is a man');
}
*/


/*******************************************************************
/*
* The Ternary Operator and Switch statement)
*/

/*
var firstName = 'John';
var age = 1;

//Ternary Operator
age >= 10 ? console.log(firstName + ' drinks juice')
: console.log(firstName + ' drinks milk');


var drink = age >= 10? 'juice' : 'milk';
console.log(drink);
*/

//Switch statement
/*var job = 'instructor';

Switch(job){
  case 'instructor':
  case 'teacher':
  console.log(firstName + ' is a teacher');
  break;
  case 'driver':
  console.log(firstName + ' is a driver');
  break;
  case 'designer':
  console.log(firstName + ' is a designer');
  break;
  default:
  console.log(firstName + ' does somehting else');
}
*/

/*var firstName = '';
var height = 150;
var mass = 60;

height >= 160 ? console.log(firstName + 'John lebih tinggi dari Mark')
: console.log(firstName + 'Mark lebih rendah dari John');

var height = mass >= 60 ? console.log(firstName + 'Mark lebih berat dari Jhon')
: console.log(firstName + 'John lebih ringan dari Mark');
*/

/*var nama, peran;
nama = 'Mikael';
peran = 'Penyihir';

if(nama === 'Mikael' && peran ===' '){
  console.log('Halo Mikael, Pilih peranmu untuk memulai game!');
}else if(nama === 'Nina' && peran === 'kesatria'){
  console.log('Selamat datang di Dunia Proxytia, nina');
  console.log('Halo kesatria Nina, kamu dapat menyerang dengan senjatamu!');
}else if(nama === 'Danu' && peran === 'Tabib'){
  console.log('Selamat datang di Dunia Proxytia, Danu');
  console.log('Halo tabib Danu, kamu akan membantu temanmu yang akan terluka');  
}else if (nama === 'Zero' && peran === 'Penyihir'){
  console.log('Selamat datang di Dunia Proxytia, Zero');
  console.log('Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!');
}
else{
  console.log('Nama harus disisi');
}*/


/*
  Loop and interation

*/

//for loop
/*
for(var i=0; i<10; i++){
	console.log(i);
}

var john =['John', 'Smith', 1990, 'designer', false];

for (var i=0; i<john.length; i++){
	console.log(john[i]);
}


//while loop

while(i<john.length){
	var i = 0;
	console.log(John[i]);
	i++;
}

// continue and break

var john =['John', 'Smith', 1990, 'designer', false];

for(var i=0; i<John.length; i++){
	if(typeof john[i] !== 'string'){
		continue;
	}
	console.log(john[i]);
}


var john =['John', 'Smith', 1990, 'designer', false];

for(var i=0; i<John.length; i++){
	if(typeof john[i] !== 'string'){
		break;
	}
	console.log(john[i]);
}*/

//Looping backward 
/*for(var i=john.length-1; i>=0; i--){
	console.log(john[i]);
}



   Exercise #3

   John and his family went on a holiday and went to 
   5 different restaurants. The bills were
   $124, $48, $268, $180 and $42.

   To tip the waiter a fair amount, John created
   a simple tip calculator (as a function). He likes
   top 20% of the bill when the bill is less than
   $100, 10% when the bill is between $100 and $300,
    and 25% if the bill more than $300.

    Implement a tip calculator using loops;
    1. create an array for the bill
    2. Add a method to Calculate the tip
    3. As an output, create a new array containing all tips
       and array containing final paid amouns (bill + tip)
       and calculate the output using loops

    Hint: 1. To Calculate 20% of a value simply multiply 
             in with 20/100 = 0.2 or .2
          2.  Start with 2 empty arrays [] as propertis and then 
              fill them up in the loop


     Good luck*/
/*




function palindrome(katak){
	new_kata ='';
	for(i=kata.length-1; i>=0; i--){

		new_kata += kata[i];
	}
	if(kata === new_kata){
		return 'true';
	}else{
		return 'false';
	}
}

console.log(palindrome)('katak'));
console.log(palindrome('jjj'));*/


var bills = [124, 48, 268, 180, 42],
price = [];
for(var i=0; i<bills.length; i++)
{
	if(bills[i]<50){
		price[i]=bills[i]*.20;
	}
	else if(bills[i]>==50&&bills[i]<==200){
		price[i]=bills[i]=bills[i]*.15;
	}
	else if(bills[i]>200){
		price[i]=bills[i]*.20;
	}
	console.log('The bills : ');
	for(var i=0; i<bills.length; i++){

	}
	console.log('The payments :');
	for(var i=0; i<bills.length; i++){
		console.log(price[i]);
	}
}