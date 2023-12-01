// const btnEl = document.querySelectorAll('button');

// var advancedFormat = require('dayjs/plugin/advancedFormat');
// dayjs.extend(advancedFormat);
let today = dayjs().format('dddd, MMMM D');

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// to satisfy the above requirement, do I use window.on("load") or document.ready?
$(document).ready(function() {
  // set current Date above planner table
  $('#currentDay').text(today);
  
  // get localstorage info and display in appropriate textarea
  $('textarea').each(function() {
    let hourId = $(this).parent().attr('id');
    let activityText = localStorage.getItem(hourId + 'activity');
    $(this).val(activityText);
  })
});

// function that adds button eventlistener and saves textarea (aka activities) to local storage
$(function () {
  $('button').on('click', function(ev) {
    let hourId = $(this).parent().attr('id');
    let activity = $('#' + hourId).children('textarea').val();
    localStorage.setItem(hourId + 'activity', activity);
  });




 
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
