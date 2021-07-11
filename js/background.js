const images = [
  "갈라파고스 제도.jpeg",
  "나미비아.jpeg",
  "남극 대륙.jpeg",
  "노르웨이의 베어 섬.jpeg",
  "세이셸.jpeg",
  "아르헨티나의 후후이주.jpeg",
  "캐나다 앨버타의 재스퍼 국립공원.jpeg",
  "탄자니아.jpeg",
  "파우아뉴기니의 열대우림.jpeg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const body = document.querySelector("body");
const bgImage = `img/${chosenImage}`;
body.background = bgImage;
