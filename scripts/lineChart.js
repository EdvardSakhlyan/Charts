let myChart = document.getElementById('myChartLine').getContext("2d")

let linesChart = new Chart(myChart , {
    type: 'line',
    data: {
        labels: ['','','','','','',''],
        datasets: [{
            label:'Clicks',
            data: [25, 60, 20, -40, -30, 30, 50],
            backgroundColor:['#fbcf71'],
            borderColor : '#fbcf71',
            tension:.5,
            pointBorderColor: '#2f353c',
            pointBorderWidth:2,
        },
        {
            label:'Page View',
            data: [-30, 25, 57, -18, -40, -30, 20],
            backgroundColor:['#1f7bb6'],
            borderColor : '#1f7bb6',
            tension:.5,
            pointBorderColor: '#2f353c',
            pointBorderWidth:2,
        },
        {
            label:'Sign Ups',
            data: [40, 50, 0, -43, -20, 40, 48],
            backgroundColor:['#1abc9c'],
            borderColor : '#1abc9c',
            tension:0.4,
            pointBorderColor: '#2f353c',
            pointBorderWidth:2,
        }
        ]
    },
    options: {
        maintainAspectRatio:true,
        scales: {
            x: {
                grid: {display:false}
            },
            y: {
                grid: {drawBorder: false,}
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                align:'end',
                labels: {
                    boxWidth: 12
                }
            }
        }
    }
})

