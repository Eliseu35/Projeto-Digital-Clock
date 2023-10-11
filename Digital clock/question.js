




function updateClock(){
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let ampm = 'PM'

    document.querySelector('.hours').innerHTML = `${h}`
    document.querySelector('.minutes').innerHTML = `${m}`
    document.querySelector('.segunds').innerHTML = `${s}`
    document.querySelector('#ampm').innerHTML = `${ampm}`

    if(h > 12){
        h = h - 12
        ampm = 'AM'
       } else{
        "PM"
       }


       setTimeout( () =>{
        
        updateClock();
       
        },1000);
       
      


}


   
 


updateClock();




