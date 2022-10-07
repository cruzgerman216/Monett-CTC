let colors = ['red', 'blue', 'purple']

function changeBackgroundColor(){
  // Gettinga  random number between 0 - 2
  let randomNumber = Math.floor(Math.random() * 3);

  // Changing the background to a random color
  document.body.style.backgroundColor = colors[randomNumber]
}