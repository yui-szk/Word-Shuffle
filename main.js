const shuffleBtn = document.getElementById("shuffle-button");
const result = document.getElementById("result-box");

function set() {
  const textElm = document.getElementById("text-box");
  const inputText = textElm.value;
  const arrayInputText = [...inputText];
  arrayInputText.sort((a, b) => Math.random() - 0.5);
  result.innerHTML = arrayInputText.join("");
}

shuffleBtn.addEventListener("click", () => {
  set();
});
