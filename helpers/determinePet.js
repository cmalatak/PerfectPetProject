import configureCallToActionButton from "../configureQuizComponents.js";

const petImageContainer = document.getElementById("pet-image-container");

const callToActionButton = document.createElement("button");
configureCallToActionButton(callToActionButton);

const createPetImgElement = (imgSrc, altText) => {
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", imgSrc);
  imgEl.setAttribute("alt", altText);
  imgEl.setAttribute("class", "pet-img");
  return imgEl;
};

const petData = {
  dog: {
    img: createPetImgElement("DogImg.png", "Dog Image"),
    heading: "You got...",
    animal: "Dog!",
    text: `Dogs like to have fun, and you seem like you're fun!`
  },
  cat: {
    img: createPetImgElement("CatImg.png", "Cat Image"),
    heading: "You got...",
    animal: "Cat!",
    text: `Cats don't like doing much, and you seem like you don't do much either!`
  },
  fish: {
    img: createPetImgElement("FishImg.png", "Fish Image"),
    heading: "You got...",
    animal: "Fish!",
    text: `You seem pretty lazy. Good thing fishes are the easiest animal to keep alive!`
  },
  pika: {
    img: createPetImgElement("PikaImg.png", "Pikachu Image"),
    heading: "You got...",
    animal: "Pikachu!",
    text: `This Pikachu will keep you company, and keep you in line when you're doin too much!`
  }
};

const determinePetBasedOnScore = cumulativeScore => {
  console.log("Your perfect pet is a...");
  let perfectPet;
  if (cumulativeScore <= 3) {
    perfectPet = "fish";
  } else if (cumulativeScore <= 7) {
    perfectPet = "cat";
  } else if (cumulativeScore <= 11) {
    perfectPet = "dog";
  } else {
    perfectPet = "pika";
  }
  const petHeading = document.createElement("h2");
  petHeading.className = "pet-heading";
  petHeading.innerHTML = petData[perfectPet].heading;

  const petAnimal = document.createElement("h2");
  petAnimal.className = "pet-animal";
  petAnimal.innerHTML = petData[perfectPet].animal;

  const petText = document.createElement("p");
  petText.className = "pet-text";
  petText.innerHTML = petData[perfectPet].text;

  petImageContainer.innerHTML = "";
  petImageContainer.append(petHeading);
  petImageContainer.append(petAnimal);
  petImageContainer.append(petData[perfectPet].img);
  petImageContainer.append(petText);
  petImageContainer.appendChild(callToActionButton);
};

export default determinePetBasedOnScore;
