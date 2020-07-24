const toggle = document.querySelector(".toggle");
const topnav = document.querySelector(".topnav");
 
/* Toggle mobile menu */
function toggleNav() {
    if (topnav.classList.contains("active")) {
        topnav.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<img src="images/crystal_ball.png">";
    } else {
        topnav.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<img src="images/crystal_ball.png">";
    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleNav, false);

