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

// Chnaging Navbar Color on Scroll
const Navbar = document.getElementById("Navbar");

window.onscroll = () => {
  if (window.scrollY > 60) {
    Navbar.classList.add("active");
    document.querySelector("#scroll-top").classList.add("active");
  } else {
    Navbar.classList.remove("active");
    document.querySelector("#scroll-top").classList.remove("active");
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
    $("#favicon").attr("href", "assests/images/favicon.png");
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
