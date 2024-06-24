let font;
let creditFont; // Font for the image credits
let texts = ["1960s", "1980s", "2000s"];
let textColors = []; // Array to store colors of each text element
let images1960 = []; // Array to store images and descriptions for 1960s
let images1980 = []; // Array to store images and descriptions for 1980s
let images2000 = []; // Array to store images and descriptions for 2000s
let currentImages = []; // Track current images displayed for all texts
let lastTextStates = []; // Track the last state (black/red) of each text
let imageHeight = 250; // Height of the images

let firstImageShown = false; // Boolean to track if the first image has been shown

// Variables for dragging images
let dragging = false;
let selectedImage = null;
let offsetX, offsetY;

let clearUnderline = false;

function preload() {
  // Load the font
  font = loadFont("MartinRegular.ttf");
  creditFont = loadFont("NectoMono-Regular.otf");

  // Load images and their descriptions
  images1960.push({
    img: loadImage("Images 1960/img1.jpg"),
    description: "Atelier Populaire, La Lutte Continue. Silkscreen Poster. 1968",
  });
  images1960.push({
    img: loadImage("Images 1960/img14.jpg"),
    description: "The Poster Workshop, People. Silkscreen Poster. 1968-1971",
  });
  images1960.push({
    img: loadImage("Images 1960/img16.jpg"),
    description: "Students for a Democratic Society, CAW!. Magazine. February, 1968",
  });
  images1960.push({
    img: loadImage("Images 1960/img19.jpg"),
    description: "Students for a Democratic Society, The Hard Core. Newspaper. October, 1968",
  });
  images1960.push({
    img: loadImage("Images 1960/img20.jpg"),
    description: "Students for a Democratic Society, Radical America. Magazine. February, 1970",
  });
  images1960.push({
    img: loadImage("Images 1960/img21.jpg"),
    description: "Revolutionary Student Brigade, The Young Communist. Newspaper. March, 1978",
  });
  images1960.push({
    img: loadImage("Images 1960/img24.jpg"),
    description: "Emory Douglas, The Black Panther Newspaper. Newspaper. April, 1970",
  });
   images1960.push({
    img: loadImage("Images 1960/img27.jpg"),
    description: "Young Lords, Palante. Newsletter. July, 1971",
  });
   images1960.push({
    img: loadImage("Images 1960/img28.jpg"),
    description: "Chicano activists, La Raza. Newspaper. December, 1968",
  });
   images1960.push({
    img: loadImage("Images 1960/img30.jpg"),
    description: "Chicano activists, ¡Basta Ya!. Newspaper. May, 1969",
  });
   images1960.push({
    img: loadImage("Images 1960/img31.jpg"),
    description: "Iowa City Women's Liberation Front, Ain't I a Woman?. Newspaper. June, 1970",
  });
   images1960.push({
    img: loadImage("Images 1960/img36.jpg"),
    description: "One, One: The Homosexual Magazine. Magazine. August, 1955",
  });
   images1960.push({
    img: loadImage("Images 1960/img38.jpg"),
    description: "PRIDE, The Advocate. Newspaper. January, 1978",
  });
   images1960.push({
    img: loadImage("Images 1960/img40.jpg"),
    description: "Daughters of Bilitis, The Lesbian Tide. Newspaper. August, 1971",
  });  


  images1980.push({
    img: loadImage("Images 1980/img01.jpg"),
    description: "SILENCE = DEATH Project, SILENCE = DEATH. Poster. 1987",
  });
  images1980.push({
    img: loadImage("Images 1980/img02.jpg"),
    description: "Dough Minkler, Barfboro. Poster. 1991",
  });
  images1980.push({
    img: loadImage("Images 1980/img03.jpg"),
    description: "Peter Kennard, Protect and Survive. Poster. 1981",
  });
  images1980.push({
    img: loadImage("Images 1980/img04.jpg"),
    description: "Guerrilla Girls, Do Women have to be naked to get into the Met. Museum?. Poster. 1989",
  });
  images1980.push({
    img: loadImage("Images 1980/img05.jpg"),
    description: "Adbusters, Buy Nothing Day. Poster. 1999",
  });
  images1980.push({
    img: loadImage("Images 1980/img06.jpg"),
    description: "Peter Kennard, Broken Missile. Poster. 1980",
  });
  images1980.push({
    img: loadImage("Images 1980/img07.jpeg"),
    description: "Guerrilla Girls, We Sell White Bread. Poster. 1987",
  });
  images1980.push({
    img: loadImage("Images 1980/img08.jpg"),
    description: "Dyke Action Machine & Lesbian Avengers, The Dyke Manifesto. Poster. 1992",
  });
  images1980.push({
    img: loadImage("Images 1980/img09.png"),
    description: "Unknown, Gay Pride Marches Badge. Badge. 1988 ca.",
  });
  images1980.push({
    img: loadImage("Images 1980/img10.png"),
    description: "Unknown, Gay Pride Marches Badge. Badge. 1988 ca.",
  });
  images1980.push({
    img: loadImage("Images 1980/img11.png"),
    description: "Unknown, Gay Pride Marches Badge. Badge. 1988 ca.",
  });
  images1980.push({
    img: loadImage("Images 1980/img12.jpg"),
    description: "Keith Haring, Ignorance = Fear. Poster. 1989",
  });
  images1980.push({
    img: loadImage("Images 1980/img13.jpg"),
    description: "Vangelis & David Bailey, Dumb Animals. Commercial. 1985",
  });
  images1980.push({
    img: loadImage("Images 1980/img14.jpg"),
    description: "Vangelis & David Bailey, Dumb Animals. Commercial. 1985",
  });


  images2000.push({
    img: loadImage("Images 2000/img001.jpg"),
    description: "Devin Allen, TIME Magazine. Cover. May, 2015",
  });
  images2000.push({
    img: loadImage("Images 2000/img003.jpg"),
    description: "Voces con Futura, Unete al Movimiento 15M. Digital Poster. 2011",
  });
  images2000.push({
    img: loadImage("Images 2000/img005.jpg"),
    description: "Pussy Riot, Punk Prayer. Performance. 2012",
  });
  images2000.push({
    img: loadImage("Images 2000/img006.jpg"),
    description: "Karmarama, Make Tea Not War. Poster. 2004",
  });
  images2000.push({
    img: loadImage("Images 2000/img007.jpg"),
    description: "The United Unknown, You Have a Dream, I have a Drone. Digital Poster. 2013",
  });
  images2000.push({
    img: loadImage("Images 2000/img008.jpg"),
    description: "Peter Kennard & Cat Phillipps, Photo Op. Poster. 2005",
  });
  images2000.push({
    img: loadImage("Images 2000/img009.jpg"),
    description: "Martha Roster, Bringing the War Home: House Beautiful (Iraq). Poster. 2004",
  });
  images2000.push({
    img: loadImage("Images 2000/img010.jpg"),
    description: "Alshaab Alsori Aref Tarekh, I'm taking to the streets to protest Syria. Digital Poster. 2013",
  });
  images2000.push({
    img: loadImage("Images 2000/img012.jpg"),
    description: "Alshaab Alsori Aref Tarekh, May military rule fall. Digital Poster. 2011",
  });
  images2000.push({
    img: loadImage("Images 2000/img013.jpg"),
    description: "Marwan Shahin, Anonymous Pharaoh. Graffiti. 2011",
  });
  images2000.push({
    img: loadImage("Images 2000/img014.jpg"),
    description: "Will Brown & Adbusters, Occupy Wall Street. Poster. 2011",
  });
  images2000.push({
    img: loadImage("Images 2000/img016.jpg"),
    description: "Occupy Wall Street, The Occupied Wall Street Journal. Newspaper. 2011",
  });
  images2000.push({
    img: loadImage("Images 2000/img018.jpg"),
    description: "Gays Against Guns, Gays Against Guns. Logo. 2016",
  });
  images2000.push({
    img: loadImage("Images 2000/img021.jpg"),
    description: "Stephen McCarthy, Mate Act Now. Poster. 2020",
  });
}

function setup() {
  // Create a canvas that fills the window
  createCanvas(windowWidth, windowHeight);

  // Initialize text colors and last text states to black
  for (let i = 0; i < texts.length; i++) {
    textColors.push(color(0));
    lastTextStates.push(false); // false indicates black, true indicates red
  }
}

function draw() {
  // Clear the background
  background(255);

  // Draw the "Clear" text if the first image has been shown
  if (firstImageShown) {
    fill(0);
    textSize(15);
    textAlign(RIGHT, TOP);
    textFont(creditFont);

    // Check if mouse is over the "Clear" text and set underline flag
    if (isMouseOverReset()) {
      clearUnderline = true;
    } else {
      clearUnderline = false;
    }

    // Draw the "Clear" text with or without underline
    let clearText = "[Clear]";
    let clearX = windowWidth - 45;
    let clearY = 25;
    let clearLabel = "Clear";
    let clearLabelWidth = textWidth(clearLabel);
    text(clearText, clearX, clearY);

    if (clearUnderline) {
      // Draw underline only under "Clear"
      let underlineX1 = clearX - textWidth(clearText) + textWidth("[");
      let underlineX2 = underlineX1 + clearLabelWidth;
      let underlineY = clearY + 18; // Adjust based on text size and position
      line(underlineX1, underlineY, underlineX2, underlineY);
    }
  }

  // Draw the three texts with their respective colors
  textSize(200); // Set the text size
  textAlign(CENTER, BASELINE); // Align text to center horizontally and vertically
  textFont(font);
  let y = windowHeight - 20; // 20 pixels above the bottom

  // Calculate the total width of the three texts
  let totalWidth = 0;
  for (let i = 0; i < texts.length; i++) {
    totalWidth += textWidth(texts[i]);
  }

  // Calculate the starting x position so the texts are centered
  let startX = (windowWidth - totalWidth) / 2;

  // Draw the three texts with their respective colors
  let currentX = startX;
  for (let i = 0; i < texts.length; i++) {
    if (isMouseOverText(currentX, y, texts[i])) {
      textColors[i] = color(226, 35, 22); // Change to red
      if (!lastTextStates[i]) {
        // If the text was black previously, show a new image
        showRandomImage(i);
        lastTextStates[i] = true; // Update the state to red
      }
    } else {
      textColors[i] = color(0); // Change to black
      lastTextStates[i] = false; // Update the state to black
    }

    fill(textColors[i]);
    text(texts[i], currentX + textWidth(texts[i]) / 2, y);
    currentX += textWidth(texts[i]);
  }

  // Display the current images
  imageMode(CENTER);
  currentImages.forEach((img) => {
    if (img) {
      let imgWidth = img.img.width * (imageHeight / img.img.height); // Adjusted width to maintain aspect ratio
      let imgHeight = imageHeight; // Set image height

      // Draw the image
      image(img.img, img.x, img.y, imgWidth, imgHeight);
    }
  });

  // Show description if mouse is over an image
  for (let i = currentImages.length - 1; i >= 0; i--) {
    let img = currentImages[i];
    let imgWidth = img.img.width * (imageHeight / img.img.height);
    let imgHeight = imageHeight;

    if (
      mouseX > img.x - imgWidth / 2 &&
      mouseX < img.x + imgWidth / 2 &&
      mouseY > img.y - imgHeight / 2 &&
      mouseY < img.y + imgHeight / 2
    ) {
      showDescription(img.description);
      break; // Show only one description at a time (top-most image)
    }
  }
}

// Function to show description text
function showDescription(description) {
  fill(255); // White background for description box
  rectMode(CORNER);
  let padding = 10;
  let textWidth = creditFont.textBounds(description, 0, 0, 15).w + 2 * padding; // Calculate text width including padding
  let textHeight = creditFont.textBounds(description, 0, 0, 15).h + 2 * padding; // Calculate text height including padding
  rect(mouseX + 15, mouseY - textHeight, textWidth, textHeight); // Draw background rectangle
  fill(0); // Set text color to black
  textSize(15);
  textAlign(LEFT, BOTTOM);
  textFont(creditFont);
  text(description, mouseX + 15 + padding, mouseY - padding); // Display description near mouse pointer
}

// This function is called whenever the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function isMouseOverText(x, y, textString) {
  // Check if the mouse is over the text
  let textX = x + textWidth(textString) / 2; // Adjust the x-coordinate for center alignment
  return (
    mouseX > x &&
    mouseX < x + textWidth(textString) &&
    mouseY > y - textSize() &&
    mouseY < y
  );
}

let lastImageCoordinates = []; // Track the last generated image coordinates

function showRandomImage(index) {
  let img;
  let availableImages;

  // Determine which era's images to use
  if (index === 0) {
    availableImages = images1960.filter(
      (image) => !currentImages.includes(image)
    );
  } else if (index === 1) {
    availableImages = images1980.filter(
      (image) => !currentImages.includes(image)
    );
  } else if (index === 2) {
    availableImages = images2000.filter(
      (image) => !currentImages.includes(image)
    );
  }

  // Select a random image from the available images
  img = random(availableImages);

  // If an image is selected, adjust its dimensions and position and add it to the currentImages array
  if (img) {
    let maxWidth = windowWidth / 3; // Maximum allowed width within the window section
    let maxHeight = windowHeight - textSize(); // Maximum allowed height below the text

    // Adjust image dimensions to maintain aspect ratio
    let aspectRatio = img.img.width / img.img.height;
    if (aspectRatio >= 1) {
      img.img.width = min(img.img.width, maxWidth); // Limit by width
      img.img.height = img.img.width / aspectRatio;
    } else {
      img.img.height = min(img.img.height, maxHeight); // Limit by height
      img.img.width = img.img.height * aspectRatio;
    }

    // Generate random coordinates within the specified area for each era
    let newCoordinates;
    let sectionWidth = windowWidth / 3; // Width of each section
    let sectionX = index * sectionWidth; // Starting x-coordinate of the section

    do {
      img.x = random(
        sectionX + img.img.width / 2,
        sectionX + sectionWidth - img.img.width / 2
      );
      img.y = random(img.img.height / 2, windowHeight - img.img.height / 2);
      newCoordinates = [img.x, img.y];
    } while (coordinatesMatchLast(newCoordinates)); // Ensure coordinates are not the same as last time

    // Add the new coordinates to the lastImageCoordinates array
    lastImageCoordinates[index] = newCoordinates;

    // Add the image to the currentImages array
    currentImages.push(img);

    // Set firstImageShown to true since an image has been shown
    firstImageShown = true;
  }
}

function coordinatesMatchLast(newCoordinates) {
  // Check if the new coordinates match the last generated coordinates
  for (let i = 0; i < lastImageCoordinates.length; i++) {
    if (
      lastImageCoordinates[i] &&
      lastImageCoordinates[i][0] === newCoordinates[0] &&
      lastImageCoordinates[i][1] === newCoordinates[1]
    ) {
      return true; // Coordinates match last generated coordinates
    }
  }
  return false; // Coordinates do not match last generated coordinates
}

// Mouse dragged event
function mouseDragged() {
  if (dragging && selectedImage) {
    selectedImage.x = mouseX - offsetX;
    selectedImage.y = mouseY - offsetY;
  }
}

// Mouse released event
function mouseReleased() {
  dragging = false;
  selectedImage = null;
}

function isMouseOverReset() {
  let resetX = windowWidth - 45;
  let resetY = 25;
  let resetWidth = textWidth("[Clear]");
  let resetHeight = 20; // Size of the text

  return (
    mouseX > resetX - resetWidth && // Correct the X-coordinate check
    mouseX < resetX &&
    mouseY > resetY &&
    mouseY < resetY + resetHeight
  );
}

function mousePressed() {
  // Check if the mouse is over the reset button
  if (isMouseOverReset()) {
    reset(); // Call the reset function
    return; // Exit the function to avoid selecting images
  }

  // Check if the mouse is over an image for dragging
  for (let i = currentImages.length - 1; i >= 0; i--) {
    let img = currentImages[i];
    let imgWidth = img.img.width * (imageHeight / img.img.height);
    let imgHeight = imageHeight;

    if (
      mouseX > img.x - imgWidth / 2 &&
      mouseX < img.x + imgWidth / 2 &&
      mouseY > img.y - imgHeight / 2 &&
      mouseY < img.y + imgHeight / 2
    ) {
      dragging = true;
      selectedImage = img;
      offsetX = mouseX - img.x;
      offsetY = mouseY - img.y;

      // Move the selected image to the end of the array
      currentImages.splice(i, 1);
      currentImages.push(selectedImage);
      break;
    }
  }
}

function reset() {
  // Clear the currentImages array to remove all displayed images
  currentImages = [];

  // Reset the firstImageShown variable
  firstImageShown = false;
}
