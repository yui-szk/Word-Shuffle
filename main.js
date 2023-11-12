const shuffleBtn = document.getElementById("shuffle-button");
const result = document.getElementById("result-box");

function shuffleResult() {
  // テキストボックスのテキストを取得
  const inputText = document.getElementById("text-box").value;
  // 取得したテキストを1文字ごとの配列に変更
  const arrayInputText = [...inputText];
  // 配列の各要素に乱数を与え、sort
  arrayInputText.sort((a, b) => Math.random() - 0.5);
  // 配列を文字列に戻し、htmlに表示
  result.innerHTML = arrayInputText.join("");
}

// ボタンをクリックしたときにshuffleResultを実行
shuffleBtn.addEventListener("click", () => {
  shuffleResult();
});
