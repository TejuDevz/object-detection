img = "";
im = localStorage.getItem("image");
status = "";
objects = [];
console.log(im);

function preload() {
  if (im == 1) {
    img = loadImage("1.jpg");
  } else if (im == 2) {
    img = loadImage("2.jpg");
  } else if (im == 3) {
    img = loadImage("3.jpg");
  } else if (im == 4) {
    img = loadImage("4.jpg");
  } else if (im == 5) {
    img = loadImage("5.jpg");
  }
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();

  objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}

function modelLoaded() {
  console.log("Model Loaded!");
  status = true;
  objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    objects = results;
  }
}

function draw() {
  image(img, 0, 0, 640, 420);

  if (status != "") {
    for (var i = 0; i < objects.length; i++) {
      percent = floor(objects[i].confidence * 100);

      noStroke();
      fill("#ff1919");
      text(
        `${objects[i].label} ${percent}%`,
        objects[i].x + 15,
        objects[i].y + 15
      );
      noFill();
      stroke("#ff1919");
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
  }
}
