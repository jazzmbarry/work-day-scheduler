// Get current day and set to display
var dayFormat = moment().format("[Today is] dddd, MMMM Do YYYY")
$("#currentDay").html(dayFormat)

// Get item from local storage if any
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));

$(document).ready(function() {
    $(".saveBtn").on("click", function(){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text)
    })
    
    function timeTracker () {
        // Get current hour
        var timeFormat = moment().hour() 
        
        $(".time-block").each(function (){
            var timeBlock = parseInt($(this)
            .attr("class")
            .split(" ")[1])
            console.log(timeBlock)
            
            if (timeFormat < timeBlock) {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).removeClass("hour")
                $(this).addClass("future");
            } else if (timeFormat === timeBlock) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).addClass("hour");
            } else if (timeFormat > timeBlock) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).removeClass("hour");
                $(this).addClass("past");    
            }
        }
        )
    }
    timeTracker()
})

