const BASE_URL = "https://zagster-service.herokuapp.com"
var rideMonth = []

$(updateView)


function updateView() {
    $.getJSON( BASE_URL + "/rides/count", updateRideCount)
    $.getJSON( BASE_URL + "/rides/count/per_month", grabData, printData)
    $.getJSON( BASE_URL + "/rides/count/per_year", printData)
}
function grabData(data) {
    rideData = data;

    for (var i = 0; i <= 3; ++i){
        rideMonth.push(rideData[2016] [i] [i+9])
    }
    for (var i = 0; i <= 11; ++i){
        rideMonth.push(rideData[2017] [i] [i+1])
    }
    for (var i = 0; i <= 9; ++i){
        rideMonth.push(rideData[2018] [i] [i+1])
    }

}

function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
  }
function printData(data) {
    console.log(data)
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
    data: {
        labels: ["2016", "2017", "2018", "Total Count"],
        datasets: [{
            label: '# of Rides',
            data: rideMonth,
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
        }, {
        labels: ["Total"],
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
