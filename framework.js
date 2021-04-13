function $ (selector) {
    const element = document.querySelector(selector)

    const self = {
        clg: function(arg) {
            console.log(arg)
        },
        prompt: function(text) {
            prompt(text)
        },
        alertize: function(text) {
            alert(text)
        },
        addtext: function(text) {
            element.innerText = text
        },
        addEl: function(el, text) {
            var elem = document.createElement(`${el}`)
            elem.innerText = text
            element.appendChild(elem)
        }
    }
    return self
}

