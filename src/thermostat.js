function Thermostat() {
  this.temp = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 25;


};

Thermostat.prototype = {
  tempUp: function() {
    if (this.temp < this.MAX_TEMP)
    this.temp += 1;
  },
  tempDown: function() {
    if (this.temp > this.MIN_TEMP ) {
      this.temp--;
    }
  },

  switchPSMOn: function() {
    this.MAX_TEMP = 25;
  },

  switchPSMOff: function() {
    this.MAX_TEMP = 32;
  },

}
