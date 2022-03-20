let teg = document.querySelector(".content")
let contentTeg = teg.getElementsByTagName("p")[0]
let content = contentTeg.innerText
    contentTeg.innerHTML = `<b>${content}</b>`
    console.log(contentTeg)
