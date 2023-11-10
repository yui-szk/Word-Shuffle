const shuffleBtn = document.getElementById("shuffle-button");
const result = document.getElementById("result-box");

function shuffleResult() {
  const inputText = document.getElementById("text-box").value; // テキストボックスのテキストを取得
  const arrayInputText = [...inputText]; // 取得したテキストを1文字ごとの配列に変更
  arrayInputText.sort((a, b) => Math.random() - 0.5); // 配列の各要素に乱数を与え、sort
  result.innerHTML = arrayInputText.join(""); // 配列を文字列に戻し、htmlに表示
}

// ボタンをクリックしたときにshuffleResultを実行
shuffleBtn.addEventListener("click", () => {
  shuffleResult();
});
