function BMI() {
    var h = document.getElementById("height").value;
    var w = document.getElementById("weight").value;
    var bmi = w / (h / 100 * h / 100);
    var bmio = (bmi.toFixed(2));

    document.getElementById("result").innerHTML = "Your BMI is " + bmio;
}




const startingMinutes = 60;
let time = startingMinutes * 60;

const countDown = document.getElementById("countdown");

setInterval(updateCountDown, 1000);

function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    countDown.innerHTML = `${minutes} : ${seconds}`;
    time--;

}