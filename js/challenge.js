

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
    //console.log(time);
    return document.querySelector('#counter').textContent=time
  }

  let interval=setInterval(myTimer,1000);
  // add  button event listners
  minus.addEventListener('click',minusOneTimer);
  plus.addEventListener('click',plusOneTimer);
  heart.addEventListener('click',function() {likeTime(count);});
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
    //console.log(time);
    return document.querySelector('#counter').textContent=time
  }
  function minusOneTimer() {
    count-=1;
    // display the current time
    let time=count.toString();
    //console.log(time);
    return document.querySelector('#counter').textContent=time
  }
  let likeCount=1;
  function likeTime(count) {
    let li=document.createElement('li');
    likeCount=1;
    li.className='like'
    li.innerHTML=`
      <span> ${likeCount} like for ${count}</span>`
    // add card to dom
    document.querySelector('ul.likes').appendChild(li)
  }

  document.querySelector('#comment-form').addEventListener('submit',handleSubmit)

  let zcomment

  function handleSubmit(e) {
    e.preventDefault()
    let commentObj={
      zcomment: e.target.comment.value,
    }
    // grab form data update html comment div
    //console.log(JSON.stringify(commentObj))
    renderOneComment(commentObj)
    //e.target.comment.value=''
  }

  function renderOneComment(commentObj) {
    // Build commentObj card
    let card=document.createElement('p')
    card.className='card'
    // innerHTML is coming from us so it should be safe, note backticks
    card.innerHTML=`
      <span class="z-comment">
        ${commentObj.zcomment}
      </span>`
    document.querySelector('div#list').appendChild(card)
    document.querySelector('input#comment-input').value=''




  }

}

document.addEventListener("DOMContentLoaded",init);



