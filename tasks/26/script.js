
elements = Array.from(document.getElementsByTagName("p")).entries()
for (let [index, element] of elements){
    if (element.innerText === "Delete"){
        element.remove()
    }
}