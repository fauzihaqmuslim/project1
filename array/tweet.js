var tampung_array = [];
        
function add() {
   var masukan = document.getElementById('curhat');
   tampung_array.push(masukan.value);
   masukan.value = '';
   show();
}

function show() {
   var html = '';
   for (var i=0; i<tampung_array.length; i++) {
      html += tampung_array[i];
   }
   var tampil = document.getElementById('tampil');
   tampil.innerHTML = html;
}