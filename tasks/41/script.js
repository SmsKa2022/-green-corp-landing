// В HTML-документе задан тег <button> с идентификатором btn и тег <p> с идентификатором val.
// Напишите скрипт, который выводит в консоль содержимое тега <p> при клике на кнопку.

let button = document.querySelector("#btn")
let p = document.querySelector("#val")
button.onclick = function () {
    console.log(p.innerText)
}


//
// let select = document.getElementsByTagName("select")[0]
// const countries = ["Armenia", "Russia", "Germany", "France", "Georgia"];
//
// for (let value of countries) {
//     let option = document.createElement("option")
//     option.setAttribute("value", `${value.slice(0, 2)}`.toLocaleLowerCase())
//     option.innerText = `${value}`
//     select.appendChild(option)
// }
// console.log(select)