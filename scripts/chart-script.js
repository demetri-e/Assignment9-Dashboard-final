    // Global Chart Settings

Chart.defaults.global.responisve = false;
Chart.defaults.global.elements.line.borderWidth = 1;
Chart.defaults.global.defaultFontColor = 'grey';
Chart.defaults.global.defaultFontSize = 10;
Chart.defaults.global.defaultFontFamily = 'Arial';
//Chart.defaults.global.legend.display = false;



// Line Chart 1

const CHART = document.getElementById("lineChart");

let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            label: "Monthly",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,75,192,0.2)",
            borderColor: "rgba(75,75,192,0.9)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,75,192,0.9)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [20, 34, 30, 40, 36, 44, 56, 45, 67, 71, 53, 64],
            spanGaps: false,

        }
    ]
}, 
    options: {
        legend: {
            //position: 'top-right',
            display: false
        },
        scales: {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 20,    // minimum will be 0, unless there is a lower value.
                max: 80,
            }
        }],

    }
    } 

});

//Line Chart 2 - Chart 4

const CHART4 = document.getElementById("lineChart2");

let lineChart2 = new Chart(CHART4, {
    type: 'line',
    data: {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [
        {
            label: "Weekly",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,75,192,0.2)",
            borderColor: "rgba(75,75,192,0.9)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,75,192,0.9)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [10, 22, 31, 36, 44, 48, 39, 32, 40, 51, 53, 26],
            spanGaps: false,

        }
    ]
}, 
    options: {
        legend: {
            display: false
        },
        scales: {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                max: 70,
            }
        }],

    }
    } 

});

// Line Chart 3 - Chart 5

const CHART5 = document.getElementById("lineChart3");

let lineChart3 = new Chart(CHART5, {
    type: 'line',
    data: {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
        {
            label: "Daily",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,75,192,0.2)",
            borderColor: "rgba(75,75,192,0.9)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,75,192,0.9)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [205, 263, 176, 189, 210, 225, 175],
            spanGaps: false,

        }
    ]
}, 
    options: {
        legend: {
            display: false
        },
        scales: {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 100,    // minimum will be 0, unless there is a lower value.
                //max: 100,
            }
        }],

    }
    } 

});

// Line Chart 4 - Chart 6

const CHART6 = document.getElementById("lineChart4");

let lineChart4 = new Chart(CHART6, {
    type: 'line',
    data: {
    labels: ["12-2am", "2-4am", "4-6am", "6-8am", "8-10am", "10am-12pm", "12-2pm", "2-4pm", "4-6pm", "8-10pm", "10pm-12am"],
    datasets: [
        {
            label: "Hourly",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,75,192,0.2)",
            borderColor: "rgba(75,75,192,0.9)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,75,192,0.9)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [40, 55, 60, 24, 44, 59, 89, 66, 70, 51, 53, 36],
            spanGaps: false,

        }
    ]
}, 
    options: {
        legend: {
            display: false
        },
        scales: {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                max: 90,
            }
        }],

    }
    } 

});


//Bar Chart
const CHART2 = document.getElementById("barChart");


let barChart = new Chart(CHART2, {
    type: 'bar',
    data: {
        labels: ['S','M','T','W','T','F','S'],
        datasets: [
                {
            label: "Streams",
            backgroundColor: "rgba(75,75,192,0.9)",
            data: [30,75,40,65,56,80,59]
        },
        {
            label: "Downloads",
            backgroundColor: "rgba(75,75,192,0.4)",
            data: [43,31,54,71,59,66,71]
        }
      ] 
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 100,
                }
            }]
        },
        legend: {
            display: true
        }
    } 
});


//Donut Chart

const CHART3 = document.getElementById("pieChart");


let pieChart = new Chart(CHART3, {
    type: 'doughnut',
    data: {
        labels: ['Phone','Tablet','Desktop','Laptop'],
        datasets: [
        {   
            label: 'Points',
            backgroundColor: ['rgba(75,75,192,0.9)','rgba(110,173,194,1)', 'rgba(60,199,150,1)', 'rgba(163,125,189,1)'],
            data: [200,20,70,70]
        }
      ] 
    },
    options: {
        cutoutPercentage: 40,
        rotation: Math.PI * -.5,
        animation: {
            animateScale: true
        },
        legend: {
            display: true,
            position: 'right'
        }
    }
});

