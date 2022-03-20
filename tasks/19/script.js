let tagsNumeric = document.getElementsByClassName("numeric")
for (let tag of tagsNumeric) {
    if (tag.localName === 'p') {
        let num = Number.parseInt(tag.innerText)
        if (num < 0) {
            tag.innerHTML = `<b>${tag.innerText}</b>`
        }
    }
}
// }


//
// for (let ul of tagsUl) {
//     for (let li of ul.getElementsByTagName('li')) {
//         result.push(li.innerText)
//
//     }
// }
console.log(tagsNumeric)

