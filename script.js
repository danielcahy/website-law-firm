// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "60px"
  } else {
    document.getElementById("navbar").style.height = "92px"
  }
  console.log(document.body.scrollTop)
  console.log(document.documentElement.scrollTop)
  console.log(document.getElementById("navbar").style.height)
}