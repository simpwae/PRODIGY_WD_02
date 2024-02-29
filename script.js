let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.querySelector("#displayTime");
let timer = null;

function stopWatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = `${h}:${m}:${s}`;
}
function watchStart() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}
function watchstop() {
  clearInterval(timer);
}
function watchReset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}
//for changing Mode
let mode = document.querySelector(".mode");
let value = "light";
let body = document.querySelector("body");
mode.addEventListener("click", () => {
  if (value == "light") {
    value = "dark";
    mode.innerHTML = "Dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    value = "light";
    mode.innerHTML = "Light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
});
