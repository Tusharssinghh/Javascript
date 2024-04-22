//First of all generate a random hex color code..
// const randomcolor = function () {
//     const hex = '0123456789ABCDEF';
//     let hexcode = '#';
//     for(let i = 0; i<6; i++){
//         hexcode += hex[Math.floor(Math.random() *16)]
//     }
//     return hexcode
// }

// console.log(randomcolor())




document.querySelector("#start").addEventListener('click', () => {
    const randomcolor = function () {
        const hex = '0123456789ABCDEF';
        let hexcode = '#';
        for(let i = 0; i<6; i++){
            hexcode += hex[Math.floor(Math.random() *16)]
        }
        return hexcode
    }

    const start = function() {
        document.body.style.backgroundColor = randomcolor();
    }
    const stop = setInterval(start, 500)
    document.querySelector('#stop').addEventListener('click', () => {
        clearInterval(stop)
        console.log("Function is stop executing")
    })

})