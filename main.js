const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

function updateView() {
    $.getJSON( BASE_URL + "/rides/count", printData)
    $.getJSON( BASE_URL + "/rides/count/per_month", printData)
    $.getJSON( BASE_URL + "/rides/count/per_year", printData)
}

function printData(data) {
    console.log(data)
}