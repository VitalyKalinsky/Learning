/*var myName = window.prompt("What's your name? ");
console.log("Hello", myName)


document.getElementById("myButton").onclick = function(){

    var myName = document.getElementById("myText").value;
    console.log("Hello", myName)
}



myName = Boolean(myName) конвертирование переменных
console.log(myName)



function toCelsius(f){
    return (f-32) * (5/9)
    или же просто другие штуки кроме return
}; 




это бл объект. непонятно даже как его обозначить для понимания,
 хотя похоже на создание объекта через класс, но изменённое 
var human = {
    name: "Rick",
    age: 65,

    eat : function(){
        console.log("Rick is eating food")
    },

    drink : function(){
        console.log("Rick is drinking alcohol")
    },

    sleep : function(){
        console.log("Rick has passded out")
    }
};
human.age;
human['name'];
human.sleep();



var cars = ["Mustang", "Corvette", "Jaguar"];
console.log(cars[0]);
cars.push("Tesla"); добавить
cars.pop(); удаление последнего элемента
cars = cars.sort();
cars = cars.reverse();
var numberOfCars = cars.length;



var age = 80;
if(18<=age && age<=64 ){
    console.log("pey");
}
else if(age>=65){
    console.log("16");
}
else{
    console.log("12");
}



var grade = "asd";
switch (grade){
    case "A":
        console.log("great");
        break;
    case "B":
        console.log("good");
        break;
    case "C":
        console.log("ok");
        break;    
    case "D":
        console.log("bad");
        break;
    case "F":
        console.log("failed");
        break;
    default:
        console.log("it is not a grade")
}


do{
    var creditCard = window.prompt("what's your credit card's number???");
}while(creditCard==""); один раз делает, проверяет и так далее
while здесь как в джаве



for(let i = 0; i<10;i++){ используется именно let. это как переменная в огр.поле действия
    console.log("xk")
}
for(let i in list){
    console.log(Car[i])
}



МОЖНО ВНЕДРЯТЬ В HTML ОАОАОАОАО
document.getElementById("rect").innerHTML += symbol
document.getElementById("rect").innerHTML += "<br>"





var myNum;

myNum = Math.round(3.5)//4
myNum = Math.floor(3.9)//3
myNum = Math.ceil(3.1)//4
myNum = Math.pow(3,2) на выходе 9(*число*,*степень*)
myNum = Math.sqrt(64)//корень
myNum = Math.abs(-1)//модуль
myNum = Math.min(1, 2, 3, 4, 5, 6, 7, 8)//мин. число из списка
myNum = Math.max(1, 2, 3, 4, 5, 6, 7, 8)//макс. число из списка
myNum = Math.PI//ну число PI 3.14159
myNum = Math.E//ну число E не знаю что это, но что то связанное с логорифмами


ПОИСК ГИПОТИНУЗЫ
var a = window.prompt("Введи первый катет");
var b = window.prompt("Введи второй катет");
var c = Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2));
console.log(c)


РАНДОМ
//randNum = Math.random();
randNum = Math.round(Math.random() * 6);
console.log(randNum);


date = new Date("April 20, 2022 16:20:01:02");


let year = date.getFullYear()
let month = date.getMonth();
Week =
Month=
hours =
minutes =
seconds =
mil1liseconds =

var myName = "Bro The Code";
console. log (myName . length) ;
console.log (myName.charAt (0));
console. log (myName. indexOf (" "));
console. log (myName. lastIndexOf ("o"));
console. log (myName. trim()); //убирает пробелы лишние(не между слов)
console. log (myName. toUpperCase ());
console. log (myName . toLowerCase ());
var firstName = myName. slice (0, 3)
var firstName = myName. slice (0, myName. indexOf (" "));

var name = firstName.concat(" ", lastName);//добавляет одно к другому

let ask = (question, yes, no) => (confirm(question)) ? yes() : no()*/