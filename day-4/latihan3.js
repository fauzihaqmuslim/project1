const kucing = () =>{
  var umurManusia = prompt('beraoa umur kucing')
 document.querySelector(".demokucing").innerHTML =
  `umur kucing mu ${umurKucing(umurManusia)}`
}
var umurKucing = (umurManusia) =>{
  if (umurManusia == 1) {
    return 'umur kucing 1 tahun'
  } else if (umurManusia == 2){
    return 'umur kucing 2 tahun'
  }else{
    return 24 + 4 * (umurManusia - 2)
  }
};
