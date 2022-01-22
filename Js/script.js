"use strict";

// 22 Передача по ссылке или по значению, Spread оператор (ES6-ES9)

// // при создания копии объекта создается ссылка на данный объект
// const Obj={ 
//     a: 1,
//     b: 2,
//     c: {
//         x:3,
//         y:4
//     }
// };

// const copyObj=Obj;

// Obj.a=11;

// console.log(Obj);
// console.log(copyObj);

// // создание поверхностной копии на объект

// function newObj(mainObj){
//     let objCopy={};
//     let key;

//     for (key in mainObj){
//         objCopy[key]=mainObj[key];
//     }

//     return objCopy;
// }

// const Obj={
//     a: 1,// поверхностная копия
//     b: 2,// тоже
//     c: { 
//         x:3,// ссылка
//         y:4 // ссылка (см console.log)
//     }
// };

// const newCopyObj=newObj(Obj);
// newCopyObj.a=11111;
// newCopyObj.c.x=10;

// console.log(Obj);
// console.log(newCopyObj);

// // при объединении объектов создается поверхностная копия этих объектов
// const obj = { // куда добавляем
//     a: 1 ,
//     b: 2
// };

// const add = {// что добавляем
//     c : 2,
//     d : 3
// };


// const unionObj = Object.assign(obj,add); // совмещенный объект

// console.log(unionObj);
// console.log(obj);

// // для создания поверхностной копии объекта объединям пустой 
// // объект с объектом,копию которого хотим сделать

// const copyObj = Object.assign({},obj); 
// copyObj.a=111111;

// console.log(copyObj);

// создание копии массива
// const oldArr = ['a','b','c'];
// const newArr = oldArr.slice();

// newArr.push('sdfsdfdsf');

// console.log(oldArr);
// console.log(newArr);

// // разделяем массив на отдельные элементы
// const video = ['youtube ','vimeo','rutube'],
//       blogs = ['wordpress','livejournal','blogger'],
//       internet =[...video,...blogs,'vk','instagram','facebook'];

//       for( let i=0;i<internet.length;i++){
//           console.log(`${i+1}:${internet[i]}`);
//       }

// function log(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);   
// }
// const num = [2,5,7];
// log(...num);

// const array = ["a","b"];

// const newAarray = [...array];

// console.log(newAarray);

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// console.log(q);

// 23. Основы ООП, прототипно-ориентированное наследование

// let str ="some";

// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function(){
//         console.log("Hello!");
//     }
// };

// const jonh = {
//     health: 100
// }

// // jonh.__proto__ = soldier;// устаревший вариант

// Object.setPrototypeOf(jonh,soldier);
// // устанавливаем прототип для john от soldier

// console.log(jonh);
// console.log(jonh.armor);
// jonh.sayHello();

// const jonh = Object.create(soldier);
// // создаем новый объект john,который будет прототипно
// // наследоваться от soldier,для того ,чтобы john имел
// // доступ к свойствам и методам soldier 

// console.log(jonh);
// console.log(jonh.health);
// console.log(jonh.armor);
// jonh.sayHello();

// function Car(name1){
//     let self=this;
//     self.name=name1;
//     let wheels=4;
//     function howMatchWhels(){
//         console.log(`у ${self.name} ${wheels} колеса`)
//     }
//     self.howM=function(){
//         howMatchWhels();
//     }
// }

// Car.prototype.f=function(){
//     console.log('ура ура ура');
// }

// let car1 = new Car('audi');
// car1.howM();
// car1.f(); 

// function Class1(num){
//     this.value=num;
// }

// Class1.prototype.f1=function(){
//     console.log(this.value);
// }

// let obj1 = new Class1(1);
// let obj2 = new Class1(2);

// obj1.f1();
// obj2.f1();

// console.log(obj1.f1===obj2.f1);


// наследованиеееееееееееееееееееееееееееееееееееееееееееееееееее

// function Animal() {
//     this.eyes = 2;
// }

// Animal.prototype.showEyes = function () {
//     console.log(`Eyes: ${this.eyes}`);
// }
// Animal.prototype.setLegs = function (legs) {
//     this.legs=legs;
// }
// Animal.prototype.showLegs = function () {
//     console.log(`Legs: ${this.legs}`);
// }

// function Tiger(){
//     Animal.call(this);
//     this.setLegs(4);
//     this.roar=function(){
//         console.log('Я тигр и я реву!');
//     }
// }

// Tiger.prototype = Object.create(Animal.prototype);
// Tiger.prototype.constructor=Tiger;

// function Batterfly(){
//     Animal.call(this);
//     this.setLegs(6);
//     this.fly=function(){
//         console.log('Я бабочка и я летаю!');
//     }
// }

// Batterfly.prototype = Object.create(Animal.prototype);
// Batterfly.prototype.constructor=Batterfly;



// class Animal {
//     constructor(){
//         this.eyes = 2;
//     }
//     showEyes(){
//         console.log(`Eyes: ${this.eyes}`);
//     }
//     setLegs(legs){
//         this.legs = legs;
//     }
//     showLegs(){
//         console.log(`Legs: ${this.legs}`);
//     }
// }

// class Tiger extends Animal{
//     constructor(){
//         super();
//         this.setLegs(4);
//     }
//     roar(){
//         console.log('Я тигр и я реву!')
//     }
// }

// class Batterfly extends Animal{
//     constructor(){
//         super();
//         this.setLegs(6);
//     }
//     fly(){
//         console.log('Я бабочка и я летаю!');
//     }
// }

// let tigerEvgeniy = new Tiger;

// tigerEvgeniy.roar();
// tigerEvgeniy.showEyes();
// tigerEvgeniy.showLegs();


// let butterflyDashka = new Batterfly;

// butterflyDashka.fly();
// butterflyDashka.showEyes();
// butterflyDashka.showLegs();

window.addEventListener('swipeLeft', function (EO) {
    EO = EO || window.event;
    EO.preventDefault();
    alert('swipeLeft');
})
window.addEventListener('tap', function (EO) {
    EO = EO || window.event;
    EO.preventDefault();
    alert('tap');
})
window.addEventListener('swipeUp', function (EO) {
    EO = EO || window.event;
    EO.preventDefault();
    alert('swipeUp');
})