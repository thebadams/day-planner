//grab meetings from local storage
var meetings = JSON.parse(localStorage.getItem("savedMeetings") || "[]")

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
});

//information logic
//event class
class plannedEvent {
    constructor(tName, tTime, tDay){
        this.name = tName,
        this.time = tTime,
        this.date = tDay
    }
}

timeBlocks.on("click", ".save-btn i", saveData);

function saveData(event){
   var eventValue = $($(event.target).parent().siblings()[1]).val()
    eventTime = $($(event.target).parent().parent()).attr("data-hour");

    var scheduledEvent = new plannedEvent (eventValue, eventTime, currentDayValue);

    meetings.push(scheduledEvent);
    localStorage.setItem("savedMeetings", JSON.stringify(meetings));
}

function sortMeetings() {
    meetings.sort(function(a, b){
      return  parseInt(a.time) - parseInt(b.time)
    })
}

// function displayMeetings() {
//     meetings.each(function(i){
//         if(this.date === currentDayValue){
            
//         }
//     })
// }


