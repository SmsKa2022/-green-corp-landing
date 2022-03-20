// В HTML-документе задан тег <div> c идентификатором square.
// Он представляет собой синий квадрат.
// Напишите скрипт, который позволяет сделать <div> прозрачным (opacity: 0) при клике по нему.

let div = document.querySelector("#square")

div.onclick = function () {
    div.style.opacity = "0"
}



