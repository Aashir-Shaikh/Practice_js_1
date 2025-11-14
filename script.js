/*  //Q:1. Ek alert show karo jo “Hello Students!” likha ho.
alert("Hello Students!")

//Q:2. Ek variable name banao aur usme apna naam store karo, phir console.log() se show karo.
var $name = "Aashir";
console.log($name)

//Q:3. Ek variable age banao aur usme apni age store karo. Alert ke through age show karo.
var $age = 22;
alert($age)

//Q:4. Do variables firstName aur lastName banao, phir unko concatenate karke full name console.log() karo.
var firstName = "Muhammad";
var lastName = "Aashir";
console.log(firstName + " " + lastName)

//Q:5. Ek string variable city banao aur usme city ka naam store karo, phir alert me “I live in [city]” show karo.
var city = "Karachi";
alert("I live in " + city)

//Q:6. Ek variable greeting me “Hello” aur ek variable friend me “Ali” store karo. Dono ko concatenate karke alert me show karo.
var greeting = "Hello";
var friend = "Ali";
alert(greeting + " " + friend)

//Q:7. Do number variables num1 aur num2 banao aur unka sum console.log() karo.
var num1 = 5;
var num2 = 15;
console.log(num1 + num2)

//Q:8. Ek number variable price banao aur usko 10 se multiply karke alert me show karo.
var price = 250;
alert(price * 10)

//Q:9. Ek variable marks banao aur uska remainder 3 se calculate karke console.log() karo.
var marks = 90;
console.log(marks / 3)

//Q:10. Do numbers a=15 aur b=7 ke liye addition, subtraction, multiplication aur division ka result console.log() karo.
var a = 15;
var b = 7;
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

//Q:11. Ek variable x=10 me 5 add karo aur phir subtract 3 karo, final result console.log() karo.
var x = 10;
var finalResult = x + 5 - 3;
console.log(finalResult)

//Q:12. Ek variable y=20 me 2 se divide kar ke remainder show karo.
var y = 20
console.log(y / 2)

//Q:13. Ek number variable num=5 banao aur num++ aur ++num ka difference console.log() me explain karo.
var num = 5;
console.log(num++)          //postfix first time call karney men old value show karta hai
console.log(num)            //dubara call karney men +1 increament hua
console.log(++num)          //prefix first call kartey hi +1 karkey result show karta hai

//Q:14. Ek number variable z=10 me z**2 ka result calculate karo.
var z = 10;
console.log(z**2)

//Q:15. Ek number variable n=7 ka modulus 4 calculate karo.
var n = 7;
console.log(n % 4)

//Q:16. Console.log() me 10 + 20 + “30” aur “10” + 20 + 30 ka difference show karo.
console.log(10 + 20 + "30")
console.log("10" + 20 + 30)

//Q:17. Ek variable str="5" aur number variable num=3 ke liye addition aur multiplication ka result console.log() karo.
var str = "5";
var $num = 3;
console.log(str + $num)
console.log(str * $num)

//Q:18. Ek string aur number ko add karte waqt output kyun string ban jata hai, example ke sath explain karo.
console.log(50 + "50")
//Jab aap + operator ka use do data types (string aur number) ke beech mein karte hain, to zyadaatar programming languages (jaise JavaScript aur Java) mein, interpreter confusion se bachne ke liye number ko automatically string mein badal deta hai. Phir, + operator mathematical addition ke bajaye string concatenation (strings ko jodne) ka kaam karta hai.

//Q:19. Teen variables a="I", b="love", c="JavaScript" banao aur unko concatenate karke console.log() karo.
var $a = "I";
var $b = "Love";
var $c = "Javascript";
console.log($a + " " + $b + " " + $c)

//Q:20. Ek variable fruit="apple" aur ek variable quantity=10 me alert me “I have 10 apples” show karo using concatenation.
var fruit = "apples";
var quantity = 10;
console.log("I have " + quantity + " " + fruit)

//Q:21. Ek variable day="Friday" aur activity="party" use kar ke alert me “On Friday I will go to party” show karo.
var day = "Friday";
var activity = "namaz e Jummah";
alert("on " + day +" I will go for " + activity)

//Q:22. User se naam prompt ke through lo aur alert me “Hello [name]!” show karo.
var userInput = prompt("Enter your name here..!");
alert("Hello " + userInput + "..!")

//Q:23. User se do numbers prompt ke through lo aur unka sum alert me show karo.
var $num1 = Number(prompt("Enter your first Number..!"));
var $num2 = Number(prompt("Enter your second Number..!"));
var $result = $num1 + $num2;
alert("Your answer is:  " + $result)

//Q:24. User se favorite color prompt me lo aur console.log() me “Your favorite color is [color]” show karo.
var $color = prompt("What's your favourite color..?")
console.log("Your favourite color is:  " + $color)

//Q:25. Ek number variable num=10 banao, agar number 10 ke barabar hai to console me “Number is 10” show karo.
var _num = 10;
if(_num == 10){
    console.log("Number is " + _num)
} else{
    console.log("Incorrect Number")
}

//Q26. Ek number variable marks=85 banao, agar marks 80 se zyada hain to alert me “A grade” show karo.
var $marks = 85;
if($marks >= 80){
    console.log("A grade")
} else{
    console.log("Wrong value")
}

//Q:27. Ek variable age=18 banao, agar age 18 se zyada hai to alert me “Adult”, warna “Minor” show karo.
var _age = 18;
if(_age >= 18){
    alert("Adult")
} else {
    alert("Minor")
}

//Q:28. Ek variable a=5 aur b=10 ke liye >, <, >=, <=, ==, === ka use karke console.log() me result show karo.
var $a = 5;
var $b = 10;
console.log($a > $b)
console.log($a < $b)
console.log($a >= $b)
console.log($a <= $b)
console.log($a == $b)
console.log($a === $b)


//Q:29. Ek variable x=10 aur y="10" ke liye == aur === ka difference show karo.
var $x = 10;
var $y = "10";
console.log($x == $y)
console.log($x === $y)

//Q:30. Ek variable marks banao aur isko check karo:
// . 90 se upar: “A+”
// . 80-89: “A”
// . 70-79: “B”
// . 60-69: “C”
// . 50-59: “D”
// . 50 se kam: “Fail” */
var _marks = Number(prompt("Enter your marks..!  (0 To 100)"))
if(_marks >= 90){
    alert("Congratulations you got A+ Grade..!")
} else if(_marks >= 80 && _marks <= 89){
    alert("Congratulations you got A Grade..!")
} else if(_marks >= 70 && _marks <= 79){
    alert("Congratulations you got B Grade..!")
} else if(_marks >= 60 && _marks <= 69){
    alert("Congratulations you got C Grade..!")
} else if(_marks >= 50 && _marks <= 59){
    alert("Congratulations you got D Grade..!")
} else {
    alert("Failed, Better luck next time..!")
}
