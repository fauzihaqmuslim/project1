let mat1 = ["Math", "English", "Programming"];
let mat2 = ["Geography", "Spanish", "Programming"];

let e;

mat1.forEach((isiData) => {
  if (mat2.includes(isiData)) {
    e = true;
  } else {
    e = false;
  }
});

console.log(e);
