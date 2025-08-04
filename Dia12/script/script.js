document.getElementById('btnColor').addEventListener('click',()=>{
    console.log("Wenasssssssssss");
    const cuadro = document.getElementById('cuadro');
    cuadro.classList.toggle('cambio');
    /*document.getElementById('cuadrado').innerHTML+=`<h1>Wenas</h1>`;*/
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
cuadro.addEventListener('mouseout', ()=>{
    cuadro.style.border='none';
});

//Jugando con teclas
document.addEventListener('keydown',(e){
    document.getElementById('textoXD').innerHTML+=`<p>Presionaste: ${e.key}</p>`
    console.log(`Presionaste: ${e.key}`);
});
