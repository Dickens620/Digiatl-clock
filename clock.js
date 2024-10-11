setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    // let microsec = time.getmicroSeconds();
    // let millsec = time.getmillSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    // microsec = microsec < 10 ? "0" + microsec : microsec;
    // millsec = millsec < 10 ? "0" + millsec : millsec;

    let currentTime = hour + ":" +
        min + ":" + sec + am_pm;
    // let currentTime = hour + ":" +
    //     min + ":" + sec + ":"
    // microsec + ":" + millsec + am_pm;


    document.getElementById("clock")
        .innerHTML = currentTime;
}
showTime();