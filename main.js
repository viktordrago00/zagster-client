const BASE_URL = "https://zagster-service.herokuapp.com"
var rideMonth = []

$(updateView)


function updateView() {
    $.getJSON( BASE_URL + "/rides/count", updateRideCount)
    $.when(
        $.getJSON( BASE_URL + "/rides/count/per_year", printData)
    ).then(
        $.when(
        $.getJSON( BASE_URL + "/rides/count/per_month", grabData)
    ).then(
        printData
        ));
   
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
    $("h1#rideCount").html(numberOfRides)
  }
function printData(data) {
    console.log(data)
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
    data: {
        labels: ["9/16", "10/16", "11/16", "12/16", "1/17", "2/17", "3/17", "4/17", "5/17", "6/17", "7/17", "8/17", "9/17", "10/17", "11/17", "12/17", "1/18", "2/18", "3/18", "4/18", "5/18", "6/18", "7/18", "8/18", "9/18", "10/18", "2016", "2017", "2018"],
        datasets: [{
            label: '# of Rides per month',
            data: rideMonth,
            backgroundColor: [  
                
            ],
            borderColor: [
             
            ],
            borderWidth: 1 
        }, {
        labels: ["Total per year"],
            data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0, [data['2016']], [data['2017']], [data['2018']] ],
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
        legend: {
           display: false
        },
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
