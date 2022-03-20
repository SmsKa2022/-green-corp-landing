// Напишите программу, которая считает количество <div>-, <p>- и <h2>-тегов и записывает его в объект tags,
// как в примере. Выведите сформированный объект в консоль.
//     Пример заданного HTML-документа:
//     <p>100</p>
//     <p>200</p>
//     <div>50</div>
//     <h2></h2>
//     <h2>40</h2>
//     Пример результата:
//     {"div": 1, "p": 2, "h2": 2}

const tasks = {
    "div": 0,
    "p": 0,
    "h2": 0,
}

for (let [text, i] of Object.entries(tasks)) {
    tasks[text] = document.getElementsByTagName(text).length
}
console.log(tasks)




