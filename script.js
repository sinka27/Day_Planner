//Global variables
var inputGroupEl = $(".form-control");
var hourEl = $(".hour");
var currentHour = moment().format("HH");

//Displaying current day and the date at the top of calendar
var today = moment();
$("#currentDay").text(today.format("dddd , MMMM Do YYYY "));

//Add event listener for save button
$(".saveBtn").each(function (index) {
  $(this).on("click", function () {
    var plan = inputGroupEl.eq(index).val();
    //saving user data to local storage
    localStorage.setItem(index, plan);
  });
});
//upon reload displaying the previously saved user data
for (var i = 0; i < inputGroupEl.length; i++) {
  inputGroupEl.eq(i).val(localStorage.getItem(i));
}

//Declaring function for identifying Past, Present and Future Time Zones
function timeZone() {
  for (var i = 0; i < hourEl.length; i++) {
    var hour = hourEl.eq(i).text();
    //converting time from 12hr format to 24hr format for comparison
    var convertedHour = moment(hour, "hh:mm a").format("HH");

    //conditional statement for past,present and future
    if (convertedHour < currentHour) {
      //past
      inputGroupEl.eq(i).addClass("past");
    } else if (convertedHour === currentHour) {
      //present
      inputGroupEl.eq(i).addClass("present");
    } else {
      //future
      inputGroupEl.eq(i).addClass("future");
    }
  }
}
//calling function
timeZone();
