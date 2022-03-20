let new_element = document.createElement("li")
new_element.innerText = "Велосипед"

element_li_first= document.getElementsByTagName("li")[0]
element_ul = document.getElementsByTagName("ul")[0]
element_ul.insertBefore(new_element,element_li_first)
