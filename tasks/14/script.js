// Выведите в консоль название последнего тега, у которого есть класс target.
// Пример заданного HTML-документа:
//     <div class="target">Первый элемент</div>
//         <p class="target">Второй второй</p>
//         <span class="target">Третий третий</span>
// Пример результата:
//     span

let tegs = document.querySelectorAll(".target")
console.log(tegs[tegs.length - 1].tagName.toLocaleLowerCase())