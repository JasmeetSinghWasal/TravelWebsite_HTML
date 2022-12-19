
// Navigation Bar functions

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function callWhatsOn() {
    window.location.pathname = "src/whatsOn.html";
}
function callThingsToDo() {
    window.location.href = "src/thingsToDo.html";
}

function callEatAndDrink() {
    window.location.href = "src/eatAndDrink.html";
}

function callPlanYourTrip() {
    window.location.href = "src/planYourTrip.html";
}

// Banner button click scrolls page down 
function bannerBtnClickScrolDown()
{
    window.scrollTo(300, 800);
}
