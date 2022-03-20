// В HTML-документе задан тег <button> с идентификатором delete и тег <ul> c идентификатором points
// и c элементами <li> внутри. Напишите скрипт, который позволяет удалить последний элемент <li>
// в списке <ul> при нажатии на кнопку.

let button = document.querySelector("#delete")
let ul = document.querySelector("#points")
button.onclick = function () {
    ul.lastChild.previousSibling.remove()
}



