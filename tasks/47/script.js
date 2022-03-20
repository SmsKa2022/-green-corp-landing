// В HTML-документе задан тег <button> с классом copy. Напишите скрипт,
// который позволит при нажатии на кнопку <button> создать ее копию и расположить в конце тега body.

let button = document.querySelector(".copy")

button.onclick = function () {
    new_button = document.createElement("button")
    new_button.setAttribute("class", button.getAttribute("class"))
    new_button.innerText = button.innerText
    document.body.appendChild(new_button)
}



