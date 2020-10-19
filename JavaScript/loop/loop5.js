<body>

<h2>JavaScript Prompt</h2>

<button onclick="e()">Click Here!</button>

<p id="show"></p>

<script>
function e() {
  var txt;
  var ib = prompt("Apa itu IB?");
  confirm("Sudah Benar?");
  alert("Selamat jawaban kamu bener!");
  if (ib == null || ib == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "IB Adalah " + ib;
  }
  document.getElementById("show").innerHTML = txt;
}
</script>

</body>