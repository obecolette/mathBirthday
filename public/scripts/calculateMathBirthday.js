// console.log("calculateMathBirthday.js")

(function() {

  var calculate = function() {
  var day = $('#day').val();
  var month = $('#month').val() - 1;
  var year = $('#year').val();
  // console.log(day, month, year);

  var birthday = new Date(year, month, day);
  var birthdayUnixTime = birthday.getTime();
  // console.log("birthday", birthday.getTime());

  var currentDate = new Date();
  var currentUnixTime = currentDate.getTime();
  // console.log("current unix time", currentUnixTime);

  var dayLength = 86400 * 1000; // a day in milliseconds
  var timeAlive = (currentUnixTime - birthdayUnixTime)/dayLength;
  // console.log("time alive in days", timeAlive);

  var mathBirthday = 1;
  var exp = 0;

  while (timeAlive > Math.pow(10, exp) ) {

    exp = exp+1;
    mathBirthday = mathBirthday * 10;
  }
  // console.log(exp);

  var nextBirthday = (dayLength * Math.pow(10, exp)) + birthdayUnixTime;
  // console.log("next bd", nextBirthday);

  var dateNextBirthday = new Date(nextBirthday);
  // console.log(dateNextBirthday);

  $('#math-birthday').empty().append(mathBirthday);
  $('#next-date').empty().append(dateNextBirthday.getMonth()+1 + "/" + dateNextBirthday.getDate() + "/" + dateNextBirthday.getFullYear() + "!");
  // console.log("loop ended, next birthday is ", nextBirthday);

  };

  $('button').on("click", function(e) {
  e.preventDefault();
  calculate();
  });

}());

