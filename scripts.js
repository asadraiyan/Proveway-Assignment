const first_box = document.getElementById("firstBox");
const middle_box = document.getElementById("middleBox");
const last_box = document.getElementById("lastBox");
const firstBoxStyle = document.getElementById("first-box");
const middleBoxStyle = document.getElementById("middle-box");
const lastBoxStyle = document.getElementById("last-box");

function handleFirstBox(radioButtonId) {
  console.log("clicked");
  first_box.style.display = "flex";
  firstBoxStyle.style.cssText = `
border-radius: 3.615px;
border: 0.904px solid #007F61;
background: #F4FBF9;`;
  middleBoxStyle.style.cssText = `
 border-radius: 3.615px;
  border: 0.904px solid #c8c8c8;
  background: #fff;`;
  lastBoxStyle.style.cssText = `
   border-radius: 3.615px;
  border: 0.904px solid #c8c8c8;
  background: #fff;`;
  document.getElementById(radioButtonId).click();
  middle_box.style.display = "none";
  last_box.style.display = "none";
}
function handleMiddleBox(radioButtonId) {
  console.log("clicked");
  document.getElementById(radioButtonId).click();
  middleBoxStyle.style.cssText = `
border-radius: 3.615px;
border: 0.904px solid #007F61;
background: #F4FBF9;`;
  firstBoxStyle.style.cssText = `
 border-radius: 3.615px;
  border: 0.904px solid #c8c8c8;
  background: #fff;`;
  lastBoxStyle.style.cssText = `
   border-radius: 3.615px;
  border: 0.904px solid #c8c8c8;
  background: #fff;`;
  first_box.style.display = "none";
  last_box.style.display = "none";
  middle_box.style.display = "flex";
}
function handleLastBox(radioButtonId) {
  console.log("clicked");
  last_box.style.display = "flex";
  lastBoxStyle.style.cssText = `
border-radius: 3.615px;
border: 0.904px solid #007F61;
background: #F4FBF9;`;
  middleBoxStyle.style.cssText = `
 border-radius: 3.615px;
  border: 0.904px solid #c8c8c8;
  background: #fff;`;
  firstBoxStyle.style.cssText = `
   border-radius: 3.615px;
  border: 0.904px solid #c8c8c8;
  background: #fff;`;
  document.getElementById(radioButtonId).click();
  first_box.style.display = "none";
  middle_box.style.display = "none";
}
