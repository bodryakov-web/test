const btn_plus = document.querySelector('#btn_plus')
const btn_minus = document.querySelector('#btn_minus')
const btn_mult = document.querySelector('#btn_mult')
const btn_div = document.querySelector('#btn_div')

const first_plus = document.querySelector('#first_plus')
const first_minus = document.querySelector('#first_minus')
const first_mult = document.querySelector('#first_mult')
const first_div = document.querySelector('#first_div')



const second_plus = document.querySelector('#second_plus')
const second_minus = document.querySelector('#second_minus')
const second_mult = document.querySelector('#second_mult')
const second_div = document.querySelector('#second_div')

const res_plus = document.querySelector('#res_plus')
const res_minus = document.querySelector('#res_minus')
const res_mult = document.querySelector('#res_mult')
const res_div = document.querySelector('#res_div')




btn_plus.addEventListener('click', () => {
    let res = Number(first_plus.value) + Number(second_plus.value)
    res_plus.innerHTML = res
})

btn_minus.addEventListener('click', () => {
    let res = Number(first_minus.value) - Number(second_minus.value)
    res_minus.innerHTML = res
})

btn_mult.addEventListener('click', () => {
    let res = Number(first_mult.value) * Number(second_mult.value)
    res_mult.innerHTML = res
})

btn_div.addEventListener('click', () => {
    let res = Number(first_div.value) / Number(second_div.value)
    res_div.innerHTML = res
    console.log(first_div.value)
    console.log(second_div.value)
})