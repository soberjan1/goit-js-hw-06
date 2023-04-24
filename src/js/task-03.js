const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const repetaVozmiNaRobotuEl = document.querySelector("ul");

const addPic = images
  .map(
    (image) =>
      `<li class="li-item"> <img class="img-item" src=${image.url} alt=${image.alt} ></li> `
  )
  .join("");

repetaVozmiNaRobotuEl.insertAdjacentHTML("afterbegin", addPic);
// const addLiEl = document.createElement("li");
// const addImgEl = document.createElement("img");
// addImgEl = images.forEach((item) => {
//   c;
// });

// for (const image of images) {
//   console.log(image);
// }

// const itemLiEl = document.createElement('li');
// const itemImgEl = document.createElement("img");
// itemImgEl. =
