$(document).ready(initialize);

  function initialize(){

    var date = [];
    $('#submit').click(function(){
      var bday = $('#bday').val();
      date = bday.split('-');
      var year = date[0];
      console.log(bday);
      console.log(date);
      console.log(year);

      var regAge;
      if(year <= 1937){
        regAge = '65 years and 0 months';
      }else if(year == 1938){
        regAge = '65 years and 2 months';
      }else if(year == 1939){
        regAge = '65 years and 4 months';
      }else if(year == 1940){
        regAge = '65 years and 6 months';
      }else if(year == 1941){
        regAge = '65 years and 8 months';
      }else if(year == 1942){
        regAge = '65 years and 10 months';
      }else if(year >= 1943 && year <= 1954){
        regAge = '66 years and 0 months';
      }else if(year == 1955){
        regAge = '66 years and 2 months';
      }else if(year == 1956){
        regAge = '66 years and 4 months';
      }else if(year == 1957){
        regAge = '66 years and 6 months';
      }else if(year == 1958){
        regAge = '66 years and 8 months';
      }else if(year == 1959){
        regAge = '66 years and 10 months';
      }else if(year >= 1960){
        regAge = '67 years and 0 months';
      }else{
        alert('something is happening');
      }
      console.log(regAge);
      $('#regAge').html(regAge);
    });

  }
