// В HTML-документе задан тег <select> c идентификатором numbers.
// Напишите скрипт, который добавит внутрь этого тега несколько тегов <option> со значениями от 10 до 550 с шагом 10.
// Значение у тега <option> должно быть указано внутри и в атрибуте value.

let select = document.querySelector("#numbers")
for (let value = 10; value <= 550; value += 10) {
    let option = document.createElement("option")
    option.setAttribute("value", `${value}`)
    option.innerText = `${value}`
    select.appendChild(option)
}
console.log(select)