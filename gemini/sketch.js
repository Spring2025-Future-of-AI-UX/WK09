let mImg;

function preload() {
  mImg = loadImage("../../imgs/Img1.jpg");
}

function encodeImg(img) {
  img.loadPixels();
  let imgURL = img.canvas.toDataURL("image/jpeg", 0.7);
  return imgURL.replace("data:image/jpeg;base64,", "");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20);
  mImg.resize(mImg.width/10, mImg.height/10)
}

let mCaption = "";
function draw() {
  background(500);
  image(mImg, 0, 0);
  //image(mImg, 0, 0, mImg.width/10, mImg.height/10);
  text(mCaption, 0, mImg.height + 4, width, 200);
}

async function mousePressed() {
  let mPrompt = {
    parts: [
      { text: "Explain this image" },
      { inline_data: {
          mime_type: "image/jpeg",
          data: encodeImg(mImg),
      }},
    ],
  };
  mCaption = await generateContent(mPrompt);
}
