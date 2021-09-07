
const SpeechRecognition =window.SpeechRecognition || window.webkitSpeechRecognition;


const recognition = new SpeechRecognition();

const transcript = document.querySelector(".transcript");
const btn = document.querySelector("button");

recognition.onresult = (e) => {
  transcript.innerHTML = e.results[0][0].transcript;
};

//function for the start recognition
btn.addEventListener("click", () => {
  recognition.start();
});
