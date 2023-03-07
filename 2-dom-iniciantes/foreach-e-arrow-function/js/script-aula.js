const imgs = document.querySelectorAll('img');

// imgs.forEach(function (img, index, array) {
//     // console.log(img, index, array);
// });

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

// console.log(titulos);
// console.log(titulosArray);

titulosArray.forEach(function (item, index, array) {
    //   console.log(item, index, array);
});

let i = 0;

imgs.forEach((img) => {
    console.log(img);
});
imgs.forEach(function () {
    console.log(i++);
});
imgs.forEach(() => console.log(i++));
