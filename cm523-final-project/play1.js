var femaleDom = document.getElementsByClassName("female")[0];
var maleDom = document.getElementsByClassName("male")[0];
var colorPlates = document.getElementsByClassName("color_plates")[0];
var hadSelected = document.querySelector(".selected");
var searchStr = location.search;
var selectbody = null;
var selectDom;
var nameGroup = {
  facial_features: "Facial features",
  body_skin: "body skin",
};

var nineColor = [
  "#0099CC",
  "#c31732",
  "#CC9966",
  "#003300",
  "#000000",
  "#f3b537",
  "#ee7627",
  "#934774",
  "#9dd1bc",
];

if (searchStr.indexOf("female") === -1) {
  //male
  femaleDom.style.display = "none";
} else {
  maleDom.style.display = "none";
}

//Generate child elements
nineColor.forEach(function (item) {
  var pDom = document.createElement("div");
  pDom.className = "single_plate";
  pDom.style.backgroundColor = item;
  colorPlates.appendChild(pDom);
  pDom.onclick = changeColor;
});

//change color
function changeColor(e) {
  if (selectDom) {
    selectDom.style.fill = e.target.style.backgroundColor;
  }
}

//click body parts
function selectPart(e, type) {
  selectDom = e;
  if (nameGroup[type]) {
    hadSelected.innerHTML = nameGroup[type];
  } else {
    hadSelected.innerHTML = type;
  }
}




