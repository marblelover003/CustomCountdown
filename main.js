var date = document.getElementById("date").innerHTML, end = new Date(date).getTime(), now, rem = 0, w, d, h, m, s, ms, f1, formats, sizes, sizeToUse, formatToUse, mode, time, months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], hr = ["12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"], ampm = ["AM", "PM"], currentTime = {month:0, date:1, year:1970, hour:0, minute:0};
switchMode();
setInterval(function() {
  currentTime = {month: new Date().getMonth(), date: ("0" + new Date().getDate()).slice(-2), year: new Date().getFullYear(), hour: new Date().getHours(), minute: ("0" + new Date().getMinutes()).slice(-2)};
  currentTimeFormat = {month: months[currentTime.month], date: currentTime.date, year: currentTime.year, hour: hr[currentTime.hour], minute: currentTime.minute, ampm:ampm[Math.floor(currentTime.hour / 12)]};
  document.getElementById("currentTime").innerHTML = currentTimeFormat.month + " " + currentTimeFormat.date + ", " + currentTimeFormat.year + " " + currentTimeFormat.hour + ":" + currentTimeFormat.minute + " " + currentTimeFormat.ampm;
  if (mode == 1) {
    date = document.getElementById("date").innerHTML;
    end = new Date(date).getTime();
  }
  now = new Date().getTime();
  if (end > now + 60479999999) {
    end = new Date().getTime() + 60479999999;
  }
  rem = end - now;
  w = Math.floor(rem / 604800000);
  d = Math.floor((rem % 604800000) / 86400000);
  h = Math.floor((rem % 86400000) / 3600000);
  m = Math.floor((rem % 3600000) / 60000);
  s = Math.floor((rem % 60000) / 1000);
  ms= Math.floor(rem % 1000);
  if (rem >= 5000) {
    document.getElementById("time").classList.remove("almostDone");
  }
  if (rem < 100000 && rem >= 10000) {
    document.getElementById("time").style.color = "#cd7f32";
  } else if (rem < 10000 && rem >= 5000) {
    document.getElementById("time").style.color = "#c0c0c0";
  } else if (rem < 5000) {
    if (rem <= 0) {
      rem = 0;
      w = 0;
      d = 0;
      h = 0;
      m = 0;
      s = -1;
      ms = 0;
      document.getElementById("time").style.color = "#0000ff";
    } else {
      document.getElementById("time").style.color = "#ffd700";
    }
  } else {
    document.getElementById("time").style.color = "#000000";
  }
  formats = [
    ("0" + w).slice(-2) + "w " + d + "d " + ("0" + h).slice(-2) + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2), // 0
    ("0" + w).slice(-2) + "w " + d + "d " + h + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2), // 1
    ("0" + w).slice(-2) + "w " + d + "d " + ("0" + ((h * 60) + m)).slice(-2) + ":" + ("0" + s).slice(-2), // 2
    ("0" + w).slice(-2) + "w " + d + "d " + ((h * 60) + m) + ":" + ("0" + s).slice(-2), // 3
    ("0" + w).slice(-2) + "w " + d + "d " + ("0" + ((m * 60) + s)).slice(-2) + "." + Math.floor(ms / 100), // 4
    ("0" + w).slice(-2) + "w " + d + "d " + ((m * 60) + s) + "." + Math.floor(ms / 100), // 5
    ("0" + w).slice(-2) + "w " + ("0" + ((d * 24) + h)).slice(-2) + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2), // 6
    ("0" + w).slice(-2) + "w " + ((d * 24) + h) + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2), // 7
    ("0" + w).slice(-2) + "w " + ("0" + ((h * 60) + m)).slice(-2) + ":" + ("0" + s).slice(-2), // 8
    ("0" + w).slice(-2) + "w " + ((h * 60) + m) + ":" + ("0" + s).slice(-2), // 9
    ("0" + w).slice(-2) + "w " + ("0" + ((m * 60) + s)).slice(-2) + "." + Math.floor(ms / 100), // 10
    ("0" + w).slice(-2) + "w " + ((m * 60) + s) + "." + Math.floor(ms / 100), // 11
    w + "w " + d + "d " + ("0" + h).slice(-2) + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2), // 12
    w + "w " + d + "d " + h + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2), // 13
    w + "w " + d + "d " + ("0" + ((h * 60) + m)).slice(-2) + ":" + ("0" + s).slice(-2), // 14
    w + "w " + d + "d " + ((h * 60) + m) + ":" + ("0" + s).slice(-2), // 15
    w + "w " + d + "d " + ("0" + ((m * 60) + s)).slice(-2) + "." + Math.floor(ms / 100), // 16
    w + "w " + d + "d " + ((m * 60) + s) + "." + Math.floor(ms / 100), // 17
    w + "w " + ("0" + ((d * 24) + h)).slice(-2) + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2), // 18
    w + "w " + ((d * 24) + h) + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2), // 19
    w + "w " + ("0" + ((h * 60) + m)).slice(-2) + ":" + ("0" + s).slice(-2), // 20
    w + "w " + ((h * 60) + m) + ":" + ("0" + s).slice(-2), // 21
    w + "w " + ("0" + ((m * 60) + s)).slice(-2) + "." + Math.floor(ms / 100), // 22
    w + "w " + ((m * 60) + s) + "." + Math.floor(ms / 100), // 23
    d + "d " + ("0" + h).slice(-2) + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2), // 24
    d + "d " + h + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2), // 25
    d + "d " + ("0" + ((h * 60) + m)).slice(-2) + ":" + ("0" + s).slice(-2), // 26
    d + "d " + ((h * 60) + m) + ":" + ("0" + s).slice(-2), // 27
    d + "d " + ("0" + ((m * 60) + s)).slice(-2) + "." + Math.floor(ms / 100), // 28
    d + "d " + ((m * 60) + s) + "." + Math.floor(ms / 100), // 29
    ("0" + ((d * 24) + h)).slice(-2) + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2), // 30
    h + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2), // 31
    ("0" + ((h * 60) + m)).slice(-2) + ":" + ("0" + s).slice(-2), // 32
    ((h * 60) + m) + ":" + ("0" + s).slice(-2), // 33
    ("0" + ((m * 60) + s)).slice(-2) + "." + ("0" + Math.floor(ms / 10)).slice(-2), // 34
    ((m * 60) + s) + "." + ("00" + ms).slice(-3), // 35
    s+1, // 36
  ];
  sizes = [53, 58, 66, 73, 73, 81, 65, 72, 85, 97, 97, 113, 58, 63, 73, 81, 81, 92, 72, 80, 97, 113, 113, 135, 74, 83, 101, 119, 118, 143, 100, 113, 155, 200, 155, 155, 400];
  formatToUse = 0;
  if (w >= 10 && d >= 2 && h >= 10) {
    formatToUse = 0;
  } else if (w >= 10 && d >= 2 && (0 < h && h < 10)) {
    formatToUse = 1;
  } else if (w >= 10 && d >= 2 && (600000 <= rem % 86400000 && rem % 86400000 < 6000000)) {
    formatToUse = 2;
  } else if (w >= 10 && d >= 2 && (100000 <= rem % 86400000 && rem % 86400000 < 600000)) {
    formatToUse = 3;
  } else if (w >= 10 && d >= 2 && (10000 <= rem % 86400000 && rem % 86400000 < 100000)) {
    formatToUse = 4;
  } else if (w >= 10 && d >= 2 && (0 <= rem % 86400000 && rem % 86400000 < 10000)) {
    formatToUse = 5;
  } else if (w >= 10 && d < 2 && (rem % 604800000) % 172800000 >= 36000000) {
    formatToUse = 6;
  } else if (w >= 10 && d < 2 && (3600000 <= (rem % 604800000) % 172800000 && (rem % 604800000) % 172800000 < 36000000)) {
    formatToUse = 7;
  } else if (w >= 10 && d < 2 && (600000 <= (rem % 604800000) % 172800000 && (rem % 604800000) % 172800000 < 6000000)) {
    formatToUse = 8;
  } else if (w >= 10 && d < 2 && (100000 <= (rem % 604800000) % 172800000 && (rem % 604800000) % 172800000 < 600000)) {
    formatToUse = 9;
  } else if (w >= 10 && d < 2 && (10000 <= (rem % 604800000) % 172800000 && (rem % 604800000) % 172800000 < 100000)) {
    formatToUse = 10;
  } else if (w >= 10 && d < 2 && (0 <= (rem % 604800000) % 172800000 && (rem % 604800000) % 172800000 < 100000)) {
    formatToUse = 11;
  } else if (w < 10 && rem >= 604800000 && d >= 2 && h >= 10) {
    formatToUse = 12;
  } else if (w < 10 && rem >= 604800000 && d >= 2 && (0 < h && h < 10)) {
    formatToUse = 13;
  } else if (w < 10 && rem >= 604800000 && d >= 2 && (600000 <= rem % 86400000 && rem % 86400000 < 6000000)) {
    formatToUse = 14;
  } else if (w < 10 && rem >= 604800000 && d >= 2 && (100000 <= rem % 86400000 && rem % 86400000 < 600000)) {
    formatToUse = 15;
  } else if (w < 10 && rem >= 604800000 && d >= 2 && (10000 <= rem % 86400000 && rem % 86400000 < 100000)) {
    formatToUse = 16;
  } else if (w < 10 && rem >= 604800000 && d >= 2 && (0 <= rem % 86400000 && rem % 86400000 < 10000)) {
    formatToUse = 17;
  } else if (w < 10 && rem >= 604800000 && d < 2 && (rem % 604800000) % 172800000 && (rem % 604800000) % 172800000 >= 36000000) {
    formatToUse = 18;
  } else if (w < 10 && rem >= 604800000 && d < 2 && (3600000 <= (rem % 604800000) % 172800000 && (rem % 604800000) % 172800000 < 36000000)) {
    formatToUse = 19;
  } else if (w < 10 && rem >= 604800000 && d < 2 && (600000 <= (rem % 604800000) % 172800000 && (rem % 604800000) % 172800000 < 6000000)) {
    formatToUse = 20;
  } else if (w < 10 && rem >= 604800000 && d < 2 && (100000 <= (rem % 604800000) % 172800000 && (rem % 604800000) % 172800000 < 600000)) {
    formatToUse = 21;
  } else if (w < 10 && rem >= 604800000 && d < 2 && (10000 <= (rem % 604800000) % 172800000 && (rem % 604800000) % 172800000 < 100000)) {
    formatToUse = 22;
  } else if (w < 10 && rem >= 604800000 && d < 2 && (0 <= (rem % 604800000) % 172800000 && (rem % 604800000) % 172800000 < 100000)) {
    formatToUse = 23;
  } else if (w == 0 && d >= 3 && h >= 10) {
    formatToUse = 24;
  } else if (w == 0 && d >= 3 && rem % 86400000 >= 6000000) {
    formatToUse = 25;
  } else if (w == 0 && d >= 3 && (600000 <= rem % 86400000 && rem % 86400000 < 6000000)) {
    formatToUse = 26;
  } else if (w == 0 && d >= 3 && (100000 <= rem % 86400000 && rem % 86400000 < 600000)) {
    formatToUse = 27;
  } else if (w == 0 && d >= 3 && (10000 <= rem % 86400000 && rem % 86400000 < 100000)) {
    formatToUse = 28;
  } else if (w == 0 && d >= 3 && (0 <= rem % 86400000 && rem % 86400000 < 10000)) {
    formatToUse = 29;
  } else if (w == 0 && d < 3 && rem >= 36000000) {
    formatToUse = 30;
  } else if (w == 0 && d < 3 && (6000000 <= rem && rem < 36000000)) {
    formatToUse = 31;
  } else if (w == 0 && d < 3 && (600000 <= rem && rem < 6000000)) {
    formatToUse = 32;
  } else if (w == 0 && d < 3 && (100000 <= rem && rem < 600000)) {
    formatToUse = 33;
  } else if (w == 0 && d < 3 && (10000 <= rem && rem < 100000)) {
    formatToUse = 34;
  } else if (w == 0 && d < 3 && (5000 <= rem && rem < 10000)) {
    formatToUse = 35;
  } else if (w == 0 && d < 3 && (0 <= rem && rem < 5000)) {
    formatToUse = 36;
  }
  sizeToUse = formatToUse;
  f1 = formats[formatToUse];
  document.getElementById("time").innerHTML = f1;
  if (rem > 0) {
    document.getElementById("time").style.fontSize = sizes[sizeToUse] + "px";
  }
}, 0);
function switchMode() {
  document.getElementById("mode").value = localStorage.getItem("mode");
  switch (localStorage.getItem("mode")) {
    case "date":
      mode = 1;
      break;
    case "timer":
      var timer = {hr:document.getElementById("h").value, min:document.getElementById("m").value, sec:document.getElementById("s").value};
      time = eval((timer.hr * 3600000) + (timer.min * 60000) + (timer.sec * 1000));
      end = new Date().getTime() + time;
  }
}
function changeMode() {
  mode = document.getElementById("mode").value;
  localStorage.setItem("mode", mode);
  switch (localStorage.getItem("mode")) {
    case "date":
      mode = 1;
      break;
    case "timer":
      var timer = {hr:document.getElementById("h").value, min:document.getElementById("m").value, sec:document.getElementById("s").value};
      time = eval((timer.hr * 3600000) + (timer.min * 60000) + (timer.sec * 1000));
      end = new Date().getTime() + time;
  }
}
