

// wrapping js in init fn to insure
// DOMContentLoaded 
const init=() => {

  const minus=document.getElementById("minus"),
    plus=document.getElementById("plus"),
    heart=document.getElementById("heart"),
    pause=document.getElementById("pause")

  let count=0
  function myTimer() {
    count+=1;
    // display the current time
    let time=count.toString();
    console.log(time);
    return document.querySelector('#counter').textContent=time
  }

  let interval=setInterval(myTimer,1000);

  // add  button event listners
  minus.addEventListener('click',minusOneTimer);
  plus.addEventListener('click',plusOneTimer);
  heart.addEventListener('click',pauseTimer);
  pause.addEventListener('click',pauseTimer);
  resume.addEventListener('click',resumeTimer);

  function pauseTimer() {
    clearInterval(interval);
    pause.style.display="none";
    resume.style.display="inline-block";
  }
  function resumeTimer() {
    pause.style.display="inline-block";
    resume.style.display="none";
    interval=setInterval(myTimer,1000);
  }
  function plusOneTimer() {
    count+=2;
    // display the current time
    let time=count.toString();
    console.log(time);
    return document.querySelector('#counter').textContent=time
  }
  function minusOneTimer() {
    count-=1;
    // display the current time
    let time=count.toString();
    console.log(time);
    return document.querySelector('#counter').textContent=time
  }


}


document.addEventListener("DOMContentLoaded",init);



