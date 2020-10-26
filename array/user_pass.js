var tampungUser = [];
    var tampungUser2 = [];
    
    function tambah() {
       var user = document.getElementById('userId');
       var pass = document.getElementById('passId');
       
       tampungUser.push(user.value);
       tampungUser2.push(pass.value);
       user.value = '';
       pass.value = '';
       tampil();
    }
    
    function tampil() {
      var id = '';
      var passs = '';
      for (var i=0; i<tampungUser.length; i++) {
              id += tampungUser[i];
           }
           for (var i=0; i<tampungUser2.length; i++) {
              passs += tampungUser2[i];
           }
      document.getElementById("showId").innerHTML = id;
      document.getElementById("showPass").innerHTML = passs;
    }