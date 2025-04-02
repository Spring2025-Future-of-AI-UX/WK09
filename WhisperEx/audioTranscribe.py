import whisper

# Load the Whisper model (Options: "tiny", "base", "small", "medium", "large")
model = whisper.load_model("tiny")

# Path to the audio file
audio_file = "D:/Future_of_AI_UX/WK09/audio/my_recording.mp3"

# Transcribe the audio file
result = model.transcribe(audio_file)

# Print the transcription
print("Transcription: ", result["text"])


