const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener('input', function(event) {
  const inputText = event.target.value.trim();
  nameOutput.textContent = inputText === '' ? 'Anonymous' : inputText;
});
