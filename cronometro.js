
const dia = document.getElementById('dia') 
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "02 jul 2024"

function countdown(){
    const datalanc = new Date(lancamento)
    const hoje = new Date()  

    const segtotal = (datalanc - hoje)/1000; 
    
    const finaldias = Math.floor (segtotal / 60 / 60 / 24);
    const finalhoras = Math.floor (segtotal / 60 / 60) % 24; // % eh restante da divisao do dia
    const finalminutos = Math.floor (segtotal / 60) % 60;  // % eh restante da divisao da hora
    const finalsegundos = Math.floor (segtotal) % 60 // % eh restante da divisao do minuto

    dia.innerHTML = finaldias
    hora.innerHTML = finalhoras
    minuto.innerHTML = finalminutos
    segundo.innerHTML = finalsegundos

}

countdown();
setInterval(countdown, 1000)
