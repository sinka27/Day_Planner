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


