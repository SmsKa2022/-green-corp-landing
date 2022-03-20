// В HTML-документе задан тег <select>. В скрипте объявлена переменная countries,
// в которой указаны некоторые страны. Доработайте скрипт так, чтобы в тег <select> добавились теги <option>
// по одному на каждую страну из массива countries. В качестве значения тега option укажите название страны,
// а в качестве атрибута — value первые две буквы страны в нижнем регистре (маленькими буквами).

let select = document.getElementsByTagName("select")[0]
const countries = ["Armenia", "Russia", "Germany", "France", "Georgia"];

for (let value of countries) {
    let option = document.createElement("option")
    option.setAttribute("value", `${value.slice(0,2)}`.toLocaleLowerCase())
    option.innerText = `${value}`
    select.appendChild(option)
}
console.log(select)