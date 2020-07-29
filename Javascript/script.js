// Hamburger menu //
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});

// Complaints page response alert //
function complaintAlert() {
    alert("Due to unforseen circumstances, your complaint cannot be submitted at this time. To file a complaint, please visit our Complaints page.");
  }

  // Add image to Complaints page after alert pops-up //
function addImage() {
    document.getElementById("oops").innerHTML += "<img src='images/graveyard.png'>";
}

// Add error message to Complaints page under image after alert pops-up //
function addMessage() {
    document.getElementById("oops").innerHTML += "<p>Oh, dear. :(</p>";
}

// Disable complaint button after one click //
function disableButton(){
    document.getElementById("complainbtn").disabled = true;
}

// Fortune Teller response //
const text = document.getElementById('response');  
const arr = ["Uh oh...", "Hm...", "Nah.", "Who cares?", "No need.", "404", "Gone fishing.", "Buzz off!", "Ugh. You again?"]; 
  
function fortuneResponses() { 
    text.innerHTML = arr[Math.floor(Math.random() * arr.length)]; 
}  
