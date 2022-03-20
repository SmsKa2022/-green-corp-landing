// В HTML-документе существует тег с классом price и числовым значением. Напишите скрипт, который увеличивает в теге значение цены в два раза.
//     Пример заданного HTML-документа:
// <div class="price">100</div>
// Пример результата:
//     <div class="price">200</div>

let tegs = document.querySelectorAll(".price")
let sum = 0
for (let teg of tegs) {
    sum += Number.parseInt(teg.textContent)
}
console.log(sum)
