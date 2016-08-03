function Thermostat() {
  this.temp = 20;
};

Thermostat.prototype = {
  tempUp: function() {
    this.temp += 1;
  },
  tempDown: function() {
    this.temp--;
  },
}
