window.onscroll = function () {
  scrollPage();
};
function scrollPage() {
  const title = document.getElementById("title");
  const secondTitle = document.getElementById("second-title");
  const content = document.getElementById("content");
  var scroll = window.scrollY;
  var scrollDown = title.offsetTop;
  var scrollUp = content.offsetTop;

  if (scroll > scrollDown) {
    title.classList.add("scroll-title");
    secondTitle.classList.add("scroll-second-title");
    title.classList.remove("absolute");
    secondTitle.classList.remove("absolute");
  } else if (scroll < scrollUp) {
    title.classList.remove("scroll-title");
    secondTitle.classList.remove("scroll-second-title");
    title.classList.add("absolute");
    secondTitle.classList.add("absolute");
  }
}
