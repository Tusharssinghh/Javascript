const butt = document.querySelectorAll('.boxes')
// console.log(butt)

const body = document.querySelector('body')
// console.log(body)

butt.forEach(function(button){
    button.addEventListener('click', function(e){
        // console.log(e)
        // console.log(e.target.id)
        if(e.target.id === "boxes1"){
            body.style.backgroundColor = "#D7E4C0"
        }
        if(e.target.id === "boxes2"){
            body.style.backgroundColor = "#C6DCBA"
        }
        if(e.target.id === "boxes3"){
            body.style.backgroundColor = "#BBC3A4"
        }
        if(e.target.id === "boxes4"){
            body.style.backgroundColor = "#B3A398"
        }
    })
})