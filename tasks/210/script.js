// В скрипте объявлена переменная values, которая содержит массив из строк.
// В HTML-верстке есть два тега <div> с классами div1 и div2.
// Допишите скрипт так, чтобы все теги <p> из тега с идентификатором div1,
// значение которого встречается в списке values, переместились в тег с идентификатором div2.
// Пример значений:
// values = ["велосипед", "ролики", "лыжи"]
// Пример заданного HTML-документа:
// <div id="div1"><p>велосипед</p><p>лыжи</p><p>скейт</p></div>
// <div id="div2"></div>
// Пример результата в HTML-документе:
// <div id="div1"><p>скейт</p></div>
// <div id="div2"><p>велосипед</p><p>лыжи</p></div>

const values = ["велосипед", "ролики", "лыжи"];

let div1 = document.querySelector("#div1")
let div2 = document.querySelector("#div2")
let child_teg = div1.firstChild.nextSibling
let tegs = []
for (let i = 0; i <= div1.childElementCount; i++) {
    if (child_teg === null) {
        for (let teg of tegs) {
            div2.append(teg)
        }
        break
    } else
        for (let data of values) {
            if (child_teg.innerText === data) {
                console.log(child_teg.innerText)
                tegs.push(child_teg)
                break
            }
        }
    child_teg = child_teg.nextElementSibling

}



