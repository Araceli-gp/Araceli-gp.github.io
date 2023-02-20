const $buttonup = document.getElementById("bup");
window.addEventListener("scroll", (e) => {
  let y = document.documentElement.scrollTop;
  if (y === 0) {
    $buttonup.classList.add("hide");
    $buttonup.classList.remove("active");
  } else if (y >= 200) {
    $buttonup.classList.add("active");
    $buttonup.classList.remove("hide");
  }
})

document.addEventListener("click", (e) => {
  if (e.target.matches(".fa-chevron-up")) {
    window.scrollTo({
      scrollbehavior: "smoth",
      top: 0
    });
  }
})