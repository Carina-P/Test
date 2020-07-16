//------------------Total Population Graph---------------------------->
const haxis = [];
const vaxis = [];
const verts = [];
const herts = [];

getCsvPop();
async function getCsvPop() {

const response = await fetch('assets/csv/POP.csv');
const csv = await response.text();

const verts = csv.substr(0, 361);
const herts = csv.substr(362, 611);
const vaxis = verts.split(',').map(x => parseFloat(x, 10));
const haxis = herts.split(',');

console.log(haxis, vaxis);

const totPop = document.getElementById('totPop').getContext('2d');

//const popCharts = 

new Chart(totPop, {
    type: 'line',
    data: {
        labels: haxis,
        datasets: [{
            label: 'Africa Population Mns 1970 to 2019',
            data: vaxis,
            fill: true,
            backgroundColor: "rgba(139,0,0, 0.4)",
            borderColor: "rgba(139,0,0, 0.4)",
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        },
        layout: {
            padding: 20
        }
    }
});
}

//--------------------GDP Total Graph--------------------------------------------->
const haxs = [];
const vaxs = [];
const virts = [];
const hirts = [];

getCsvGdp();
async function getCsvGdp() {

const response = await fetch('assets/csv/GDP.csv');

const csvgdp = await response.text();

const virts = csvgdp.substr(0, 362);
const hirts = csvgdp.substr(363, 612);
const vaxs = virts.split(',').map(x => parseFloat(x, 10));
const haxs = hirts.split(',');

console.log(haxs, vaxs);

const totGdp = document.getElementById('totGdp').getContext('2d');

//const gdpChart = 

new Chart(totGdp, {
    type: 'line',
    data: {
        labels: haxs,
        datasets: [{
            label: 'Africa GDP US$ Bns 1970 to 2019',
            data: vaxs,
            backgroundColor: "rgba(139,0,0, 0.4)",
            borderColor: "rgba(139,0,0, 0.4)",
            fill: true,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback:function(value) {return "$" + value}
                }
            }]
        },
        layout: {
            padding: 20
        }
    }
});
}