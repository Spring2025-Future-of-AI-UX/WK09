let API_URL = "https://generativelanguage.googleapis.com/v1beta/models";

async function generateContent(prompt, model = "gemini-1.5-pro") {
  let REQUEST_URL = `${API_URL}/${model}:generateContent?key=${GOOGLE_API_KEY}`;

  let res = await fetch(REQUEST_URL, {
    method: "POST",
    body: JSON.stringify({
      contents: [ prompt ],
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let json = await res.json();

  // AI generated
  // Safeguard: Check if candidates exist and are not empty (used for detact ffree uses)
  if (json && json.candidates && json.candidates.length > 0) {
    return json.candidates[0].content.parts[0].text;
  } else {
    console.error("Invalid API response:", json);
    return "Error: Unable to generate content.";  // Provide a fallback response
  }
}

