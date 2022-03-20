let tagsUl = document.getElementsByTagName("ul")

let result = []
for (let ul of tagsUl) {
    for (let li of ul.getElementsByTagName('li')) {
        result.push(li.innerText)

    }
}
console.log(result, result.length)

