let mImg;
let mCaption = "";
let mTag = {};


function preload() {
  mImg = loadImage("../../imgs/Img6.jpg");
  //mImg2 = loadImage("../../imgs/Img6.jpg");
}


function encodeImg(img) {
  img.loadPixels();

  let imgURL = img.canvas.toDataURL("image/jpeg");
  return imgURL.replace("data:image/jpeg;base64,", "");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20);
  //need to resize in order for Gemini to work
  mImg.resize(mImg.width/10, mImg.height/10)

  //attemp in adding second img was unsuccessful
  //mImg2.resize(mImg2.width/10, mImg2.height/10)

  
}


function draw() {
  background(500);
  image(mImg, 0, 0);
  // this didn't do the job...
  //image(mImg, 0, 0, mImg.width/10, mImg.height/10);
  text(mCaption, 0, mImg.height + 4, width, 200);


  //image(mImg2, 0, 0);
}

// AI-Generated: Extracts keywords as tags
// function generateTags(description) {
//   let words = description.split(" ");
//   let tags = words.filter(word => word.length > 3).slice(0, 5);  // Pick first 5 long words
//   return [...new Set(tags)];  // Remove duplicates
// }

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

  //----------------Not Working ----------------------//
  //not sure if it is due to other aspects other than code
  //keep geeting Multiple readback with no response

  //AI Generated: updated to accomdate with tagging images

  // let response = await generateContent(mPrompt);

  // if (response && response.candidates && response.candidates.length > 0) {
  //   mCaption = response.candidates[0].content.parts[0].text || "No description available.";
    
  //   let tags = generateTags(mCaption);

  //   //AI Generated: Store image data with description and tags
  //   imageData = { image: mImg, description: mCaption, tags: tags };

  //   console.log("Stored Image Data:", imageData);
  // }
};


//AI Generated: Function to search the stored image by keyword/tag
// function searchImages(keyword) {
//   if (imageData.description.includes(keyword) || imageData.tags.includes(keyword)) {
//     return imageData; // Return the stored image data if it matches the search
//   } else {
//     return null; // No match found
//   }
// }