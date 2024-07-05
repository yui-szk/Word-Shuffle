const shuffleBtn = document.getElementById("shuffle-button") as HTMLButtonElement;
const result = document.getElementById("result-box") as HTMLDivElement;

function shuffleResult(): void {
  const inputText = (document.getElementById("text-box") as HTMLInputElement).value;
  // 取得したテキストを1文字ごとの配列に変更
  const arrayInputText: string[] = [...inputText];
  // 配列の各要素に乱数を与え、sort
  arrayInputText.sort(() => Math.random() - 0.5);
  result.innerHTML = arrayInputText.join("");
}

shuffleBtn.addEventListener("click", () => {
  shuffleResult();
});
