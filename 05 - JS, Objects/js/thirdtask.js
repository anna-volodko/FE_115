const time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  showTime() {
    const addZero = (n) => (n < 10 ? `0${n}` : n);
    console.log(
      `Current time - ${addZero(this.hours)}:${addZero(this.minutes)}:${addZero(
        this.seconds
      )}`
    );
  },
  addSeconds(seconds) {
    const totalSeconds =
      this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
    this.hours = Math.floor(totalSeconds / 3600) % 24;
    this.minutes = Math.floor((totalSeconds % 3600) / 60);
    this.seconds = totalSeconds % 60;
  },
  addMinutes(minutes) {
    this.addSeconds(minutes * 60);
  },
  addHours(hours) {
    this.addSeconds(hours * 3600);
  },
  changeTime() {
    const userSeconds = parseInt(prompt("Введіть кількість секунд"));
    if (!isNaN(userSeconds)) {
      this.addSeconds(userSeconds);
      this.showTime();
    } else {
      console.log("Це має бути число, введи число");
      return;
    }

    const userMinutes = parseInt(prompt("Введіть кількість хвилин"));
    if (!isNaN(userMinutes)) {
      this.addMinutes(userMinutes);
      this.showTime();
    } else {
      console.log("Це має бути число, введи число");
      return;
    }

    const userHours = parseInt(prompt("Введіть кількість годин"));
    if (!isNaN(userHours)) {
      this.addHours(userHours);
      this.showTime();
    } else {
      console.log("Це має бути число, введи число");
    }
  },
};
// 1 hour = 60 min = 3600 sec
// 00:00:00 - 00:00:35
// 00:00:00 - 00:20:20
// 00:00:00 - 05:12:10
