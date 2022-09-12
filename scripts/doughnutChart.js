const ctx = document.getElementById('myChartDoughnut')

const totalClicks = document.getElementById('totalClicks')

const data = {
    labels: ['Total Clicks','Signups','Total Views'],
    datasets: [{
        data: [65, 22, 200],
        backgroundColor: ['#1f7bb6', '#01aaaa', '#fbcf71',],
        borderWidth: 0,
        cutout: '65%',
        hoverOffset: 2,
        weight:4,
        offset:3
    }]
}


let font = window.innerWidth <= 700 ? 70 : Math.ceil(window.innerWidth / 45)


window.addEventListener('resize' , (evt) => {
    font = Math.ceil(evt.currentTarget.innerWidth / 45)
    if (evt.currentTarget.innerWidth <= 700){
        font = 70
    }
})

const counter = {
    id: "counter",
    beforeDraw (chart) {
        const {ctx , chartArea: {top , width , height}} = chart;
        ctx.save();
        ctx.font = `${font}px sans-serif`
        ctx.textAlign = 'center'
        ctx.fillStyle = 'white'
        ctx.fillText('50' , width / 2 , top + (height /2))
    }
}




const options = {
    plugins: {
        legend: {
            position: 'bottom',
            align:'start',
            labels: {
                usePointStyle: true,
            }
        }

    }
}


const myChartDoughnut = new Chart(ctx, {
    type: 'doughnut',
    data,
    options,
    plugins:[counter]
});

