// créer 3 variables pour stocker 3 chiffres aléatoires

// Donner au body une couleur de fond en rgb()

// Montrere sur le body la couleur rgb()

setInterval(() => {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);

  body.style.background = "rgb(" + red + "," + green + "," + blue + ")";
  rgbContainer.textContent = "rgb(" + red + ", " + green + ", " + blue + ")";
}, 3000);
