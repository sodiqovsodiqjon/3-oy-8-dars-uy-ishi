let form = document.querySelector('.box')

let vaqt = document.querySelectorAll('.list__item-text')

let uzoqlik = document.querySelector(".inp__write")

let piyoda = 3.6

let velosiped = 20.1

let mashina = 70

let samalyot = 800

form.addEventListener('submit', function(evt){
    evt.preventDefault()
    let uzoqlik1 = uzoqlik.value;

    function funksiya(){
        let soat = Math.round(uzoqlik1 / piyoda);
        return soat.toFixed(2)
    }
    console.log(funksiya());

    vaqt[0].innerHTML = `${funksiya()} soat`


    
    function funksiyavel(){
        soat = Math.round(uzoqlik1 / velosiped);
        return soat.toFixed(2)
    }
    console.log(funksiyavel());

    vaqt[1].innerHTML = `${funksiyavel()} soat`


    
    function funksiyacar(){
        soat = Math.round(uzoqlik1 / mashina);
        return soat.toFixed(2)
    }
    console.log(funksiyacar());

    vaqt[2].innerHTML = `${funksiyacar()} soat`


    
    function funksiyaair(){
        let soat = Math.round(uzoqlik1 / samalyot);
        return soat.toFixed(2)
    }
    console.log(funksiyaair());

    vaqt[3].innerHTML = `${funksiyaair()} soat`

    form.reset();

})

