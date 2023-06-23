function showAlerts() {
  var countInput = document.getElementById("count");
  var count = parseInt(countInput.value); // テキストボックスの値を数値に変換

  for (var i = 0; i < count; i++) {
    alert("アラート " + (i + 1));
  }
}
