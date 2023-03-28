class App {
    constructor() {
        this.startBtn = document.getElementById("js--start");
        this.stopBtn = document.getElementById("js--stop");
        this.resetBtn = document.querySelector(".button--reset");
        this.seconds = 0;
        this.minutes = 0;
        this.running = false;
        this.secondTimer = document.getElementById("js--secondTimer");
        this.minuteTimer = document.getElementById("js--minuteTimer");
        this.rangeValue = document.getElementById("js--rangeValue");
        this.slider = document.getElementById("js--slider");
        this.body = document.getElementById("js--body");


        this.startBtn.addEventListener('click', () => {
            if (this.running === true) {
                return;
            }
            this.running = true;
            this.timer = setInterval(() => {
                this.seconds += 1;
                if (this.seconds === 60) {
                    this.minutes += 1;
                    minuteTimer.innerText = minutes;
                    seconds = 0;
                }
                secondTimer.innerText = seconds;
            }, 1000);
            slider.disabled = true;

            // Change background color of body while running
            body.style.backgroundColor = "#f2f2f2";

            // Change text color of buttons while running
            startBtn.style.color = "#ccc";
            stopBtn.style.color = "#000";

        });

        this.stopBtn.addEventListener('click', () => {
            clearInterval(this.timer);
            this.running = false;

            // Enable slider when stopped
            slider.disabled = false;

            // Change background color of body when stopped
            body.style.backgroundColor = "#fff";

            // Change text color of buttons when stopped
            startBtn.style.color = "#000";
            stopBtn.style.color = "#ccc";

        });

        this.resetBtn.addEventListener('click', () => {

            clearInterval(this.timer);
            this.running = false;

            this.seconds = 0;
            this.minutes = 0;

            this.secondTimer.innerText = "00";
            this.minuteTimer.innerText = "00";

            slider.value = 2;

            rangeValue.innerText = "2x";
            body.style.fontSize = "16px";

            slider.disabled = false;

            body.style.backgroundColor = "#fff";

            startBtn.style.color = "#000";
            stopBtn.style.color = "#ccc";

        });

    }

}

const app = new App();