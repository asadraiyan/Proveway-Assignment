const first_box = document.getElementById("firstBox");
const middle_box = document.getElementById("middleBox");
const last_box = document.getElementById("lastBox");
const firstBoxStyle = document.getElementById("first-box");
const middleBoxStyle = document.getElementById("middle-box");
const lastBoxStyle = document.getElementById("last-box");

// function to change the display and css of the unselected box

function unSelectBox(box, boxSelector) {
  box.style.display = "none";
  boxSelector.style.cssText = `
  border-radius: 3.615px;
  border: 0.904px solid #c8c8c8;
  background: #fff;`;
}

// function to change the display and css of the selected box

function selectBox(box, boxSelector) {
  box.style.display = "flex";
  boxSelector.style.cssText = `
  border-radius: 3.615px;
  border: 0.904px solid #007F61;
  background: #F4FBF9;`;
}

// function to handle the first box

function handleFirstBox(radioButtonId) {
  //   console.log("clicked");
  selectBox(first_box, firstBoxStyle);
  document.getElementById(radioButtonId).click();
  unSelectBox(middle_box, middleBoxStyle);
  unSelectBox(last_box, lastBoxStyle);
}

// function to handle the middle box

function handleMiddleBox(radioButtonId) {
  //   console.log("clicked");
  selectBox(middle_box, middleBoxStyle);
  document.getElementById(radioButtonId).click();
  unSelectBox(first_box, firstBoxStyle);
  unSelectBox(last_box, lastBoxStyle);
}

// function to handle the last box

function handleLastBox(radioButtonId) {
  //   console.log("clicked");
  selectBox(last_box, lastBoxStyle);
  document.getElementById(radioButtonId).click();
  unSelectBox(first_box, firstBoxStyle);
  unSelectBox(middle_box, middleBoxStyle);
}
