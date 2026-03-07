/**
    {
        "api":1,
        "name":"Date to Timestamp",
        "description":"Converts readable date strings to Unix timestamp (seconds since epoch)",
        "author":"Noah Halford",
        "icon":"watch",
        "tags":"date,time,calendar,unix,timestamp"
    }
**/

function main(input) {

    let parsedDate = Date.parse(input.text)

    if (isNaN(parsedDate)) {
        input.postError("Invalid Date")
    } else {
        input.text = parsedDate / 1000
    }
}
