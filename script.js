const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");

 let clock = setInterval(() => {
     let hr = new Date().getHours();
     let mn = new Date().getMinutes();
     let sc = new Date().getSeconds();
     
     if(hr < 10) {
         hr = "0" + hr;
     }
     if(mn < 10) {
         mn = "0" + mn;
     }
     if(sc < 10) {
         sc = "0" + sc;
     }

     hour.textContent = hr;
     minute.textContent = mn;
     seconds.textContent = sc;
 }, 1000);
