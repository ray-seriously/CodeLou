// Hamburger menu //
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});

// Complaints page respone alert //
function complaintAlert() {
    alert("Due to unforseen circumstances, your complaint cannot be submitted at this time. To file a complaint, please visit our Complaints page.");
  }