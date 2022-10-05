function textToSpeech(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = 'en';
  speech.text = text;
  window.speechSynthesis.speak(speech);
}

export default textToSpeech;
