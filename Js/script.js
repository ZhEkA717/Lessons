// "use strict";

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