let form = document.querySelector("form")
let input = document.querySelector("input")
let currency = document.getElementById("dropdown3")


form.addEventListener("submit" , Converter)


let usDollar = 79.99;
let Euro = 78.96;
let pound = 90.55;
let sDollar = 56.51;
let peso = 0.55;

function Converter(e){
    e.preventDefault();

    if (currency.value == 1) {
        let output1 = parseInt(input.value) / usDollar;
        let output = document.querySelector("h3")
        output.innerText = output1;
        
    }
    else if(currency.value == 2){
        let output1 = parseInt(input.value) / Euro;
        let output = document.querySelector("h3")
        output.innerText = output1;
    }
    else if(currency.value == 3){
        let output1 = parseInt(input.value) / pound;
        let output = document.querySelector("h3")
        output.innerText = output1;
    }
    else if(currency.value == 4){
        let output1 = parseInt(input.value) / sDollar;
        let output = document.querySelector("h3")
        output.innerText = output1;
    }
    else if(currency.value == 5){
        let output1 = parseInt(input.value) / peso;
        let output = document.querySelector("h3")
        output.innerText = output1;
    }

    form.reset();




}

