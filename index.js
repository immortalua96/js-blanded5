/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */
const res = prompt("Яка офіційна назва JavaScript?");
const script ="ECMAScript"
if (res === script) {
  alert("Вірно!")
}
else {
  alert("Не знаєте? ECMAScript!")
}