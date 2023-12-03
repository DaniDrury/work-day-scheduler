let today = dayjs().format('dddd, MMMM D');
let currentHour = dayjs().hour();

$(document).ready(function() {
  // set current Date at bottom of header
  $('#currentDay').text(today);
  
  // forEach loop for textarea elements - sets local storage date & bkgrnd color based on hour
  $('textarea').each(function() {
    // Check localStorage for saved data and set in appropriate textarea box
    let hourId = $(this).parent().attr('id');
    let activityText = localStorage.getItem(hourId + 'activity');
    $(this).val(activityText);
    // compare the time-block of the textarea to the current hour of the day and apply appropriate bkgrnd color
    if (hourId == currentHour) {
      $(this).parent().addClass("present");
    } else if (hourId < currentHour) {
      $(this).parent().addClass("past");
    } else {
      $(this).parent().addClass("future");
    }
  });
});

// function that adds button eventlistener and saves textarea (aka activities) to local storage
$(function () {
  $('button').on('click', function(ev) {
    let hourId = $(this).parent().attr('id');
    let activity = $('#' + hourId).children('textarea').val();
    localStorage.setItem(hourId + 'activity', activity);
    $('#savedMsg').text('Appointment Saved to Local Storage');
  });
});
