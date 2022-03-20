// В HTML-документе задан тег <button> с идентификатором btn и тег <input> с идентификатором val.
// Напишите скрипт, который выводит в консоль значение тега <input> при клике на кнопку.
let button = document.querySelector("#btn")
let input = document.querySelector("#val")
button.onclick = function () {
    console.log(input.getAttribute("value"))
}


