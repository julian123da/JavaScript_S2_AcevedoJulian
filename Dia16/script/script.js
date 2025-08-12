document.addEventListener('DOMContentLoaded',()=>{
    const datosContenedeor = document.querySelector('.opciones');
    const taskInput = document.getElementById('taskINput');
    const addTaskButton = document.getElementById('addTaskButton');

    async function fetchData(){
        const res = await fetch('https://689a16b7fed141b96ba1d20f.mockapi.io/data/Users');
        let data = await res.json();
        return data;
    }
    //console.log(fetchData());
    function displayCapsula(capsula){
        datosContenedeor.innerHTML='';
        capsula.forEach(cap =>{
            const capDiv = document.createElement('div')
            if(cap.status==="ready"){
                capDiv.classList.add('capsulaNegativa');
                capDiv.innerHTML = ''
            }
        });
    }
    displayCapsula();
});