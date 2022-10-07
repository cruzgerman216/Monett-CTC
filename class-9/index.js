fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => {
    // Step 1 Access the img element
    let imageElement = document.getElementById("random-image");

    // Step 2 store the image address from data to
    // The img element
    console.log(data.message);
    imageElement.src = data.message;
  });
