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
// const concerts = {
//   Київ: new Date("2020-04-01"),
//   Умань: new Date("2023-07-02"),
//   Вінниця: new Date("2020-04-21"),
//   Одеса: new Date("2023-07-15"),
//   Хмельницький: new Date("2020-04-18"),
//   Харків: new Date("2023-07-10"),
// };
// function sortConcenrt(obj) {
//  return Object.keys(obj).filter(el => obj[el] > new Date()).sort((a, b) => obj[a]-obj[b] ).map(item => `${item} : ${obj[item]}`)
//   // const newCity = arrayCity.filter(el => obj[el] > new Date()).sort((a, b) => obj[a]-obj[b] )
// }

// console.log(sortConcenrt(concerts))
//TODO:==============================================
/**
*? Поверніть об'єкт, в якому вказано кількість тегів.
*? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

 */
//
// const arr = [
//   { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
//   { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
//   { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
//   { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
//   { name: "Pierre", surname: "Curie", born: 1859, dead: 1906, id: 5 },
//   { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 6 },
//   { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 7 },
//   { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 8 },
//   { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 9 },
//   { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 10 },
//   { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 11 },
//   { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 12 },
//   { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 13 },
// ];

// - Получить массив ученых, родившихся в 19 веке.
// - Найти общую сумму лет, сколько прожили все ученые.
// - Отсортировать ученых по алфавиту.
// - Отсортировать ученых по количеству прожитых лет.
// - Удалить из массива ученых, родившихся в 15, 16 или 17 веках.
// - Найти ученого, который родился позже всех.
// - Найти год рождения Albert Einstein.
// - Найти ученых, фамилия которых начинается на букву "С".
// - Удалить из массива всех ученых, имя которых начинается на букву "A".
// - Найти ученого, который прожил больше всех и ученого, который меньше.
// - Найти ученых, у которых совпадают первые буквы имени и фамилии.
// - Узнать, все ли ученые работали в 19 веке.
// 1 (map()) Потрібно отримати масив імен студентів та записати їх великими літерами.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];
// const newArrey = studentRecords.map(el =>
//   el.name.toUpperCase()
// )
// console.log(newArrey)
// 2 (filter()) Припустимо, що ми маємо той самий набір даних, що й вище, але цього разу ми хочемо
// отримати детальну інформацію про студентів, які набрали більше 50 балів.
// let studentRecords = [
//   { name: 'John', id: 123, marks: 98 },
//   { name: 'Baba', id: 101, marks: 23 },
//   { name: 'yaga', id: 200, marks: 45 },
//   { name: 'Wick', id: 115, marks: 75 },
// ];

// const newArrey = studentRecords.filter(item => {
//   const { marks } = item;
//   return marks > 90;
// });
// console.log(newArrey);
// 3  (reduce()) Необхідно одержати загальну суму балів студентів.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];
// const newArray = studentRecords.reduce((prevMark, student) =>
// prevMark += student.marks, 0)
// console.log(newArray);
// 4 (map(), filter()) Необхідно отримати лише імена студентів, які набрали більше 50 балів із того ж набору
// даних.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];
// const newArray = studentRecords.filter(({ marks }) => marks > 50).map(({ name }) => name)
// const {name} = studentRecords[0]
// console.log(newArray)

// 5 (filter(), reduce()) Необхідно отримати загальну суму балів студентів із id більше 120.
// let studentRecords = [
//   { name: 'John', id: 123, marks: 98 },
//   { name: 'Baba', id: 101, marks: 23 },
//   { name: 'yaga', id: 200, marks: 45 },
//   { name: 'Wick', id: 115, marks: 75 },
// ];

// const result = studentRecords
//   .filter(({ id }) => id > 120)
//   .reduce((acc, { marks }) => acc + marks, 0);
// console.log(result);

// (map(), filter(), reduce()) Необхідно вивести загальну кількість студентів із балами
//більше 50, отриманими після нарахування заохочення до 15 балів.
//Використовуючи map(), додається заохочення до 15 балів студентам, які набрали менше 50 балів.
// Потім використовуємо filter() для масиву студентів, що повертається функцією map().
// Так ми знайдемо всіх студентів із відмітками понад 50.
// Нарешті ми використовували функцію reduce() для повертаного функцією filter()
// масиву студентів, щоб повернути суму оцінок.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];
// const result = studentRecords.map(student => {
//     if (student.marks < 50) {
//     student.marks += 15
//     }
// return student;
// })
// .filter(({marks}) => marks > 50)
// .reduce((prevMark, {marks}) => prevMark + marks, 0)

// console.log(result);

// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній
// const letMeSeeYourName = (callback) => {
//   const name = prompt('ведіть ім\'я')
//   if (!name.trim()) {
//    return alert('Givme you name')
//   }
//   callback(name)
// };
// function greet(name) {
//   console.log(`Hi ${name}`) 
// }
// letMeSeeYourName(greet)