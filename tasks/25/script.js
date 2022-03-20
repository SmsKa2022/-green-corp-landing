
elements = Array.from(document.getElementsByTagName("p")).entries()
for (let [index, element] of elements){
    element.id = "p_" + (index + 1)
}