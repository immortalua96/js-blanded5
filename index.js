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

const user = {
  name: "John",
  age: 20,
  hobby: "tennis",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const allKey = Object.keys(user);

for (const elem of allKey) {
  console.log(`${elem}: ${user[elem]}`);
}
