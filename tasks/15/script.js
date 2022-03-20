// В HTML-документе существует тег с классом price и числовым значением. Напишите скрипт, который увеличивает в теге значение цены в два раза.
//     Пример заданного HTML-документа:
// <div class="price">100</div>
// Пример результата:
//     <div class="price">200</div>

let teg = document.querySelector(".price")
content = Number.parseInt(teg.textContent) * 2
teg.textContent = content
console.log(teg)
