/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */
// const res = prompt("Яка офіційна назва JavaScript?");
// const script ="ECMAScript"
// if (res === script) {
//   alert("Вірно!")
// }
// else {
//   alert("Не знаєте? ECMAScript!")
// }
/**
 *? Напишіть програму, яка отримає від користувача
 *? число (кількість хвилин) та виведе в консоль
 *? рядок у форматі годин та хвилин
 *?      https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 *?      70 === 01:10
 */
// const time = prompt('Яка година?');
// const hours = String(Math.floor(time / 60)).padStart(2, 0);
// const minutes = String(time % 60).padStart(2, 0);
// console.log(`${hours}:${minutes}`)
/**
 *? Напишіть цикл, який виводить у консоль
 *? числа від max до min за спаданням
 *? Виведіть у консоль усіх парних чисел від min до max
 */

//  const a = 50;
//  const b = 23;
//  function numbers (num1, num2) {
//     for (let i = num1; i >= num2; i -= 1) {
//         console.log (i);
//         }
//         console.log ("Парні числа")
//         for (let i = num2; i <= num1; i += 1) {
//         if (i % 2 === 0) {
//        console.log (i)
//         }
//        }
//  }
//  numbers (a, b);

/**
 *? За допомогою циклу for складіть усі парні числа від min до max
 */
// const max = 50;
// const min = 0;

// let total = 0;

// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }

// console.log(total);

/**
 *? При загрузке страницы пользователю предлагается
 *? в prompt ввести число. Ввод добавляется к значению
 *? переменной total.
 *? Операция ввода числа продолжается до тех пор,
 *? пока пользователь не нажмет кнопку Cancel в prompt.
 *? После того как пользователь прекратил ввод нажав на
 *? кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
 
 *! Делать проверку,что пользователь ввел именно число,
 *! а не произвольный набор символов, не нужно.
 */

// let total = 0;
// let number;

// do {
//   number = prompt("enter num");
//   total += Number(number);
// } while (number !== null);
// alert(`загальна сума ${total}`);

//  *? Напишите цикл, который предлагает ввести
//  *? число больше 100 через prompt.
//  *? Если посетитель ввёл другое число - попросить
//  *? ввести ещё раз и так далее.
//  *? Цикл должен спрашивать число, пока посетитель не
//  *? введёт число больше 100, либо не нажмет кнопку
//  *? Отмена в prompt
//  */

// let number = prompt("Введіть число більше 100") ;
// while (number < 100 && number !== null) {
//   number = prompt("Введіть число більше 100")
// }
/**
 *?  Записать массив, const arr = ['BEST', 'the', 'foo', 'is',  'JS' ]
 *? развернуть массив, метод reverse
 *? вырезать foo,
 *? перевести его в строку разделенную пробелами
 */
// const arr = ['BEST', 'the', 'foo', 'is', 'JS']
// const newArrey = arr.slice(0);
// newArrey.splice(newArrey.indexOf('foo'), 1);
// newArrey.reverse();
// console.log(newArrey.join(" "));

///
/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення
 *? використовуючи Object.keys() і for...of
 */

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tennis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const allKey = Object.keys(user);

// for (const elem of allKey) {
//   console.log(`${elem}: ${user[elem]}`);
// }

//TODO:=======================
//У нас є об'єкт, у якому зберігатимуться зарплати
//нашої команди
//Напишіть функцію, яка приймає один параметр(об'єкт) і повертає загальну сумму зарплати.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// function allSellery (obj){
//   let totalSalery = 0
//   const array = Object.values(obj)
//   for (let value of array) {
//     totalSalery += value
//   }
//   return totalSalery
// }
// console.log(allSellery(salaries))

/**
 *? Напишіть ф-цію calcTotalPrice(stones, stonesName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція рахує та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// const calcTotalPrice = (arr, stonesName) => {
//   for (const elem of arr) {
//     if (elem.name === stonesName) {
//       return elem.price * elem.quantity;
//     }
//   }
// };
// console.log(calcTotalPrice(stones, "Бриллиант"));

/**
 *? Напишіть функцію updateObject, яка приймає об'єкт та повертає
 *? новий об'єкт без вказаного параметра
 *? Очікуваний результат updateObject({a: 1, b: 2, c: 3}, 'b') => {a: 1, c: 3}
 *? https://coderoad.ru/208105/%D0%9A%D0%B0%D0%BA-%D1%83%D0%B4%D0%B0%D0%BB%D0%B8%D1%82%D1%8C-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE-%D0%B8%D0%B7-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0-JavaScript
 */

// const obj = { a: 1, b: 2, c: 3 };

// function updateObject(obj, key) {
//   delete obj[key];
//   return obj;
// }

// console.log(updateObject(obj, 'b'));

///**
// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];
// function discount(arr) {
//     const newFruits = arr.map((fruit, index) => { return { ...fruit, price: fruit.price * 0.8, id:index+1} })
//     return newFruits
// }
// discount(fruits)
/**
 *? З об'єкту concerts потрібно отримати масив
 *? в якому будуть лише імена міст.
 *? З масиву потрібно прибрати міста, в яких концерт уже пройшов і
 *? відсортувати їх у хронологічному порядку.
 *? Результат вивести у консоль.
 *? Очікуваний результат ["Умань", "Харків", "Одеса"]
 */
const concerts = {
  Київ: new Date("2020-04-01"),
  Умань: new Date("2023-07-02"),
  Вінниця: new Date("2020-04-21"),
  Одеса: new Date("2023-07-15"),
  Хмельницький: new Date("2020-04-18"),
  Харків: new Date("2023-07-10"),
};
function sortConcenrt(obj) {
 return Object.keys(obj).filter(el => obj[el] > new Date()).sort((a, b) => obj[a]-obj[b] ).map(item => `${item} : ${obj[item]}`)
  // const newCity = arrayCity.filter(el => obj[el] > new Date()).sort((a, b) => obj[a]-obj[b] )
}


console.log(sortConcenrt(concerts))