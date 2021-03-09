//grab html elements
var currentDay = $("#current-day");


//current day logic using moment.js
var currentDayValue = moment().format("dddd, MMMM Do");

//set text value to currentDayValue
currentDay.text(currentDayValue);

//current hour logic using moment.js
var currentHour = moment().hour();

//check if current hour is between two times

var timeBlocks = $(".time-block");
var timeBlocks2 = document.querySelectorAll(".time-block");

timeBlocks.each(function(index){
    if(this.dataset.hour == currentHour){
        $(this).addClass("present");
    } else if(this.dataset.hour < currentHour){
        $(this).addClass("past");
    } else if(this.dataset.hour > currentHour){
        $(this).addClass("future");
    }
}
)

var container = $(".container");

container.append("<input type = 'password'>")


