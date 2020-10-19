<body>
<button onclick="myFunction()">Cobain Confirmt</button>

<p id="show"></p>

<script>
function e() {
  var txt;
  var r = confirm("Press a button!");
  if (r == true) {
    txt = e();
  } else {
    txt = "Cancel!"
  }
  document.getElementById("show").innerHTML = txt;
}
</script>

</body>