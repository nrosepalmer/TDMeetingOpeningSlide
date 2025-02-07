function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5fRAXmVO8Vl":
        Script1();
        break;
      case "6EvwROTWzaT":
        Script2();
        break;
      case "6C2oOvOvO3L":
        Script3();
        break;
      case "6lzS9KMSM03":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var currentDate = new Date();
var player = GetPlayer(); // Reference to Articulate Storyline's player object

var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
var year = currentDate.getFullYear();
var today = month + "/" + day + "/" + year;
player.SetVar("CurrentDate", today); // Set the "CurrentDate" variable in Storyline

// Set the target date (June 30, 2025) and pass it to "DateValue"
var futureStorylineDate = new Date("2025-06-30T00:00:00");
var futureDay = futureStorylineDate.getDate();
var futureMonth = futureStorylineDate.getMonth() + 1;
var futureYear = futureStorylineDate.getFullYear();
var futureDateString = futureMonth + "/" + futureDay + "/" + futureYear;
player.SetVar("DateValue", futureDateString); // Set the "DateValue" variable in Storyline

// Calculate and set the countdown
showDiff();

function showDiff() {
  // Calculate the time difference in seconds
  var date1 = currentDate.getTime();
  var date2 = futureStorylineDate.getTime();
  var diff = (date2 - date1) / 1000; // Convert milliseconds to seconds
  diff = Math.abs(Math.floor(diff)); // Ensure the value is positive and rounded down

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(diff / (24 * 60 * 60));
  var leftSec = diff - days * 24 * 60 * 60;

  var hrs = Math.floor(leftSec / (60 * 60));
  leftSec = leftSec - hrs * 60 * 60;

  var min = Math.floor(leftSec / 60);
  leftSec = leftSec - min * 60;

  // Set each time component as a separate Storyline variable, including labels
  player.SetVar("DaysLeft", days + " days");
  player.SetVar("HoursLeft", hrs + " hours");
  player.SetVar("MinutesLeft", min + " minutes");
  player.SetVar("SecondsLeft", leftSec + " seconds");
}
}

window.Script2 = function()
{
  var currentDate = new Date();
var player = GetPlayer(); // Reference to Articulate Storyline's player object

var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
var year = currentDate.getFullYear();
var today = month + "/" + day + "/" + year;
player.SetVar("CurrentDate", today); // Set the "CurrentDate" variable in Storyline

// Set the target date (June 30, 2025) and pass it to "DateValue"
var futureStorylineDate = new Date("2025-06-30T00:00:00");
var futureDay = futureStorylineDate.getDate();
var futureMonth = futureStorylineDate.getMonth() + 1;
var futureYear = futureStorylineDate.getFullYear();
var futureDateString = futureMonth + "/" + futureDay + "/" + futureYear;
player.SetVar("DateValue", futureDateString); // Set the "DateValue" variable in Storyline

// Calculate and set the countdown
showDiff();

function showDiff() {
  // Calculate the time difference in seconds
  var date1 = currentDate.getTime();
  var date2 = futureStorylineDate.getTime();
  var diff = (date2 - date1) / 1000; // Convert milliseconds to seconds
  diff = Math.abs(Math.floor(diff)); // Ensure the value is positive and rounded down

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(diff / (24 * 60 * 60));
  var leftSec = diff - days * 24 * 60 * 60;

  var hrs = Math.floor(leftSec / (60 * 60));
  leftSec = leftSec - hrs * 60 * 60;

  var min = Math.floor(leftSec / 60);
  leftSec = leftSec - min * 60;

  // Set each time component as a separate Storyline variable, including labels
  player.SetVar("DaysLeft", days + " days");
  player.SetVar("HoursLeft", hrs + " hours");
  player.SetVar("MinutesLeft", min + " minutes");
  player.SetVar("SecondsLeft", leftSec + " seconds");
}
}

window.Script3 = function()
{
  var currentDate = new Date();
var player = GetPlayer(); // Reference to Articulate Storyline's player object

var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
var year = currentDate.getFullYear();
var today = month + "/" + day + "/" + year;
player.SetVar("CurrentDate", today); // Set the "CurrentDate" variable in Storyline

// Set the target date (June 30, 2025) and pass it to "DateValue"
var futureStorylineDate = new Date("2025-06-30T00:00:00");
var futureDay = futureStorylineDate.getDate();
var futureMonth = futureStorylineDate.getMonth() + 1;
var futureYear = futureStorylineDate.getFullYear();
var futureDateString = futureMonth + "/" + futureDay + "/" + futureYear;
player.SetVar("DateValue", futureDateString); // Set the "DateValue" variable in Storyline

// Calculate and set the countdown
showDiff();

function showDiff() {
  // Calculate the time difference in seconds
  var date1 = currentDate.getTime();
  var date2 = futureStorylineDate.getTime();
  var diff = (date2 - date1) / 1000; // Convert milliseconds to seconds
  diff = Math.abs(Math.floor(diff)); // Ensure the value is positive and rounded down

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(diff / (24 * 60 * 60));
  var leftSec = diff - days * 24 * 60 * 60;

  var hrs = Math.floor(leftSec / (60 * 60));
  leftSec = leftSec - hrs * 60 * 60;

  var min = Math.floor(leftSec / 60);
  leftSec = leftSec - min * 60;

  // Set each time component as a separate Storyline variable, including labels
  player.SetVar("DaysLeft", days + " days");
  player.SetVar("HoursLeft", hrs + " hours");
  player.SetVar("MinutesLeft", min + " minutes");
  player.SetVar("SecondsLeft", leftSec + " seconds");
}
}

window.Script4 = function()
{
  var currentDate = new Date();
var player = GetPlayer(); // Reference to Articulate Storyline's player object

var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
var year = currentDate.getFullYear();
var today = month + "/" + day + "/" + year;
player.SetVar("CurrentDate", today); // Set the "CurrentDate" variable in Storyline

// Set the target date (June 30, 2025) and pass it to "DateValue"
var futureStorylineDate = new Date("2025-06-30T00:00:00");
var futureDay = futureStorylineDate.getDate();
var futureMonth = futureStorylineDate.getMonth() + 1;
var futureYear = futureStorylineDate.getFullYear();
var futureDateString = futureMonth + "/" + futureDay + "/" + futureYear;
player.SetVar("DateValue", futureDateString); // Set the "DateValue" variable in Storyline

// Calculate and set the countdown
showDiff();

function showDiff() {
  // Calculate the time difference in seconds
  var date1 = currentDate.getTime();
  var date2 = futureStorylineDate.getTime();
  var diff = (date2 - date1) / 1000; // Convert milliseconds to seconds
  diff = Math.abs(Math.floor(diff)); // Ensure the value is positive and rounded down

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(diff / (24 * 60 * 60));
  var leftSec = diff - days * 24 * 60 * 60;

  var hrs = Math.floor(leftSec / (60 * 60));
  leftSec = leftSec - hrs * 60 * 60;

  var min = Math.floor(leftSec / 60);
  leftSec = leftSec - min * 60;

  // Set each time component as a separate Storyline variable, including labels
  player.SetVar("DaysLeft", days + " days");
  player.SetVar("HoursLeft", hrs + " hours");
  player.SetVar("MinutesLeft", min + " minutes");
  player.SetVar("SecondsLeft", leftSec + " seconds");
}
}

};
