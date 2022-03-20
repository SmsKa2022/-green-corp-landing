const values=[15, 20, 25];

elements = document.getElementsByClassName("elems")
for (let index = elements.length-1; index>=0; index--){
    console.log(index)
    for (let num of values){
        if (num === Number(elements[index].innerText)) {
            elements[index].remove()
            break
        }
    }
}
