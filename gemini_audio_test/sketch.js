// let mImg;

// function preload() {
//   mImg = loadImage("../../imgs/GDTM.jpg");
// }

// function encodeImg(img) {
//   img.loadPixels();
//   let imgURL = img.canvas.toDataURL("image/jpeg");
//   return imgURL.replace("data:image/jpeg;base64,", "");
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   textSize(20);
// }

// let mCaption = "";
// function draw() {
//   background(220);
//   image(mImg, 0, 0);
//   text(mCaption, 0, mImg.height + 4, width, 200);
// }

// async function mousePressed() {
//   let mPrompt = {
//     parts: [
//       { text: "Explain this image" },
//       { inline_data: {
//           mime_type: "image/jpeg",
//           data: encodeImg(mImg),
//       }},
//     ],
//   };
//   mCaption = await generateContent(mPrompt);
// }


//------Test with AI code -------//

//-----Try to Rewrite------//

let transcriptionResult = "";
let audioFilePath = "../../audio/sample_audio2.wav";

// preload the sound error with loadSound not defined

// function preload() {
//     audioFilePath = loadSound("../../audio/sample_audio2.wav");
//   }


function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20);
  
  // Call the transcription function from gemini.js
  transcriptionResult = "Transcribing audio...";

  generateAudioTranscription(audioFilePath).then(result => {
    transcriptionResult = result;  // Set the transcription result
  });
}

// Draw the transcription result on the canvas
function draw() {
  background(220);
  text(transcriptionResult, 10, 50, windowWidth, windowHeight);
}