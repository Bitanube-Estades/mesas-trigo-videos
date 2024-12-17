const mainContainer = document.querySelector(".main__container");
const containerMadrid = document.querySelector(".container__madrid");
const containerAndorra = document.querySelector(".container__andorra");
const containerSeparator = document.querySelector(".container__separator");
const optionBoxMadrid = document.querySelector(
  "#option__container--madrid .option__box"
);
const optionBoxAndorra = document.querySelector(
    "#option__container--andorra .option__box"
);
const cursorVisitar = document.querySelector(".cursor-visitar");

export function containerMadridHover() {
  containerSeparator.classList.remove("hover-andorra");
  containerAndorra.classList.remove("hover");
  containerMadrid.classList.add("hover");
  containerSeparator.classList.add("hover-madrid");
  cursorVisitar.classList.add("cursor-hover");
}

export function containerAndorraHover() {
  containerSeparator.classList.remove("hover-madrid");
  containerMadrid.classList.remove("hover");
  containerAndorra.classList.add("hover");
  containerSeparator.classList.add("hover-andorra");
  cursorVisitar.classList.add("cursor-hover");

}

export function containerSeparatorHover() {
  containerAndorra.classList.remove("hover");
  containerMadrid.classList.remove("hover");
  containerSeparator.classList.remove("hover-andorra");
  containerSeparator.classList.remove("hover-madrid");
  cursorVisitar.classList.remove("cursor-hover");

}

export function minimizeTriangles() {
  containerMadrid.classList.add("container__madrid--min");
  containerAndorra.classList.add("container__andorra--min");
}

export function maximizeTriangles() {
  containerMadrid.classList.remove("container__madrid--min");
  containerAndorra.classList.remove("container__andorra--min");
}

export function showMadrid() {
  mainContainer.classList.toggle("show__madrid");
  setTimeout(() => {
    optionBoxMadrid.style.width = `calc(100% - ${containerSeparator.offsetWidth}px`;
  }, 1100);
}

export function returnShowMadrid() {
  mainContainer.classList.toggle("return-show--madrid");
}

export function showAndorra() {
  mainContainer.classList.toggle("show__andorra");
  setTimeout(() => {
    optionBoxAndorra.style.width = `calc(100% - ${containerSeparator.offsetWidth}px`;
  }, 1100);
}

export function returnShowAndorra() {
  mainContainer.classList.toggle("return-show--andorra");
}

// ------------------    Prova imatge cursor  ----------------------
export function placeCursorVisitar (posX, posY) {
  cursorVisitar.style.top = `${posY}px`;
  cursorVisitar.style.left = `${posX}px`;
}
