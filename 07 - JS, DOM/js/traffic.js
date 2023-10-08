const traffic = [
    function toGreen() {
        document.querySelector('.green').style.backgroundColor = "#50C878"
        document.querySelector('.yellow').style.backgroundColor = "";
        document.querySelector('.red').style.backgroundColor = "";
        },
    function toYellow() {
        document.querySelector('.green').style.backgroundColor = ""
        document.querySelector('.yellow').style.backgroundColor = "yellow";
        document.querySelector('.red').style.backgroundColor = "";
        },
    function toRed() {
        document.querySelector('.green').style.backgroundColor = ""
        document.querySelector('.yellow').style.backgroundColor = "";
        document.querySelector('.red').style.backgroundColor = "red";
        }
]

let trafficIndex = 0;
function changeLight() {
    traffic[trafficIndex](); 
    trafficIndex = (trafficIndex + 1) % traffic.length; 
}