next_image = 0;

function a() {
  next_image = 1;
  change();
}
function b() {
  next_image = 2;
  change();
}
function c() {
  next_image = 3;
  change();
}
function d() {
  next_image = 4;
  change();
}
function e() {
  next_image = 5;
  change();
}
function change() {
  location.replace("http://127.0.0.1:5500/main.html");
  localStorage.setItem("image", next_image);
}
