const button = document.getElementById("button");
const color = document.querySelector(".color");
const section = document.querySelector("section");


const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

button.addEventListener("click", (event) => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) hexColor += hex[getRandomNumber()];
  section.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

const getRandomNumber = () => {
  let random = Math.random();
  console.log(random);
  console.log(random * hex.length);
  console.log(Math.floor(random * hex.length));
  return Math.floor(Math.random() * hex.length);
};
