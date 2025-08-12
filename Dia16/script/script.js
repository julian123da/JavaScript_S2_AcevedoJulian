document.addEventListener('DOMContentLoaded',()=>{
    const datosContenedeor = document.querySelector('.opciones');
    const taskInput = document.getElementById('taskINput');
    const addTaskButton = document.getElementById('addTaskButton');

    async function fetchData(){
        const res = await fetch('https://689a16b7fed141b96ba1d20f.mockapi.io/data/Users');
        let data = await res.json();
        return data;
    }

    //################
    //DANGER ZONE

    //################
    async function addNewTask(){
        const task = taskINput.value;
        console.log(task);
        if (task.trim()==='') return;
        await fetch('https://689a16b7fed141b96ba1d20f.mockapi.io/data/Users',{
            method: 'POST',
            headers :{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                task,status:'On hold'
            })
        });
        taskInput.value='';
        const data = await fetchData();
        displayCapsula(data);
    }


   //console.log(fetchData());
   function displayCapsula(capsula){
    datosContenedor.innerHTML='';
    capsula.forEach(cap =>{
        const capDiv = document.createElement('div')
        if(cap.status==="ready"){
            capDiv.classList.add('capsulaNegativa');
            capDiv.innerHTML =`
            <div class="infoTextNegativo">
            <p>${cap["task"]}</p>
        </div>
        <div class="botones">
            <div class="terminadoNegativo">
                <img src="./storage/img/pngwing.com (2).png" alt="">
            </div>
            <div class="eliminadoNegativo">
                <img src="./storage/img/pngwing.com (4).png" alt="">
            </div>
        </div>
            `
        }else if(cap.status==="On hold"){
            capDiv.classList.add('capsula');
            capDiv.innerHTML=`
             <div class="capsula">
        <div class="infoText">
            <p>${cap["task"]}</p>
        </div>
        <div class="botones">
            <div class="terminado">
                <img src="./storage/img/pngwing.com (2).png" alt="">
            </div>
            <div class="eliminado">
                <img src="./storage/img/pngwing.com (4).png" alt="">
            </div>
        </div>`
        }
        datosContenedor.appendChild(capDiv);
    });
}
fetchData().then(data =>{
    displayCapsula(data);
});
addTaskButton.addEventListener('click',addNewTask());
});