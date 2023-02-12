'use strict'

const $=document.querySelector.bind(document);
const time=document.getElementsByClassName(".time");
const backgroundImage=document.getElementsByClassName(".bg-Img")



function clickMe(){
  setInterval(
  function getCurrentTime(){//function to obtain time ,day, date info and put into HTMl
      let currentTimeDate = new Date();
      var day= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

      let currentDay = day[currentTimeDate.getDay()];
      let currentDate  = currentTimeDate.getDate();
      let currentMonth = month[currentTimeDate.getMonth()];
      let currentYear = currentTimeDate.getFullYear();
      let fullDate = ` ${currentDay} ${currentDate} ${currentMonth}, ${currentYear}`;
      $(".time").classList.add("active");
      $(".time").innerHTML =`[${fullDate} ] ` + currentTimeDate.toLocaleTimeString();
  });

}

function clickAgain(){
  document.body.style.background="black"
}






