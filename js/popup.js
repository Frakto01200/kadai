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
// 30秒ごとにポップアップを表示する
setInterval(openModal, 3000); // 30000ミリ秒（30秒）ごとに呼び出す