// *---------------------------------Chapter ( 21 - 25 )------------------------------------*


//task 1


// var firstName = prompt("Enter First Name")
// var lastName = prompt("Enter Last Name");
// {
//     alert("Full name is " +firstName+lastName)
// }


//task 2


// var fav = prompt (" favorite mobile phone model");
// document.write("My Favourite Phone is : " + fav +"<br>")
// document.write("Length Of String is : " + fav.length);

//task 3

// var text = "Pakistan"
// var indxNum = text.indexOf("n")

// document.write("String : " + text +"<br>")
// document.write("Index of n : "+ indxNum)


//task 4

// var str = "Hello world"
// var lastIndexOf = str.lastIndexOf("l");

// document.write("String : " + str +"<br>")
// document.write("Index of n : " +lastIndexOf )


//task 5

// var str = "Pakistani";
// var res = str.charAt(3);

// document.write("String : " + str +"<br>")
// document.write ("Character at index 3 : " + res)

//task 6

// var firstName = prompt("Enter First Name")
// var lastName = prompt("Enter Last Name");

// var res = firstName.concat(lastName);
// document.write ("Full Name : " + res)

//task 7

// var text = "Ali and Sami are best friends. They play cricket and football together ."
// var indxNum = text.indexOf("and");
// var ft = text.slice(0,indxNum)
// var st = "&"
// var tt = text.slice(indxNum+3)
// document.write(ft+st+tt)

//task Upper case

// var str = prompt("Enter words");
// var res = str.toUpperCase();{
//     alert(res)
// }

//task title

// var str = prompt("Enter word") 

// alert(

// str.split(' ')
//    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
//    .join(' ')

// )

//task var num


// var d = 109.65;
// var s = d + '';
// s =s.replace('.', '');
// s = parseInt(s);
// document.write("Number :" + d +"<br>")
// document.write( "ROll No :" + s )


//task items

// var bak = ["cake", "apple pie", "cookie", "chips", "patties"]

// var bakIn=prompt("Welcome To ABC Bakery.What do you want to order Sir/Madam");

// for( var i=0; i<=10; i++)
// {
//     if(bakIn === bak[i])
//         {
//             document.write(bakIn + " is availaible at index " + i + " in our bakery");
//             break;
//         }
//         else
//         {
//             document.write("We are Sorry " + bakIn + " is not availaible in our bakery");
//             break;
//         }
// }

//task Spilt method

// var withBreaks = "U <br> n <br> i <br> v <br> e <br> r <br> s <br> i<br> t<br> y<br><br> o <br> f<br><br> K<br> a<br> r<br> a<br> c<br> h<br> i ";
// document.write(withBreaks)


//task last letter

// var str =prompt ("Enter words"); 
// var res = str.slice(-1); 
// document.write("User Input : " + str +"<br>")
// document.write("Last Character Of input : " + res)


//task Count 


// var temp = "The quick brown fox jumps over the lazy dog";
// var count = (temp.match(/the/g) ).length;
// alert(count);

// *---------------------------------Chapter ( Remaining )------------------------------------*




// *---------------------------------Chapter ( 26 - 30 )------------------------------------*



//task 1

// var num = prompt("Enter No")
// document.write("Number : " + num +"<br>")

// var round = Math.round(num)
// document.write("Round Off value : " + round +"<br>") 


// var floorvalue = Math.floor(num)
// document.write("Floor value : " + floorvalue +"<br>") 


// var ceil = Math.ceil(num)
// document.write("Ceil value : " + ceil +"<br>" )

//task 2

// var num = prompt("Enter No")
// document.write("Number : " + num +"<br>")

// var round = Math.round(num)
// document.write("Round Off value : " + round +"<br>") 


// var floorvalue = Math.floor(num)
// document.write("Floor value : " + floorvalue +"<br>") 


// var ceil = Math.ceil(num)
// document.write("Ceil value : " + ceil +"<br>" )


//task 3



// var num = prompt("Enter Number")
// var abs = Math.abs(num)

// alert ("The absolute value of " + num + " is : " + abs)


//task 4


// var random = Math.floor(Math.random() * 10) +1;

// document.write("Random Dice value : " + random)




//task 5

// Math.floor( Math.random() * 6 )
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('You rolled a ' + diceRoll);



//task 6


// var random = Math.floor(Math.random() * 100) +1;

// document.write("Random Number between 1 - 100 : " + random)

//task head tails

// var headuser = prompt("name 1")
// var tailuser = prompt("name 2")

// var toss = Math.random()*2;
// var floor = Math.floor(toss)

// if(floor === 0){
//     document.write("Head " + headuser + " Win the toss")
// }
// else{
//     document.write("tail" + tailuser + " Win the toss")
// }


//task 7

// var kg = prompt("Enter Your Weight")
// var kgr = Math.floor(Math.random() *100 +1);

// document.write("Your Weight is  :  " + kgr + " Kilogram")


//task 8


// var num = prompt("Enter Number in 1 - 10")

// if (num == 5){
//         alert("Bingo ! Correct Answer")
// }
// if (num == 1){
//         alert ("Sorry Try Again")
// }
// if (num == 2){
//         alert ("Sorry Try Again")
// }
// if (num == 3){
//         alert ("Sorry Try Again")
// }
// if (num == 4){
//         alert ("You r closet to secret no")
// }
// if (num == 6){
//         alert ("You r closet to secret no")
// }
// if (num == 7){
//         alert ("Sorry Try Again")
// }
// if (num == 8){
//         alert ("Sorry Try Again")
// }
// if (num == 9){
//         alert ("Sorry Try Again")
// }
// if (num == 10){
//         alert ("Sorry Try Again")
// }







// *---------------------------------Chapter ( 31 - 34 )------------------------------------*

//task 1

// var a = new Date();
// document.write(a)


//task 2

// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"];

// const d = new Date();
// document.write("The current month is " + monthNames[d.getMonth()]);

//task 3

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];

// document.write(nameOfToday)


//task 4

//task 5


// if( new Date() <=15){
//     document.write("<br><br><br> First 15 days of the month.");
// }else{
//     document.write("<br><br><br> Last days of the month.");
// }


//task 6

// var a = new Date();
// document.write("Current Date : "+a +"<br>" +"<br>")

// var b= a.getTime();
// document.write("Elapsed Miliseconds since January 1, 1970 : "+b +"<br>" +"<br>")


// var minutes = 1000 * 60;
//   var hours = minutes * 60;
//   var days = hours * 24;
//   var years = days * 365;
//   var d = new Date();
//   var t= d.getTime();

//   var y = Math.round(t / minutes);

//   document.write("Elapsed Miliseconds since January 1, 1970 : "+y +"<br>" +"<br>")


//task 7

// var d = new Date();
// var n = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
// document.write("Its " + n)


//task 8

// var d = new Date(2020, 11, 31, 00, 00, 00, 0);
// document.write(d)



// task 10



// var date2015=new Date("January 01, 2015");
// var ref2015=new Date("December 05, 2015 20:50:16");
// var difference=ref2015.getTime()-date2015.getTime();
// var secondsPassed=difference/(1000*60);
// document.write('<br> '+date2015);
// document.write('<br>On reference date :' +ref2015.toString()+',<br> '+Math.floor(secondsPassed) +' seconds have passed from begining of 2015');



//task 11

// var reff2015=new Date("December 05, 2015 23:08:16");

// document.write('<br><br><br> Current Date :'+reff2015);
// reff2015.setHours(reff2015.getHours()-1);
// document.write('<br>1 hour ago, it was '+reff2015);

//task 12

// var reff2015=new Date("December 05, 2015 23:08:16");

// document.write('<br> Current Date :'+reff2015);
// reff2015.setFullYear(reff2015.getFullYear()-100);
// document.write('<br>100 year(s) back, it was '+reff2015);


//task 13


// var age=prompt('Age');
// document.write('<br> Your age: '+age);
// var Year=current.getFullYear();
// var birthYear= Year-age;
// document.write('<br> Your birth year: '+birthYear);


//task 14

// var customerName='Muhammad'
// month=months[current.getMonth()];
// var numberOfUnits=244,chargesPerUnit=16,surcharge=350;
// var netAmountPayable=numberOfUnits*chargesPerUnit;
// var grossAmountPayable=surcharge+netAmountPayable;

// document.write('<br> <h1 class="font-Mont">K-Electric Bill</h1>');
// document.write('<br> <p class="font-Mont">Customer Name : <b>'+customerName+' </b><br> Month : <b>'+month+'</b> <br> Number of Units : <b>'+numberOfUnits+ '</b> <br>Charges per Unit : <b>'+chargesPerUnit+'</b></p>');

// document.write('<p class="font-Mont">Net Amount Payable (with in due date) : <b>'+netAmountPayable+'</b> <br> Late Payment Surcharge : <b>'+surcharge+'</b> <br> Gross Amount Payable (after due date) : <b>'+grossAmountPayable+'</b>');










// *---------------------------------Chapter ( 35 - 38 )------------------------------------*




//task 1 

// var d= new Date();
// document.write(d)


//task 2

// var a = prompt("Enter First Name");
// var b = prompt("Enter Last name");
// alert(a+b)


//task 3

// var num1 = prompt("Enter First Number")
// var num2 = prompt("Enter Second Number")
// var add=num1+num2;
// alert((+num1)+(+num2))


//task 4

// var val1=prompt("enter your first value")
// var sign=prompt("enter your operator")
// var val2=prompt("enter your second value")


// console.log(val1+sign+val2)

// if(sign ==="+"){
//     alert((+val1)+(+val2))
// }
// else if(sign ==="-"){
//     alert(val1-val2)
// }

// else if(sign ==="*"){
//     alert(val1*val2)
// }

// else if(sign ==="/"){
//     alert(val1/val2)
// }

// else if(sign ==="%"){
//     alert(val1/val2*100)
// }


//task 5


// var sq = prompt("Enter Number")

// function squareIt(number) {
//   return number ** 2;
// }

// document.write(squareIt(sq));


//task 6

// var f = prompt("Enter Number")

// function factorial(x) { 
//  if (x === 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);
         
// }
// document.write(factorial(f))



//task 7

// var c = prompt("Enter Start Num")
// var d = prompt("Enter End Num")


// while (c<d)
//   {
//   c++;
//   document.write(c+"<br>");
//   }


//task 8

//task 9

// var length=6;
// var width=3;

// document.write(" Arguments passed as variable & Area is  : "+area(length,width)+"<br> ");
// document.write(' Arguments passed as value(10,4) & Area is  : '+area(10,4));


// function area(length,width){

//     var area=length*width;
//     return area;
// }

//task 10


// var word=prompt('Plaindrome Word Check');
// var wordd="";
// for(var i=word.length-1;i>=0;i--){

//     wordd+=word[i];

// }
// if(wordd===word){

//     alert(word + ' is palindrome word');
// }else{
//     alert(word + ' is not palindrome word');
// }

//task 11


// sentence= prompt("Enter Sentence");
// maketitleCase(sentence);
// function maketitleCase(sent){

//     sent=sent.split(" ");

//     for(var i=0;i<sent.length;i++){
//     sent[i]=sent[i].charAt(0).toUpperCase()+sent[i].slice(1);
//     }
//     for(var i=0;i<sent.length;i++){

//     document.write(sent[i]+' ');
//     } 
// }


//task 12


// var  string=prompt('Check Longest word');

// string=string.split(' ');
// longestString(string);

// function longestString(string){
// var largeValue=string[0];
//     for(var i=1;i<string.length;i++){
//         if(largeValue.length < string[i].length){
//             largeValue=string[i];
//         }
//     }
//     document.write('<br> Longest String : '+largeValue);
// }


// task 13


// count=0;

// var counted=searchCount('JSResourceS.com','o');
// document.write(" Number of 'o'(s) in given string : "+counted);

// function searchCount(string,char){

//     string=string.toLowerCase();
//     for(var i=0;i<string.length;i++){

//     if(string.slice(i,char.length+i)===char){
//         count++;
//     }

//     }
// return count;
// }




//task 14


// function calcCircumference(radius){

//     var circumference=2*3.142*radius;
//     circumference=circumference.toFixed(2);
// return circumference;
// }

// var c= prompt("Enter Circumference")
// var d= prompt("Enter Area")

// document.write("<br> Cirumference of Circle of radius : "+calcCircumference(c));
// document.write("<br> Area of Circle of radius  : "+calcArea(d));


// function calcArea(radius){
//     var area=3.142*(radius*radius);
//     area=area.toFixed(2);

//     return area;
// }

