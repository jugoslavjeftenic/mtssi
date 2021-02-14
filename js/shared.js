function mobileMenu() {
  let navigation = getComputedStyle(document.querySelector(".navigation"));

  if (navigation.display == "none") {
    document.querySelector(".navigation").style.display = "block";
  } else {
    document.querySelector(".navigation").style.display = "none";
  }
}
