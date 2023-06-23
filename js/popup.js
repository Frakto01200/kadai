// ポップアップを表示するための関数
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// ポップアップを非表示にするための関数
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// ポップアップを閉じるためのイベントリスナーを追加
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.addEventListener("click", closeModal);

// ページ読み込み時にポップアップを表示する（必要に応じてコメントアウト）
// ポップアップを表示するための関数
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// ページの読み込み後に5秒後にポップアップを表示する
window.addEventListener("load", function() {
    setTimeout(openModal, 2000); // 5000ミリ秒（5秒）の遅延を追加
});
// インターバルIDを格納する変数
let intervalId;

// ボタンクリック時の処理
function stopInterval() {
  clearInterval(intervalId);
  alert("齋藤栄治のポップアップを停止しました。");
}

// ボタン要素を取得
const stopButton = document.getElementById("stopButton");

// ボタンのクリックイベントを監視
stopButton.addEventListener("click", stopInterval);

// 30秒ごとにポップアップを表示する
intervalId = setInterval(openModal, 3000); // 30000ミリ秒（30秒）ごとに呼び出す