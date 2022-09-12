fetch('https://unpkg.com/world-atlas/countries-50m.json')
    .then((response) => response.json())
    .then((data) => {
    data.objects.countries.geometries = data.objects.countries.geometries.filter(e => e.properties.name !== "Antarctica")
    const countries = ChartGeo.topojson.feature(data, data.objects.countries).features;

    const myChartMap = document.getElementById("myChartMap").getContext("2d")

    const chart = new Chart(myChartMap, {
        type: 'choropleth',
        data: {
            labels: countries.map((d => d.properties.name)) ,
            // labels: countries.filter((d) => {
            //     console.log(d.properties.name)
            // }),
            datasets: [{
                label: 'Countries',
                data: countries.map((d) => {
                    if (d.properties.name === "China"){
                        return {feature: d, value: 65}
                    }else if (d.properties.name === "United Kingdom"){
                        return {feature: d, value: 22}
                    }else if (d.properties.name === "United States of America"){
                        return {feature: d, value: 200}
                    }
                    return {feature: d, value: 0}
                }),
                // hoverBackgroundColor: "rgba(0,0,0,0.001)",#facf70
                // borderColor: "grey",
                // borderWidth: "0.2",
                // backgroundColor:'#878686',
                // backgroundColor: (context) => {
                //
                //     if (context.dataIndex == null) {
                //         return '#fff;';
                //     }
                //     const value = context.dataset.data[context.dataIndex].value;
                //     if (value==0){
                //         return new Color('steelblue').lightness(1* 100).rgbString();
                //     }
                //     console.log(value);
                //     return new Color('steelblue').lightness(value * 5).rgbString();
                // },

                // label: "States",
            }]
        },
        options: {
            showOutline: false,
            showGraticule: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    position: "average",
                    // external: externalTooltipHandler
                }
            },
            scales: {
                xy: {
                    projection: 'equalEarth'
                },
                color:{
                    display: false
                }
            },

        }
    });
});