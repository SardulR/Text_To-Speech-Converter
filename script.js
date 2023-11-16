let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    // Get available voices when the event is triggered
    voices = window.speechSynthesis.getVoices();

    // Populate the dropdown with available voices
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });

    // Set the default voice (you can change this to a specific voice)
    speech.voice = voices[0];
}

// Listen for button click to start speaking
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;

    // Retrieve the selected voice from the dropdown and set it
    speech.voice = voices[voiceSelect.selectedIndex];

    // Speak the text
    window.speechSynthesis.speak(speech);
});
