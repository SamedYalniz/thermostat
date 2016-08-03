thermostat = new Thermostat();
  $(document).ready(function() {
      $("#up").click(function( event) {
        thermostat.tempUp();
        $('#temperature').empty();
        $('#temperature').append(thermostat.getCurrentTemp());
        alert("The temperature is: " + thermostat.getCurrentTemp());
      });
      $("#down").click(function(event){
        thermostat.tempDown();
        alert("The temperature is: " + thermostat.getCurrentTemp());
      });
      $("#switchPSMOn").click(function(event) {
        thermostat.switchPSMOn();
        alert("Is the power saving mode on? " + thermostat.isPowerSavingModeOn());
      });
      $("#switchPSMOff").click(function(event) {
        thermostat.switchPSMOff();
        alert("Is the power saving mode on?" + thermostat.isPowerSavingModeOn());
      });
      $("#resetTemp").click(function(event) {
        thermostat.resetTemp();
        alert("The temp is now : " + thermostat.getCurrentTemp());
      });

  })
