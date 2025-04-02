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