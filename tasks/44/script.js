// В HTML-документе есть тег <button> с идентификатором clicker.
// Напишите скрипт, который добавит обработку события клика на кнопку с идентификатором clicker.
// При нажатии на кнопку число внутри тега <button> должно увеличиваться на один.

let button = document.querySelector("#clicker")
button.onclick = function () {
    button.innerText = Number.parseInt(button.innerText) + 1
}



