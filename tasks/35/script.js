// В HTML-документе есть тег <div> с идентификатором photo.
// Внутри этого тега указана ссылка на картинку. Необходимо написать скрипт, который:
// заменит ссылку на тег <img> с этой картинкой
// укажет размеры картинки в атрибуте style 100 на 100 пикселей

let div = document.querySelector("#photo")
let img = document.createElement("img")
img.setAttribute("src", div.innerText)
img.style.width = "100"
img.style.height = "100"
div.innerText = ""
div.appendChild(img)

