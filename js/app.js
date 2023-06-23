const tokei = document.getElementById('tokei');


function time() {
  let today = new Date();
  tokei.innerHTML = today.toLocaleString("ja");
  window.requestAnimationFrame(time);
};

time();