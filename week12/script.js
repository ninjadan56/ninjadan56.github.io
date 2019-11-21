// SOURCE : https://www.youtube.com/watch?v=4YQ4svkETS0
let i = 0; //start
let images = [];
let time = 2000;


images[0] = 'assets/d1.png';
images[1] = 'assets/d2.png';
images[2] = 'assets/d3.png';
images[3] = 'assets/d4.PNG';
images[4] = 'assets/d5.PNG';
images[5] = 'assets/d6.PNG';
images[6] = 'assets/d7.PNG';
images[7] = 'assets/d8.png';
images[8] = 'assets/d9.PNG';
images[9] = 'assets/d10.PNG';
images[10] = 'assets/d11.png';
images[11] = 'assets/d12.PNG';


function changeImg(){
  document.slide.src = images[i];

  if(i < images.length -1){
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
