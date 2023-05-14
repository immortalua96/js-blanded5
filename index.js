//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/
// const btnShowEl = document.querySelector('#alertButton');
// const inputShowEl = document.querySelector('#alertInput');
// btnShowEl.addEventListener('click', showMe);
// function showMe() {
//   alert(inputShowEl.value.trim());
// }
//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

// const btnSwapEl = document.querySelector('#swapButton');
// const leftInputEl = document.querySelector('#leftSwapInput');
// const rightInputEl = document.querySelector('#rightSwapInput');

// btnSwapEl.addEventListener('click', swapInputText);

// function swapInputText() {
//   let leftInputValue = leftInputEl.value;

//   let rightInputValue = rightInputEl.value;

//   leftInputEl.value = rightInputValue;
//   rightInputEl.value = leftInputValue;
// }

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
// const passwordInputEl = document.querySelector('#passwordInput')
// const passwordBtnEl = document.querySelector('#passwordButton')

// passwordBtnEl.addEventListener('click', onPasswordBtnClick)

// function onPasswordBtnClick () {
//   if (passwordBtnEl.textContent === "Розкрити") {
//     passwordBtnEl.textContent = "Приховати"
//     passwordInputEl.setAttribute('type', 'text')  
//     return
//   }
//   passwordInputEl.setAttribute('type', 'password')
//   passwordBtnEl.textContent = "Розкрити"
// }

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/
// const refs = {
//   btnDecrement: document.querySelector('#decrease'),
//   btnIncrease: document.querySelector('#increase'),
//   box:document.querySelector('#box'),
// }
// let startSize = parseInt(getComputedStyle(refs.box).width)
// refs.btnDecrement.addEventListener('click', decrement)
// refs.btnIncrease.addEventListener('click', increase)
// function decrement() {
//   startSize -= 10 
//   refs.box.style.width = startSize +'px'
//   refs.box.style.height = startSize+ 'px'
// }
// function increase() {
//    startSize += 10 
//   refs.box.style.width = startSize +'px'
//   refs.box.style.height = startSize+ 'px'
// }

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/
// addEventListener('click', (event) => {
  
//   if (event.target.getAttribute('id') === 'place') {
//     console.log(true);

//   } else {
//     alert('Error!')
//   }
// } )

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/
// const btn = document.querySelector('#double');
// const listItem = document.querySelectorAll('.listItem');
// console.log(listItem);

// function doubleSize() {
//   let double = [];
//   listItem.forEach(el => {
//     // double.push(Number(el.textContent) ** 2);
//     const number = Number(el.textContent ** 2);
//     el.textContent = BigInt(Number(el.textContent ** 2));
//   });
//   console.log(double);
// }

// btn.addEventListener('click', doubleSize);
//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
const ball = document.querySelector('.innerCircle')
const outerCircle = document.querySelector('.outerCircle')
// Координата X var y = rect.top; // Координата Y console.log("X: " + x + ", Y: " + y); 
const rect = outerCircle.getBoundingClientRect(); const x = rect.left; const y = rect.top;
console.log(x,y);
ball.onmousedown = function (event) {
  // (1) підготувати до переміщення: розмістити поверх іншого контенту і в абсолютних координатах
  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;

  // перемістимо його з будь-яких поточних батьків безпосередньо в body
  // щоб розташувати його відносно body

  // центруємо м’яч за координатами (pageX, pageY)
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
  }
  
  // переносимо наш абсолютно позиціюнованний м’яч під курсор
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  console.log(ball.getBoundingClientRect());
  // (2) пересуваємо м’яч на mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) відпускаємо м’яч, видаляємо непотрібні обробники подій
  ball.onmouseup = function (event) {
    
  document.removeEventListener('mousemove', onMouseMove);
   ball.onmouseup = null; 
  };
  
}
// ball.addEventListener('click', coolback);
//   function coolback(event) {
//     console.log(event);
//     ball.style.left = 43 +"px"
//     ball.style.top = 1498 +'px'
//   };
// const User = function (userObj) {
//     this.userName = userObj.userName;
//     this.age = userObj.age;
//     this.numbersOfPost = userObj.numbersOfPost;
// };
// User.prototype.getInfo = function (){
//     console.log(`Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`);
// }
// const user = new User({userName: "Roman", age: 25, numbersOfPost: 50})
// console.log(user);
// user.getInfo(

// )

// Напиши функцію конструктор Storage, який створює об'єкти
//Для управління складом товарів.
//При виклику отримуватиме один агрумент - початковий масив товарів,
//і записувати їх у властивість items.
//Додай методи класу:
//getItems() - повертайте масив товарів
//addItems(item) - отримує новий товар та додає його до поточних
//removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних
//++++++++++++++++++++++++++++++++++++++++++
// const Storage = function (arr) {
//   this.arr = arr
// }
// Storage.prototype.getItems = function () {
//   return this.arr
// }
// Storage.prototype.addItems = function (item) {
//   this.arr.push(item)
// }
// Storage.prototype.removeItem = function(item) {
//   const indexRemove = this.arr.indexOf(item)
//   if (indexRemove === -1) {
//     alert(`такого ${item} не має`)
//     return
//   }
//   this.arr.splice(indexRemove,1)
// }

// const storage = new Storage(["apple", "mango"]);
// console.log(storage);
// storage.addItems("banana")
// storage.removeItem("apple")
// console.log(storage)

//Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я),
//surname (прізвище), rate (ставка за день роботи), days (кількість відпрацьованих
//днів). Також клас повинен мати метод getSalary(), який виводитиме зарплату
//працівника. Зарплата - це добуток (множення) ставки rate на кількість
//відпрацьованих днів days. І метод getFullName() - ім'я та прізвище працівника.
// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }
//   getSalary() {
//     return this.rate * this.days;
//   }

//   get getFullName() {
//     return this.name + ' ' + this.surname;
//   }
// }
// const worker = new Worker('Іван', 'Іванов', 10, 31);

// console.log(worker.name); //Виведе 'Іван'
// console.log(worker.surname); //Виведе 'Іванов'
// console.log(worker.getFullName); //Виведе 'Іванов Іван'
// console.log(worker.rate); //Виведе 10
// console.log(worker.days); //Виведе 31

