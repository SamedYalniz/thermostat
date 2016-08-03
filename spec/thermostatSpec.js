'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has power saving enabled by default', function() {
     expect(thermostat.isPowerSavingModeOn()).toEqual(true);
  })

  it('starts at twenty degrees', function() {
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  it('increases temperature when Up is called', function() {
    thermostat.tempUp();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  })

  it('deecreases temperature when Down is called', function() {
    thermostat.tempDown();
    expect(thermostat.getCurrentTemp()).toEqual(19);
  })
  it ("has a minimum temperature of 10 degrees", function() {
    for (var i=0; i <=10; i++) {
      thermostat.tempDown();
    }
    expect(thermostat.getCurrentTemp()).toEqual(10);

  })

  it('has a buttom to reset the temperature', function() {
    thermostat.tempUp();
    thermostat.resetTemp();
    expect(thermostat.getCurrentTemp()).toEqual(20);
  })

    it('the interface is colored by temperature', function() {
      for (var i = 0; i < 4; i++) {
        thermostat.tempDown();
      }
      thermostat.color();
      expect(thermostat.color).toEqual('green');
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
      expect(thermostat.getCurrentTemp()).toEqual(25);
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
      expect(thermostat.getCurrentTemp()).toEqual(32);
    })
  })

})
