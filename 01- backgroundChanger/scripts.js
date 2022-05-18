const button = document.getElementById("button");
const color = document.querySelector(".color");
const section = document.querySelector("section");

const colors = ["blue", "yellow", "#34ed11", "rgba(122, 122, 122, 1)"];

button.addEventListener("click", (event) => {
  const randomNumber = getRandomNumber();
  section.style.backgroundColor = colors[randomNumber];
  console.log(color);
  color.innerText = colors[randomNumber];

});
9.9
9
const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
