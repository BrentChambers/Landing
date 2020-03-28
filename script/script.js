/*jshint esversion: 6 */
(function(){
  "use strict";

  //Menu buton
  let menuButton = document.querySelector('.menu-button');
  let menuScreen = document.querySelector('.menu');
  menuButton.addEventListener('click', function(){
    menuScreen.classList.toggle('displayFullScreen');
  });




  setInterval(function(){
    let timeDisplay = document.querySelector('#time');
    let dateDisplay = document.querySelector('#date');

    let d = new Date();
    let h = d.getHours();
    // let m = d.getMinutes();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let amPm = h >= 12 ? 'PM' : 'AM';

    let day = d.getDay() + 1;
    let month = d.getMonth() + 1;
    let monthDate = d.getDate();
    let year = d.getFullYear();

    //Removing military time
    if(h > 12) h-= 12;

    //Midnight is 12 and not 0.
    if(h == 0) h = 12;

    //Padding minute number
    if(m < 10){
      m = String(m).padStart(2, 0);
    }

    //Convert day number to name
    switch(day){
      case 1:
      day = 'Sunday';
      break;

      case 2:
      day = 'Monday';
      break;

      case 3:
      day = 'Tuesday';
      break;

      case 4:
      day = 'Wednesday';
      break;

      case 5:
      day = 'Thursday';
      break;

      case 6:
      day = 'Friday';
      break;

      case 7:
      day = 'Saturday';
      break;
    }


    //Convert month number to name.
    switch(month){
      case 1:
      month = "January";
      break;

      case 2:
      month = "February";
      break;

      case 3:
      month = "March";
      break;

      case 4:
      month = "April";
      break;

      case 5:
      month = "May";
      break;

      case 6:
      month = "June";
      break;

      case 7:
      month = "July";
      break;

      case 8:
      month = "August";
      break;

      case 9:
      month = "September";
      break;

      case 10:
      month = "October";
      break;

      case 11:
      month = "November";
      break;

      case 12:
      month = "December";
      break;
    }

    //Assemble time and date and display to the DOM
    timeDisplay.textContent = `${h}:${m}:${s} ${amPm}`;
    dateDisplay.textContent = `${day}, ${month} ${monthDate}, ${year}`;

  }, 1000);
})();
