//Global variables
var inputGroupEl = $(".form-control");
var hourEl = $(".hour");
var currentHour = moment().format("HH");

//Displaying current day and the date at the top of calendar
var today = moment();
$("#currentDay").text(today.format("dddd , MMMM Do YYYY "));

