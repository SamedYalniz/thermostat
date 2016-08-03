describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at twenty degrees', function() {
    expect(thermostat.temp).toEqual(20);
  });

  it('increases temperature when Up is called', function() {
    thermostat.tempUp();
    expect(thermostat.temp).toEqual(21);
  })

  it('deecreases temperature when Down is called', function() {
    thermostat.tempDown();
    expect(thermostat.temp).toEqual(19);
  })
  it ("has a minimum temperature of 10 degrees", function() {
    for (var i=0; i <=10; i++) {
      thermostat.tempDown();
    }
    expect(thermostat.temp).toEqual(10);

  })
  describe ("power saving mode is on", function () {
    it ("has a maximum temperature of 25 degrees", function () {
      thermostat.switchPSMOn();
      expect(thermostat.MAX_TEMP).toEqual(25);
    })
    it ("cannot increase higher than the max temp",function() {
      for (var i=0; i <= 5; i++) {
        thermostat.tempUp();
      }
      expect(thermostat.temp).toEqual(25);
    })
  })
  describe ("power saving mode is off", function() {
    it("has a maxmum temperature of 32 degrees", function() {
      thermostat.switchPSMOff();
      expect(thermostat.MAX_TEMP).toEqual(32);
    })
    it("cannot increase higher than the max temp",function(){
      thermostat.switchPSMOff();
      for (var i=0; i<= 12; i++) {
        thermostat.tempUp();
      }
      expect(thermostat.temp).toEqual(32);
    })
  })

})
