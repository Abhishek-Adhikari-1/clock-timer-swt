let hr = (min = sec = ms = "0" + 0),
    startTimer;

var startBtn = document.querySelector(".buttons .start"),
    stopBtn = document.querySelector(".buttons .stop"),
    resetBtn = document.querySelector(".buttons .reset");

startBtn.addEventListener("click", () => {
    StartBtn();
});

resetBtn.addEventListener("click", () => {
    Reset();
});

stopBtn.addEventListener("click", () => {
    Stop();
});

const StartBtn = () => {
    startBtn.classList.add("active");
    startBtn.disabled = true;
    stopBtn.classList.remove("active");
    resetBtn.classList.remove("active");

    startTimer = setInterval(() => {
        ms++;
        ms = ms < 10 ? "0" + ms : ms;
        if (ms == 100) {
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;
        }
        if (sec == 60) {
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "0" + 0;
        }
        if (min == 60) {
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0;
        }
        putValue();
    }, 10);
};

const putValue = () => {
    document.querySelector(".time .millisecond").innerText = ms;
    document.querySelector(".time .second").innerText = sec;
    document.querySelector(".time .minute").innerText = min;
    document.querySelector(".time .hour").innerText = hr;
};

const Reset = () => {
    Stop();
    ms = "00";
    sec = "00";
    min = "00";
    hr = "00";
    putValue();
    startBtn.disabled = false;
};

const Stop = () => {
    startBtn.classList.remove("active");
    stopBtn.classList.add("active");
    resetBtn.classList.remove("active");
    clearInterval(startTimer);
    startBtn.disabled = false;
};

const addActive = () => {
    startBtn.classList.remove("active");
    stopBtn.classList.add("active");
    resetBtn.classList.remove("active");
};
