const container = document.getElementById("image-container");

function fetchDogPics() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (rawResponse) {
      return rawResponse.json();
    })
    .then(function (usableData) {
      const figure = document.createElement("figure");
      const image = document.createElement("img");

      container.appendChild(figure);
      image.src = usableData.message;
      image.width = "410";
      image.height = "320";
      figure.appendChild(image);
    });
}