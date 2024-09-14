import "./styles/index.css";

const button = document.querySelector("#button") as HTMLButtonElement;

button.onclick = (e) => {
  e.preventDefault();
  alert("Hollaa!!! Typescript is also Working");
};
