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
      $("#resetTemp").click(function(event) {
        thermostat.resetTemp();
        updateTemperature();
        color();
      });
      color();


    $("#getTemp").click(function(event) {
      event.preventDefault();
      var city = $("#chosencity").val();
      displayWeather(city);
      $('#city').text(city + " is: ");
      });



   $('.switch-input').prop('checked', true);
   $(".switch-input").change(function() {
     if ($('.switch-input').is(':checked')) {
       thermostat.switchPSMon();
     } else {
     thermostat.switchPSMOff();
     }
   });










})

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemp());
  }


  function color() {
    var usage = thermostat.getUsage();
    if (usage === "low-usage") {
      $('#color').css("background-color", "#7FFF00");
    }
    else if (usage==="medium-usage") {
      $('#color').css("background-color", "yellow");
    }
    else {
      $('#color').css("background-color", "#FF6348");
    }

  }

  function displayWeather(city) {
     var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city;
     var units = "&units=metric";
     var key = "&APPID=bc521560dfd16e712385552b20d190b6";
     $.get(url + units + key, function(data) {
       temp = data.main.temp;
       $('#currentTemp').text(temp);
   });
 };
