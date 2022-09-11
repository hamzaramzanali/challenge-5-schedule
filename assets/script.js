var containerEl = document.querySelector('.container');
var currentdayEl = document.querySelector('.lead')
var textareainputEl = document.querySelector('.description')

for (var i = 0; i < 9; i++){
    var rowEl = document.createElement('div');
var hourEl = document.createElement('div');
var textareaEl = document.createElement('textarea');
var buttonEl = document.createElement('button');

rowEl.setAttribute('class', 'row time-block');
hourEl.setAttribute('class', 'hour col-md-1');
textareaEl.setAttribute('class', 'past description col-md-10');
buttonEl.setAttribute('class', 'saveBtn col-md-1');

rowEl.appendChild(hourEl);
rowEl.appendChild(textareaEl);
rowEl.appendChild(buttonEl);
containerEl.appendChild(rowEl);

buttonEl.textContent = "Click to Save";

hourEl.textContent = moment().hour(i + 9).format("hA");
}

var Date = moment().format("dddd MMM Do");
$("#currentDay").text(Date);

buttonEl.addEventListener("click", function() {
    
    var user = {
      hour1: textareainputEl.value.trim(),
    };
  
    localStorage.setItem("user", JSON.stringify(user));
    
  });

  var checkTime = function () {
    var hour = $(".hour").text().trim();

    var time = moment(hour, "LT");
    console.log(time)

    $(".hour").removeClass(".present .past .future");

    if (moment().isAfter(time)) {
        $(".hour").addClass(".past");
    } else if (moment().isBefore(time)) {
        $(".hour").addClass(".future");
    } else {
        $(".hour").addClass(".present");
    }
}

checkTime();
