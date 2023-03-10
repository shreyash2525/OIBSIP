let num = ''

let result = document.getElementById('result')

let buttons = document.querySelectorAll('button')

let arr = Array.from(buttons)


arr.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            num = eval(num)
            result.value = num
        }
        else if (e.target.innerHTML == 'AC') {
            num = ''
            result.value = num
        }
        else if (e.target.innerHTML == 'DEL') {
            num = num.substring(0, num.length - 1)
            result.value = num
        }
        else {
            num += e.target.innerHTML
            result.value = num
        }
    })
})
