console.log('olá')

const hourEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const segundsEl = document.querySelector('.segunds');
const  ampm = document.getElementById('ampm');

function updateClock(){
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let ampm = 'PM'

   if(h > 12){
    h = h - 12
    ampm = 'AM'
   }

   h = h < 10 ? "0" +h: h;
   m= m < 10 ? "0" +m: m;
   s = s < 10 ? "0" +s: s;


 hourEl.innerHTML = h;
 minutesEl.innerHTML = m;
 segundsEl.innerHTML = s;
 ampm,(innerHTML=ampm)
 setTimeout( () =>{

 updateClock();

 },1000);



}
updateClock();