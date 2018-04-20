// JavaScript source code

// add an initializer function to call on body load


// if page is scrolled down, fade the navbar
$(document).ready(function () {

    $(".dropdown-toggle").dropdown();

    window.addEventListener("scroll", fadeNav);

    function fadeNav() {
        if ($(window).scrollTop() != 0) {
            //$("#topNav").fadeTo(400, 0.5);
            document.getElementById("topNav").style.opacity = "0.5";  
        }
        
        else {
            document.getElementById("topNav").style.opacity = "0.85";
        }
    }
    
});
