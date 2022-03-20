// В HTML-документе есть два тега <div> с идентификаторами div1 и div2 с элементами <p>
// внутри. Напишите скрипт, который перемещает тег <p> из одного тега <div> в другой при
// клике по этому элементу <p>.

let divs = {
    "div1": document.querySelector("#div2"),
    "div2": document.querySelector("#div1")
}

document.addEventListener("click", (evt) => {
    if (divs[evt.target.parentElement.id]) {
        divs[evt.target.parentElement.id].appendChild(evt.target)
    }

})

// evt,evt.srcElement.parentElement.nodeName,