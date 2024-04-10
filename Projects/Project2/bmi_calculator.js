const form = document.querySelector('form')
//this will not work
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function(e){
    e.defaultPrevented()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('weight').value)
    const result = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please input again, you have enter ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please input again, you have enter ${weight}`
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
    }
})