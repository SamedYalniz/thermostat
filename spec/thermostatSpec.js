describe("Thermostat", function() {
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it ("starts at 20 degrees", function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it ("increase the temperature by pushing the up button",function() {
      thermostat.tempUp();
      expect(thermostat.temperature()).toEqual(21);
  });

  it ("decreases the temperature", function() {
    thermostat.tempDown();
    expect(thermostat.temperature()).toEqual(19);
  })

  it ("has a minimum temperature of 10 degrees", function() {
    for(var i = 1; i <= 10; i++) {
      thermostat.tempDown();
    }
    thermostat.tempDown();
    expect(thermostat.temperature()).toEqual(10);
  })

});
