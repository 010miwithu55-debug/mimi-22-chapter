const welcomeScreen = document.querySelector("#welcome-screen");
const roomScreen = document.querySelector("#room-screen");
const enterButton = document.querySelector("#enter-button");

enterButton.addEventListener("click", () => {
  welcomeScreen.hidden = true;
  roomScreen.hidden = false;
});
