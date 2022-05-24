
 // Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }


  let button = document.querySelector('.button');
let heading = document.querySelector('h1');
let list = document.querySelector('ol');
let para = document.querySelector('p');
let seconds,time,yourWork,hour,minutes;

button.addEventListener('click', () => {

  if (button.textContent === 'start') {
    seconds = 0;
    minutes = 0;
    hour = 0;
    yourWork = prompt('what are you going to do ?');
    if (yourWork !== null && yourWork !== '') {
      button.textContent = 'Done';
      para.textContent = yourWork;
      heading.textContent = `0${hour}hr : 0${minutes}min : 0${seconds}sec`;
      timer = setInterval(() => {

        seconds++;

        (minutes < 10) ? minutes = '0' + `0${minutes}`.slice(-1) : minutes = minutes;
        (seconds < 10) ? seconds = `0${seconds}` : seconds = seconds;
        (hour < 10) ? hour = '0' + `0${hour}`.slice(-1) : hour = hour;
        heading.textContent = `${hour}hr : ${minutes}min : ${seconds}sec`;

        if (seconds === 59) {
          seconds = 0;
          minutes++;
        }
        if (minutes === 59) {gi
          minutes = 0;
          hour++;
        };

      }, 1000);
    } 

  }else {
    list.insertAdjacentHTML("beforeend", `<li style='margin: 1rem 1rem 1rem 0;' class='notification is-primary'> ${yourWork} - ${hour}:${minutes}:${seconds}</li>`)
    button.textContent = 'start';
    heading.textContent = 'Task completed Successfully!';
    clearInterval(timer);
  }
});