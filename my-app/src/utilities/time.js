
export function updateTimeInFooter() {
    var now = new Date();      
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0'); 
    document.getElementById("time").innerHTML = timeString;
}