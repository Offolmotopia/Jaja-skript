$(function () {
    /**
    const btn = document.getElementById("enter")
    const textField = document.getElementById("userInput")
    const list = document.getElementById('list')
     */
    const btn = $("#enter")
    const textField = $("#userInput")
    const list = $('#list')
    let s = window.localStorage
  

    let serialize = []


    serialize = JSON.parse(s.getItem("elements"))
    serialize = serialize.filter(el => el.trim() !== '')
    // deserialize

    serialize.forEach(element => {
        let listElem = $('<li>')
        listElem.append(element)
        list.append(listElem)
        listElem.click(() => {
            listElem.toggleClass('done')
        })
        serialize.push(textField.val().trim())
        textField.val('')

        let delBtn = $('<button>')
        delBtn.append('x')
        listElem.append(delBtn)
        delBtn.click(() => {
            let t = ''
            t = listElem.text().slice(0, t.length-1)
            console.log(t);
            serialize = serialize.filter((el) => el.toLowerCase() !== t.toLowerCase())
            console.log(serialize);
            listElem.animate({ left: -2000, opacity: 0 }, 600, () => {
                listElem.remove()
            })
            save()
        })
    })

    function save() {
        serialize = serialize.filter(el => el.trim() !== '')
        s.setItem("elements", JSON.stringify(serialize))
    }



    function textPresent() {
        return textField.val().length > 0
    }

    btn.click(() => {
        if (textPresent()) {
            createTodo()
        }
    })

    textField.keypress((event) => {
        if (event.key === "Enter" && textPresent()) {
            createTodo()
        }
    })

    function createTodo() {
        let listElem = $('<li>')
        listElem.append(textField.val())
        list.append(listElem)
        listElem.click(() => {
            listElem.toggleClass('done')
        })
        serialize.push(textField.val().trim())
        console.log(listElem.text().trim());

        textField.val('')

        let delBtn = $('<button>')
        delBtn.append('x')
        listElem.append(delBtn)
        delBtn.click(() => {
            let t = ''
            t = listElem.text().slice(0, t.length-1)
            console.log(t);
            serialize = serialize.filter((el) => el.toLowerCase() !== t.toLowerCase())
            console.log(serialize);
            listElem.animate({ left: -2000, opacity: 0 }, 600, () => {
                listElem.remove()
            })
        })
            save()
        }
    }
)
