// В HTML-документе есть тег <label> и тег <input> с идентификатором target.
// Необходимо написать скрипт, который присваивает тегу <label> атрибут, позволяющий привязать его к тегу <input>.
// В результате при клике мышью на <label> тег <input> должен стать активным (в него должен переместиться курсор).

let label = document.getElementsByTagName("label")[0]
let input = document.querySelector("#target")
label.setAttribute("for", input.getAttribute("id"))