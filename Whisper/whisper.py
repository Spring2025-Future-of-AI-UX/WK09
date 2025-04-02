import Whisper.whisper as whisper

# Load the Whisper model (Options: "tiny", "base", "small", "medium", "large")
model = whisper.load_model("large").to("cuda")

# Path to the audio file
audio_file = "../../audio/sample_audio2.wav"  # Replace this with your actual audio file path

# Transcribe the audio file
result = model.transcribe(audio_file)

# Print the transcription
print("Transcription: ", result["text"])


