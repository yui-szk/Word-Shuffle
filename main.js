const shuffleBtn = document.getElementById("shuffle-button");
const result = document.getElementById("result-box");

function shuffleResult() {
  const inputText = document.getElementById("text-box").value;
  // 取得したテキストを1文字ごとの配列に変更
  const arrayInputText = [...inputText];
  // 配列の各要素に乱数を与え、sort
  arrayInputText.sort((a, b) => Math.random() - 0.5);
  result.innerHTML = arrayInputText.join("");
}

shuffleBtn.addEventListener("click", () => {
  shuffleResult();
});
