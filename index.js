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
const max = 50;
const min = 0;

let total = 0;

for (let i = min; i <= max; i++) {
  if (i % 2 === 0) {
    total += i;
  }
}

console.log(total);
