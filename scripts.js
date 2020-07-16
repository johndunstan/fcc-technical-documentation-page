// ***** Set the selected menu-bar item as highlighted on screens > 600px *****
// Get the container element
var btnContainer = document.getElementById('navbar')

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName('nav-style')

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active')
    current[0].className = current[0].className.replace(' active', '')
    this.className += ' active'
  })
}

// ***** Set the selected menu-bar item as highlighted on screens < 600px *****
// Get the container element
var smBtnContainer = document.getElementById('topnav')

// Get all buttons with class="btn" inside the container
var topBtns = btnContainer.getElementsByClassName('top-nav-link')

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < topBtns.length; i++) {
  topBtns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active')
    current[0].className = current[0].className.replace(' active', '')
    this.className += ' active'
    console.log("You're in here!")
  })
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// (From W3 Schools: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp)
function myFunction() {
  var x = document.getElementById('myLinks')
  if (x.style.display === 'block') {
    x.style.display = 'none'
  } else {
    x.style.display = 'block'
  }
}
