$(document).ready(function(){
    // Update greeting
    updateGreeting();
    // Update datetime every second
    setInterval(updateDateTime, 1000);
  });
  
  function updateGreeting() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var greeting;
  
    if (currentHour < 12) {
      greeting = 'Selamat Pagi,';
    } else if (currentHour < 18) {
      greeting = 'Selamat Siang,';
    } else {
      greeting = 'Selamat Malam,';
    }
  
    $('#greeting').text(greeting);
  }
  
  function updateDateTime() {
    var currentTime = new Date();
    var formattedDate = formatDate(currentTime);
    var formattedTime = formatTime(currentTime);
  
    $('#currentDateTime').text(formattedDate + ' ' + formattedTime);
  }
  
  function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
  
    return day + '/' + month + '/' + year;
  }
  
  function formatTime(date) {
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
  
    hour = (hour < 10 ? '0' : '') + hour;
    minute = (minute < 10 ? '0' : '') + minute;
    second = (second < 10 ? '0' : '') + second;
  
    return hour + ':' + minute + ':' + second;
  }
  
  