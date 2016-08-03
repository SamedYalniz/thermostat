thermostat = new Thermostat();
  $(document).ready(function() {
      $("#up").click(function( event) {
        thermostat.tempUp();
        updateTemperature();
        color();

      });
      $("#down").click(function(event){
        thermostat.tempDown();
        updateTemperature();
        color();

      });
      $("#switchPSMOn").click(function(event) {
        thermostat.switchPSMOn();
        PSM();
      });
      $("#switchPSMOff").click(function(event) {
        thermostat.switchPSMOff();
        PSM();
      });
      $("#resetTemp").click(function(event) {
        thermostat.resetTemp();
        updateTemperature();
        color();
      });
      $("#power-saving-status").append(function(){
        PSM();
      });
      color();



  })

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemp());
  }

 function PSM() {
   $("#power-saving-status").text(function(){
     if (thermostat.isPowerSavingModeOn()) {
     return  "ON"
   } else { return "OFF"}
   });
  }

  function color() {
    var usage = thermostat.getUsage();
    if (usage === "low-usage") {
      $('#color').css("background-color", "green");
    }
    else if (usage==="medium-usage") {
      $('#color').css("background-color", "yellow");
    }
    else {
      $('#color').css("background-color", "red");
    }

  }
