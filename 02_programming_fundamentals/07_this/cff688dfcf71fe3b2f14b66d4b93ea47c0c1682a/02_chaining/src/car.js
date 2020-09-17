const car = {
  start: function () {
    this.speed = 0;
    this.minutes = 0;
    this.distance = 0;
    return this;
  },

  changeSpeed: function (speed) {
    this.speed = speed;

    return this;
  },

  drive: function (minutes) {
    this.minutes = minutes;
    this.distance += (this.speed*this.minutes/60);
    return this;
  },

  showDistance: function () {
    console.log (this.distance +" Km");
    return this; 
  },
};

module.exports = car;