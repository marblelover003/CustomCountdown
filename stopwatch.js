var timeToUse = 0, start, now, elapsed, h, m, s, ms, format, isPaused, isStarted, delay, nowT, times, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], hours = ["12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"], ampm = ["AM", "PM"], currentTime, time;
isStarted = false;
isPaused = true;
elapsed = 0;
time = 359999999;
setInterval(timerRunning, 0);
function delay_3s() {
  document.getElementById("delay3").style.visibility = "hidden";
  document.getElementById("delay5").style.visibility = "hidden";
  document.getElementById("delay10").style.visibility = "hidden";
  document.getElementById("delay15").style.visibility = "hidden";
  document.getElementById("delay30").style.visibility = "hidden";
  document.getElementById("delay60").style.visibility = "hidden";
  document.getElementById("delay90").style.visibility = "hidden";
  delay = 3;
  document.getElementById("delay").innerHTML = ("0" + delay).slice(-2);
  d1 = setTimeout(decreaseDelay,1000);
  d2 = setTimeout(decreaseDelay,2000);
  d3 = setTimeout(function() {
    decreaseDelay();
    toggle_start_pause();
  },3000);
}
function delay_5s() {
  document.getElementById("delay3").style.visibility = "hidden";
  document.getElementById("delay5").style.visibility = "hidden";
  document.getElementById("delay10").style.visibility = "hidden";
  document.getElementById("delay15").style.visibility = "hidden";
  document.getElementById("delay30").style.visibility = "hidden";
  document.getElementById("delay60").style.visibility = "hidden";
  document.getElementById("delay90").style.visibility = "hidden";
  delay = 5;
  document.getElementById("delay").innerHTML = ("0" + delay).slice(-2);
  d1 = setTimeout(decreaseDelay,1000);
  d2 = setTimeout(delay_3s,2000);
}
function delay_10s() {
  document.getElementById("delay3").style.visibility = "hidden";
  document.getElementById("delay5").style.visibility = "hidden";
  document.getElementById("delay10").style.visibility = "hidden";
  document.getElementById("delay15").style.visibility = "hidden";
  document.getElementById("delay30").style.visibility = "hidden";
  document.getElementById("delay60").style.visibility = "hidden";
  document.getElementById("delay90").style.visibility = "hidden";
  delay = 10;
  document.getElementById("delay").innerHTML = ("0" + delay).slice(-2);
  d1 = setTimeout(decreaseDelay,1000);
  d2 = setTimeout(decreaseDelay,2000);
  d3 = setTimeout(decreaseDelay,3000);
  d4 = setTimeout(decreaseDelay,4000);
  d5 = setTimeout(delay_5s,5000);
}
function delay_15s() {
  document.getElementById("delay3").style.visibility = "hidden";
  document.getElementById("delay5").style.visibility = "hidden";
  document.getElementById("delay10").style.visibility = "hidden";
  document.getElementById("delay15").style.visibility = "hidden";
  document.getElementById("delay30").style.visibility = "hidden";
  document.getElementById("delay60").style.visibility = "hidden";
  document.getElementById("delay90").style.visibility = "hidden";
  delay = 15;
  document.getElementById("delay").innerHTML = ("0" + delay).slice(-2);
  d1 = setTimeout(decreaseDelay,1000);
  d2 = setTimeout(decreaseDelay,2000);
  d3 = setTimeout(decreaseDelay,3000);
  d4 = setTimeout(decreaseDelay,4000);
  d5 = setTimeout(delay_10s,5000);
}
function delay_30s() {
  document.getElementById("delay3").style.visibility = "hidden";
  document.getElementById("delay5").style.visibility = "hidden";
  document.getElementById("delay10").style.visibility = "hidden";
  document.getElementById("delay15").style.visibility = "hidden";
  document.getElementById("delay30").style.visibility = "hidden";
  document.getElementById("delay60").style.visibility = "hidden";
  document.getElementById("delay90").style.visibility = "hidden";
  delay = 30;
  document.getElementById("delay").innerHTML = ("0" + delay).slice(-2);
  d1 = setTimeout(decreaseDelay,1000);
  d2 = setTimeout(decreaseDelay,2000);
  d3 = setTimeout(decreaseDelay,3000);
  d4 = setTimeout(decreaseDelay,4000);
  d5 = setTimeout(decreaseDelay,5000);
  d6 = setTimeout(decreaseDelay,6000);
  d7 = setTimeout(decreaseDelay,7000);
  d8 = setTimeout(decreaseDelay,8000);
  d9 = setTimeout(decreaseDelay,9000);
  d10 = setTimeout(decreaseDelay,10000);
  d11 = setTimeout(decreaseDelay,11000);
  d12 = setTimeout(decreaseDelay,12000);
  d13 = setTimeout(decreaseDelay,13000);
  d14 = setTimeout(decreaseDelay,14000);
  d15 = setTimeout(delay_15s,15000);
}
function delay_60s() {
  document.getElementById("delay3").style.visibility = "hidden";
  document.getElementById("delay5").style.visibility = "hidden";
  document.getElementById("delay10").style.visibility = "hidden";
  document.getElementById("delay15").style.visibility = "hidden";
  document.getElementById("delay30").style.visibility = "hidden";
  document.getElementById("delay60").style.visibility = "hidden";
  document.getElementById("delay90").style.visibility = "hidden";
  delay = 60;
  document.getElementById("delay").innerHTML = ("0" + delay).slice(-2);
  d1 = setTimeout(decreaseDelay,1000);
  d2 = setTimeout(decreaseDelay,2000);
  d3 = setTimeout(decreaseDelay,3000);
  d4 = setTimeout(decreaseDelay,4000);
  d5 = setTimeout(decreaseDelay,5000);
  d6 = setTimeout(decreaseDelay,6000);
  d7 = setTimeout(decreaseDelay,7000);
  d8 = setTimeout(decreaseDelay,8000);
  d9 = setTimeout(decreaseDelay,9000);
  d10 = setTimeout(decreaseDelay,10000);
  d11 = setTimeout(decreaseDelay,11000);
  d12 = setTimeout(decreaseDelay,12000);
  d13 = setTimeout(decreaseDelay,13000);
  d14 = setTimeout(decreaseDelay,14000);
  d15 = setTimeout(decreaseDelay,15000);
  d16 = setTimeout(decreaseDelay,16000);
  d17 = setTimeout(decreaseDelay,17000);
  d18 = setTimeout(decreaseDelay,18000);
  d19 = setTimeout(decreaseDelay,19000);
  d20 = setTimeout(decreaseDelay,20000);
  d21 = setTimeout(decreaseDelay,21000);
  d22 = setTimeout(decreaseDelay,22000);
  d23 = setTimeout(decreaseDelay,23000);
  d24 = setTimeout(decreaseDelay,24000);
  d25 = setTimeout(decreaseDelay,25000);
  d26 = setTimeout(decreaseDelay,26000);
  d27 = setTimeout(decreaseDelay,27000);
  d28 = setTimeout(decreaseDelay,28000);
  d29 = setTimeout(decreaseDelay,29000);
  d30 = setTimeout(delay_30s,30000);
}
function delay_90s() {
  document.getElementById("delay3").style.visibility = "hidden";
  document.getElementById("delay5").style.visibility = "hidden";
  document.getElementById("delay10").style.visibility = "hidden";
  document.getElementById("delay15").style.visibility = "hidden";
  document.getElementById("delay30").style.visibility = "hidden";
  document.getElementById("delay60").style.visibility = "hidden";
  document.getElementById("delay90").style.visibility = "hidden";
  delay = 90;
  document.getElementById("delay").innerHTML = ("0" + delay).slice(-2);
  d1 = setTimeout(decreaseDelay,1000);
  d2 = setTimeout(decreaseDelay,2000);
  d3 = setTimeout(decreaseDelay,3000);
  d4 = setTimeout(decreaseDelay,4000);
  d5 = setTimeout(decreaseDelay,5000);
  d6 = setTimeout(decreaseDelay,6000);
  d7 = setTimeout(decreaseDelay,7000);
  d8 = setTimeout(decreaseDelay,8000);
  d9 = setTimeout(decreaseDelay,9000);
  d10 = setTimeout(decreaseDelay,10000);
  d11 = setTimeout(decreaseDelay,11000);
  d12 = setTimeout(decreaseDelay,12000);
  d13 = setTimeout(decreaseDelay,13000);
  d14 = setTimeout(decreaseDelay,14000);
  d15 = setTimeout(decreaseDelay,15000);
  d16 = setTimeout(decreaseDelay,16000);
  d17 = setTimeout(decreaseDelay,17000);
  d18 = setTimeout(decreaseDelay,18000);
  d19 = setTimeout(decreaseDelay,19000);
  d20 = setTimeout(decreaseDelay,20000);
  d21 = setTimeout(decreaseDelay,21000);
  d22 = setTimeout(decreaseDelay,22000);
  d23 = setTimeout(decreaseDelay,23000);
  d24 = setTimeout(decreaseDelay,24000);
  d25 = setTimeout(decreaseDelay,25000);
  d26 = setTimeout(decreaseDelay,26000);
  d27 = setTimeout(decreaseDelay,27000);
  d28 = setTimeout(decreaseDelay,28000);
  d29 = setTimeout(decreaseDelay,29000);
  d30 = setTimeout(delay_60s,30000);
}
function decreaseDelay() {
  delay -= 1;
  document.getElementById("delay").innerHTML = ("0" + delay).slice(-2);
}
function toggle_start_pause() {
  document.getElementById("delay3").style.visibility = "hidden";
  document.getElementById("delay5").style.visibility = "hidden";
  document.getElementById("delay10").style.visibility = "hidden";
  document.getElementById("delay15").style.visibility = "hidden";
  document.getElementById("delay30").style.visibility = "hidden";
  document.getElementById("delay60").style.visibility = "hidden";
  document.getElementById("delay90").style.visibility = "hidden";
  document.getElementById("delay").style.visibility = "hidden";
  if (isStarted == false) {
    isStarted = true;
    start = new Date().getTime();
  }
  if (isPaused == true) {
    isPaused = false;
    document.getElementById("start_pause_button").innerHTML = "Pause";
    document.getElementById("start_pause_button").style.backgroundColor = "#ff8000";
  } else if (isPaused == false) {
    isPaused = true;
    document.getElementById("start_pause_button").innerHTML = "Start";
    document.getElementById("start_pause_button").style.backgroundColor = "#00df00";
  }
}
function resetTimer() {
  start = new Date().getTime();
  isStarted = false;
  isPaused = true;
  elapsed = 0;
  document.getElementById("start_pause_button").innerHTML = "Start";
  document.getElementById("start_pause_button").style.backgroundColor = "#00df00";
  document.getElementById("delay3").style.visibility = "visible";
  document.getElementById("delay5").style.visibility = "visible";
  document.getElementById("delay10").style.visibility = "visible";
  document.getElementById("delay15").style.visibility = "visible";
  document.getElementById("delay30").style.visibility = "visible";
  document.getElementById("delay60").style.visibility = "visible";
  document.getElementById("delay90").style.visibility = "visible";
  document.getElementById("delay").style.visibility = "visible";
  currentTime = new Date("Jan 1, 1970");
  nowT = {
    day:currentTime.getDay(),
    month:currentTime.getMonth(),
    date:currentTime.getDate(),
    year:currentTime.getFullYear(),
    hour:currentTime.getHours(),
    minute:currentTime.getMinutes(),
    second:currentTime.getSeconds()
  };
  document.getElementById("dateAndTime").innerHTML = daysOfWeek[nowT.day] + ", " + months[nowT.month] + " " + ("0" + nowT.date).slice(-2) + ", " + nowT.year + " " + hours[nowT.hour % 12] + ":" + ("0" + nowT.minute).slice(-2) + ":" + ("0" + nowT.second).slice(-2) + " " + ampm[Math.floor((nowT.hour / 12) % 2)];
  clearTimeout(d1);
  clearTimeout(d2);
  clearTimeout(d3);
  clearTimeout(d4);
  clearTimeout(d5);
  clearTimeout(d6);
  clearTimeout(d7);
  clearTimeout(d8);
  clearTimeout(d9);
  clearTimeout(d10);
  clearTimeout(d11);
  clearTimeout(d12);
  clearTimeout(d13);
  clearTimeout(d14);
  clearTimeout(d15);
  clearTimeout(d16);
  clearTimeout(d17);
  clearTimeout(d18);
  clearTimeout(d19);
  clearTimeout(d20);
  clearTimeout(d21);
  clearTimeout(d22);
  clearTimeout(d23);
  clearTimeout(d24);
  clearTimeout(d25);
  clearTimeout(d26);
  clearTimeout(d27);
  clearTimeout(d28);
  clearTimeout(d29);
  clearTimeout(d30);
  document.getElementById("delay").innerHTML = "00";
}
function timerRunning() {
  now = new Date().getTime();
  if (isPaused == true) {
    start = now - elapsed;
  } else if (isPaused == false) {
    elapsed = now - start;
    currentTime = new Date();
    nowT = {
      day:currentTime.getDay(),
      month:currentTime.getMonth(),
      date:currentTime.getDate(),
      year:currentTime.getFullYear(),
      hour:currentTime.getHours(),
      minute:currentTime.getMinutes(),
      second:currentTime.getSeconds()
    };
    document.getElementById("dateAndTime").innerHTML = daysOfWeek[nowT.day] + ", " + months[nowT.month] + " " + ("0" + nowT.date).slice(-2) + ", " + nowT.year + " " + hours[nowT.hour % 12] + ":" + ("0" + nowT.minute).slice(-2) + ":" + ("0" + nowT.second).slice(-2) + " " + ampm[Math.floor((nowT.hour / 12) % 2)];
  }
  if (elapsed >= 360000000) {
    resetTimer();
  }
  h = Math.floor((elapsed % 360000000) / 3600000);
  m = Math.floor((elapsed % 3600000) / 60000);
  s = Math.floor((elapsed % 60000) / 1000);
  ms= Math.floor(elapsed % 1000);
  format = ("0" + h).slice(-2) + "." + ("0" + m).slice(-2) + "." + ("0" + s).slice(-2) + "." + ("00" + ms).slice(-3);
  document.getElementById("time").innerHTML = format;
}
