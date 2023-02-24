let time = document.getElementById("time");
class Clock {
  constructor(template) {
    this.template = template;
  }
  render = () => {
    let date = new Date();

    let hours = date.getHours();
    if (hours > 12) hours = "0" + (hours - 12);
    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);
    console.log(output);
    time.innerHTML = output;
  };
  start = () => {
    this.render();
    setInterval(this.render, 1000);
  };
}

let clock = new Clock("h:m:s");
clock.start();
