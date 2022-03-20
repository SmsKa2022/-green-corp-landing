// В HTML-документе есть тег <ul> с идентификатором tasks,
// и внутри него есть несколько тегов <li> с текстом. Напишите скрипт,
// который позволяет отсортировать элементы <li> в теге <ul> по длине содержимого.
//     Пример заданного HTML-документа:
// <ul id="tasks">
//     <li>Велосипед</li><li>Скейт</li><li>Самокат</li>
// </ul>
// Пример результата:
//     <ul id="tasks">
//         <li>Скейт</li><li>Самокат</li><li>Велосипед</li>
//     </ul>

let ul = document.querySelector("#tasks")
let child_teg = ul.firstChild.nextSibling
let text_tegs = []
for (let i = 0; i <= ul.childElementCount; i++) {
    if (child_teg === null) {
        break
    }
    text_tegs.push(child_teg.innerText)
    child_teg = child_teg.nextElementSibling
}

text_tegs.sort((a, b) => {
    if (a.length > b.length) return 1
    if (a.length === b.length) return 0
    if (a.length < b.length) return -1
})
ul.innerHTML =''
for (let text of text_tegs){
    li = document.createElement("li")
    li.innerText = text
    ul.appendChild(li)
}
console.log(text_tegs)


