const BASE_URL = "https://zagster-service.herokuapp.com"
var rideMonth = []

$(updateView)

function updateView() {
    $.getJSON( BASE_URL + "/rides/count", updateRideCount)
    $.getJSON( BASE_URL + "/rides/count/per_month", printData)
    $.getJSON( BASE_URL + "/rides/count/per_year", printData)
}


function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
  }
function printData(data) {
    console.log(data)
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
    data: {
        labels: ["2016", "2017", "2018"],
        datasets: [{
            label: '# of Votes',
            data: [ [data['2016']], [data['2017']], [data['2018']] ],
            backgroundColor: [  
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1 
        }],     
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}



//[ [data['2016']], [data['2017']], [data['2018']] ],
