document.getElementById('btnColor').addEventListener('click',()=>{
    console.log("Wenassssssss");
    const cuadro = document.getElementById('cuadro');
    cuadro.classList.toggle('cambio');
    /*document.getElementById('cuadro').innerHTML+=`<h1>Wenas</h1>`;*/
});

//Elementos generales
cuadro.addEventListener('click',()=>{
    alert('Le diste click al cuadro!');
});

//mouseover y mouseout
//hover (cuando esta encima de // cuando sale de ...)
cuadro.addEventListener('mouseover',()=>{
    cuadro.style.border='3px solid black';
});
cuadro.addEventListener('mouseout',()=>{
    cuadro.style.border='none';
});

//Jugando con teclas
document.addEventListener('keydown',function (e){
    /*document.getElementById('textoXD').innerHTML+=`<p>Presionaste: ${e.key}</p>`;*/
    console.log(`Presionaste: ${e.key}`);
});

//Eventos en los formularios 
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();//Enviar que haya una recarga de pagina
    const nombre = document.getElementById('nombre').ariaValueMax;
    alert('Hola ${nombre} !!!');
});

//Inputs y Eventos de entrada
const InputGeneral = document.getElementById('inputTexto');
const resultado = document.getElementById('resultado');

InputGeneral.addEventListener('input',function(){
    resultado.textContent = InputGeneral.ariaValue;
});
