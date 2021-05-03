var menuDom = document.getElementsByClassName("menu")[0];
var menuListDom = document.getElementsByClassName("menu_list")[0];

menuDom.onclick = function () {
  console.log(menuListDom.style.display);
  if (
    menuListDom.style.display === "none" ||
    menuListDom.style.display === ""
  ) {
    menuListDom.style.display = "block";
  } else {
    menuListDom.style.display = "none";
  }
};

