import "https://cdn.jsdelivr.net/npm/chart.js";

let arrayForLabels = Array.from(Array(500).keys()).map((key)=> key = key * -1);
arrayForLabels.push.apply(arrayForLabels,Array(500).keys())

function toggle () {
    let x = document.querySelector("#test button");
    console.log(x);

}

const ctx = document.querySelector('#myChart');
let chartTemp = new Chart(ctx, {
    type: 'line',
    data: {
    labels: Array.from(Array(500).keys()),
    datasets: [{
        label: '# of Votes',
        data: Array.from(Array(500).keys()),
        borderWidth: 1
    }]
    },
    options: {
        elements: {
            point:{
                radius: 0
            }
        },
    scales: {
        y: {
        beginAtZero: false,
        max: 100
        }
    }
    }
    
});


function plotGraph(chartRef, dataSet){
    // dataSet.push(1000);
    // let chartStatus = Chart.getChart("myChart"); // <canvas> id
    // if (chartStatus != undefined) {
    //     chartStatus.destroy();
    // }
    
    chartRef.data.datasets[0].data = dataSet;
    chartRef.update();

    
    
}
      

navigator.mediaDevices.getUserMedia({ audio: true, video: false })
   .then(function(stream) {
       const audioContext = new (window.AudioContext || window.webkitAudioContext)();
       const source = audioContext.createMediaStreamSource(stream);
       const analyser = audioContext.createAnalyser();
       source.connect(analyser);
       analyser.fftSize = 2048;
       const bufferLength = analyser.frequencyBinCount;
       const dataArray = new Uint8Array(bufferLength);
       function analyze() {
           requestAnimationFrame(analyze);
           analyser.getByteFrequencyData(dataArray);
           // Process dataArray to find tonality
           // ...
           plotGraph(chartTemp,dataArray);
           console.log(dataArray);
       }
       analyze();
   })
   .catch(function(err) {
       console.log('Error: ' + err);
   });