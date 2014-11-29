$(document).ready(initialize);

  function initialize(){
    //takes the date input, splits into an array year0, month1, day2
    var date = [];
    $('#submit').click(function(){
      var bday = $('#bday').val();
      date = bday.split('-');
      var year = date[0];
      var month = date[1];
      var day = date[2];

      //depending on the year entered, displays full retirement age
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
      $('#regAge').html(regAge);

      //calculate and display the date of early retirement 62years old
      var early = (year *1) + 62;
      early = month + '/' + day + '/' + early;
      $('#early').html(early);

      //calculate and display the date of full retirement year0 month3
      var fullAge = regAge.split(' ');
      fullYear = fullAge[0] * 1;
      fullMonth = fullAge[3] * 1;
      fullYear += (year * 1);
      fullMonth += (month * 1);
      if(fullMonth > 12){
        fullMonth = fullMonth - 12;
        fullYear += 1
      }
      var full = fullMonth + '/' + day + '/' + fullYear;
      $('#full').html(full);

    });

  }
