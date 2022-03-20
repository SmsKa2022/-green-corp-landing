// В HTML-документе задан тег <div> c идентификатором square в виде красного квадрата.
// У него есть атрибут style с указанными высотой и шириной в 100 пикселей.
// Напишите скрипт, который уменьшает ширину и высоту квадрата на 10% при клике по нему.

let div = document.querySelector("#square")
div.onclick =function (){
    div.style.height = "90px"
    div.style.width = "90px"

}



