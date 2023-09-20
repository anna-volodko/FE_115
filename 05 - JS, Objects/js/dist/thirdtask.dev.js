"use strict";

var time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  showTime: function showTime() {
    var addZero = function addZero(n) {
      return n < 10 ? "0".concat(n) : n;
    };

    console.log("Current time - ".concat(addZero(this.hours), ":").concat(addZero(this.minutes), ":").concat(addZero(this.seconds)));
  },
  addSeconds: function addSeconds(seconds) {
    var totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
    this.hours = Math.floor(totalSeconds / 3600) % 24;
    this.minutes = Math.floor(totalSeconds % 3600 / 60);
    this.seconds = totalSeconds % 60;
  },
  addMinutes: function addMinutes(minutes) {
    this.addSeconds(minutes * 60);
  },
  addHours: function addHours(hours) {
    this.addSeconds(hours * 3600);
  },
  changeTime: function changeTime() {
    var userSeconds = parseInt(prompt("Введіть кількість секунд"));

    if (!isNaN(userSeconds)) {
      this.addSeconds(userSeconds);
      this.showTime();
    } else {
      console.log("Це має бути число, введи число");
      return;
    }

    var userMinutes = parseInt(prompt("Введіть кількість хвилин"));

    if (!isNaN(userMinutes)) {
      this.addMinutes(userMinutes);
      this.showTime();
    } else {
      console.log("Це має бути число, введи число");
      return;
    }

    var userHours = parseInt(prompt("Введіть кількість годин"));

    if (!isNaN(userHours)) {
      this.addHours(userHours);
      this.showTime();
    } else {
      console.log("Це має бути число, введи число");
    }
  }
}; // 1 hour = 60 min = 3600 sec
// 00:00:00 - 00:00:35
// 00:00:00 - 00:20:20
// 00:00:00 - 05:12:10