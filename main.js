// TRABALHANDO COM FUNCTIONS
// var element = document.querySelector("#quinta")
// console.log(element)

//function addRedBorder(id){
//    var element = document.querySelector("#" + id)
//  OU: var element = document.querySelector(`#${id}`)  
//    element.style.border = "5px solid red"
//}   

//addRedBorder("quinta");
// *************

function highlightCard(selector) {
    var element= document.querySelector(selector)
    element.classList.toggle("card-highlight")
   // element.classList.toggle("card-imgexpand")
}

//function checkKeyboardCode() {
//    document.addEventListener('keydown', (Event) => {
//        var name = Event.key;
//        var code = Event.code;
//        // alert the key name and key code on keydown
//        alert(`Key pressed ${name} \r\n Key code value: ${code}`)
//    }, false);
//}

// checkKeyboardCode();

// EVENTO DE CLICAR NOS NAS TECLAS 1, 2, 3, ou 4.

function addKeyboardEventListeners() {
    document.addEventListener('keydown', (Event)=>{
        var ingresso1 = document.getElementById("quinta")
        var ingresso2 = document.getElementById("sexta")
        var ingresso3 = document.getElementById("sabado")
        var ingresso4 = document.getElementById("domingo")
     
        console.log(ingresso1,ingresso2,ingresso3,ingresso4) // imprime no console todos os ingressos do HTML
        var code = Event.code
        console.log(code) // imprime no console o codigo da tecla digitada
        if(code == 'Digit1'){
            ingresso1.classList.toggle("card-imgexpand")
            ingresso2.classList.remove("card-imgexpand")
            ingresso3.classList.remove("card-imgexpand")
            ingresso4.classList.remove("card-imgexpand")
        }
       
        if(code == 'Digit2'){
            ingresso1.classList.remove("card-imgexpand")
            ingresso2.classList.toggle("card-imgexpand")
            ingresso3.classList.remove("card-imgexpand")
            ingresso4.classList.remove("card-imgexpand")
        }
  
        if(code == 'Digit3'){
            ingresso1.classList.remove("card-imgexpand")
            ingresso2.classList.remove("card-imgexpand")
            ingresso3.classList.toggle("card-imgexpand")
            ingresso4.classList.remove("card-imgexpand")
        }

        if(code == 'Digit4'){
            ingresso1.classList.remove("card-imgexpand")
            ingresso2.classList.remove("card-imgexpand")
            ingresso3.classList.remove("card-imgexpand")
            ingresso4.classList.toggle("card-imgexpand")
        }
    }, false);
}

addKeyboardEventListeners();

// Mostra no console da pagina o array criado a partir da classe 'cards-ingressos' no HTML

let arrayIngressos = Array.from(document.querySelectorAll('.cards-ingressos'))
console.log(arrayIngressos)

const ingressos = []

function selectCard(selector) {
    var elemento = document.querySelector(selector)
    elemento.classList.toggle("card-selected")
    console.log(elemento,ingressos) 
    if(ingressos.includes(selector)) ingressos.pop(selector)
    else ingressos.push(selector)
    if(ingressos == "#sabado") {
        ingressos.pop("#sabado")
        alert("Ingressos de sabado esgotados")
    }
    console.log(elemento,ingressos)
}

function showSelectCards(){
    if(ingressos.length > 0) alert("Ingressos Selecionados: " + ingressos)
}


