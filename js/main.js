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

      if(year <= 1937){
        alert('your retirement age is 65 years and 0 months');
      }else if(year == 1938){
        alert('your retirement age is 65 years and 2 months');
      }else if(year == 1939){
        alert('your retirement age is 65 years and 4 months');
      }else if(year == 1940){
        alert('your retirement age is 65 years and 6 months');
      }else if(year == 1941){
        alert('your retirement age is 65 years and 8 months');
      }else if(year == 1942){
        alert('your retirement age is 65 years and 10 months');
      }else if(year >= 1943 && year <= 1954){
        alert('your retirement age is 66 years and 0 months');
      }else if(year == 1955){
        alert('your retirement age is 66 years and 2 months');
      }else if(year == 1956){
        alert('your retirement age is 66 years and 4 months');
      }else if(year == 1957){
        alert('your retirement age is 66 years and 6 months');
      }else if(year == 1958){
        alert('your retirement age is 66 years and 8 months');
      }else if(year == 1959){
        alert('your retirement age is 66 years and 10 months');
      }else if(year >= 1960){
        alert('your retirement age is 67 years and 0 months');
      }else{
        alert('something is happening');
      }
    });

  }
