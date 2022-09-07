//const Chart = require('chart.js');

import Chart from './node_modules/chart.js/auto/auto.mjs';

const ctx = document.getElementById('myChart');

let precipitacion= {
    fecha:'',
    altura:''
};
const dia = 'Día ';
const dias = [];
for(let i=0; i<4; i++){
    dias[i]= dia + (i+1);
}

const url = "http://localhost:8080/respuesta";

const shuvia ={
    "array": [2, 4, 6, 8],
    "arrey": "pelelelele"
};

async function postData(url, datoAEnviar){
    let miVariableLoca = null;
    await axios.post(url, datoAEnviar)
    .then(response => response.data)
    .then(data =>{
        miVariableLoca = data.array;
    });

    return miVariableLoca;
}

precipitacion.altura = await postData(url, shuvia);
console.log(precipitacion.altura[0])

const myChart = new Chart(ctx,{
    type: 'bar',
    data: {
        labels: dias,
        datasets: [{
            label: 'Altura de precipitación (mm)',
            data: precipitacion.altura,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options:{
        scales:{
            y:{
                beginAtZero: true
            }
        }
    }
});


    


// const otherParams = {
//     headers: {"content-type" : "application/json"},
//     body : persona,
//     method: "POST"
// }

// fetch(url, otherParams)
// .then(data=>{return data.json()})
// .then(res =>{console.log(res)})
// .catch(error=>console.log(error));