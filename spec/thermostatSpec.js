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

})
