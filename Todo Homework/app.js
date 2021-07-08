const btn = document.getElementById("enter")
const textField = document.getElementById("userInput")
const list = document.getElementById('list')

function textPresent() {
    return textField.value.length > 0
}

btn.addEventListener('click', () => {
    if (textPresent()) {
        createTodo()
    }
})

textField.addEventListener('keypress', (event) => {
    if(event.key === "Enter" && textPresent()) {
        createTodo()
    }
})


function createTodo() {
    let listElem = document.createElement('li')
    listElem.appendChild(document.createTextNode(textField.value))
    list.appendChild(listElem)
    listElem.addEventListener("click", checked)
    textField.value = ''

    let delBtn = document.createElement('button')
    delBtn.appendChild(document.createTextNode('x'))
    listElem.appendChild(delBtn)
    delBtn.addEventListener('click', deleteTodo)

    function deleteTodo() {
        listElem.classList.add('delete')
    }

    function checked() {
        listElem.classList.toggle("done")
    }

}