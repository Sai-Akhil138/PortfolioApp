// AOS Library Initializing
AOS.init();

// Opening Page from top
$(document).ready(function () {
  $(window).scrollTop(0);
});
// Responsive Navbar

const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", addActive);

function addActive() {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

// Changing Navbar Color on Scroll
const Navbar = document.getElementById("Navbar");

window.onscroll = () => {
  if (window.scrollY > 60) {
    Navbar.classList.add("active");
    document.querySelector("#scroll-top").classList.add("active");
    document.getElementById("scroll-mouse").style.display = "none";
  } else {
    Navbar.classList.remove("active");
    document.querySelector("#scroll-top").classList.remove("active");
    document.getElementById("scroll-mouse").style.display = "block";
  }
};

//  Typed Js Effect Starts
$(document).ready(function () {
  var typed = new Typed(".intro-nameSpan", {
    strings: ["Web Developer.", "Web Designer.", "UI/UX Designer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
  });
});

// Changing Color of Nav Item on that Page Load
$(document).ready(function () {
  $(".nav-item").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

// Changing The Title of Document
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Akhil Portfolio";
    $("#favicon").attr("href", "./assets/images/favicon.png");
  } else {
    document.title = "Come Back To Portfolio";
  }
});

// PreLoader
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 500);
}
window.onload = fadeOut;

// Opening WorkImage on Filter

$(document).ready(function () {
  $(".listBtn").click(function () {
    var filter = $(this).attr("data-filter");
    if (filter == "all") {
      $(".filter-image").show();
    } else {
      $(".filter-image")
        .not("." + filter)
        .hide();
      $(".filter-image")
        .filter("." + filter)
        .show();
    }
    $(this).addClass("active").siblings().removeClass("active");
  });
});

// Disable Developer Tools
window.oncontextmenu = function () {
  return false;
};

document.addEventListener(
  "keydown",
  function (event) {
    var key = event.key || event.keyCode;

    if (key == 123) {
      return false;
    } else if (
      (event.ctrlKey && event.shiftKey && key == 73) ||
      (event.ctrlKey && event.shiftKey && key == 74)
    ) {
      return false;
    }
  },
  false
);

// Contact Form Code
let contactFormEl = document.getElementById("contactForm");
let contactNameEl = document.getElementById("contactName");
let contactEmailEl = document.getElementById("contactEmail");
let contactNumberEl = document.getElementById("contactNumber");
let contactMessageEl = document.getElementById("contactMessage");

let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let numberErrMsgEl = document.getElementById("numberErrMsg");
let messageErrMsgEl = document.getElementById("messageErrMsg");

// var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

contactNameEl.addEventListener("blur", function () {
  if (contactNameEl.value === "") {
    nameErrMsgEl.textContent = "Please enter valid name";
    nameErrMsgEl.classList.add("errorMsg");
  } else {
    nameErrMsgEl.textContent = "";
  }
});

contactEmailEl.addEventListener("blur", function () {
  if (contactEmailEl.value === "") {
    emailErrMsgEl.textContent = "Please enter valid email";
    emailErrMsgEl.classList.add("errorMsg");
  } else {
    emailErrMsgEl.textContent = "";
  }
});

contactNumberEl.addEventListener("blur", function () {
  if (contactNumberEl.value === "") {
    numberErrMsgEl.textContent = "Please enter valid number";
    numberErrMsgEl.classList.add("errorMsg");
  } else {
    numberErrMsgEl.textContent = "";
  }
});

contactMessageEl.addEventListener("blur", function () {
  if (contactMessageEl.value === "") {
    messageErrMsgEl.textContent = "Please enter valid message";
    messageErrMsgEl.classList.add("errorMsg");
  } else {
    messageErrMsgEl.textContent = "";
  }
});

contactFormEl.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clearing the values after the submit event is fired
  contactNameEl.value = "";
  contactEmailEl.value = "";
  contactNumberEl.value = "";
  contactMessageEl.value = "";
});
