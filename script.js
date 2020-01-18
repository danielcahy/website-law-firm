// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").classList.remove("py-lg-3")
  } else {
    document.getElementById("navbar").classList.add("py-lg-3")
  }
  console.log(document.body.scrollTop)
  console.log(document.documentElement.scrollTop)
}