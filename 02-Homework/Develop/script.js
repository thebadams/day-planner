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

//check what the current hour is -> compare it to data-hours and add "past", "present", "future" classes based upon result

var timeBlocks = $(".time-block");
timeBlocks.each(function(){
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

function newFunction() {
    return $(".time-block");
}

function saveData(event){
   var eventValue = $($(event.target).parent().siblings()[1]).val()
   var eventTime = $($(event.target).parent().parent()).attr("data-hour");

    var scheduledEvent = new plannedEvent (eventValue, eventTime, currentDayValue);

    meetings.push(scheduledEvent);
    localStorage.setItem("savedMeetings", JSON.stringify(meetings));
}

function displaySavedMeetings(){
var todaysMeetings = [];
var todaysTimeBlocks = [];
// get current day's meetings
    for(var i = 0; i < meetings.length; i++) {
        if(meetings[i].date === currentDayValue){
            todaysMeetings.push(meetings[i]);//push 
            //sort todaysMeetings by time
            todaysMeetings.sort((a, b) => a.time - b.time)
        }
        for(var j = 0; j < timeBlocks.length; j++){
            if(meetings[i].time == timeBlocks[i].dataset.hour) {
                todaysTimeBlocks.push(timeBlocks[i])
            }

        }
        

    }

    console.log("Todays Time Blocks");
    console.log(todaysTimeBlocks)


}
// get current day's meeting times
    //take a look at the timeBlocks.dataset.hour values
        //if the dataset.hour values match meeting times, push to an array
        //run through the array and apply textContent to those html elements
// get current day meeting names







