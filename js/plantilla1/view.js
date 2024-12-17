const triangleMadrid = document.querySelector(".triangle__container__madrid");
const triangleAndorra = document.querySelector(".triangle__container__andorra");
const triangleAndorraVertical = document.querySelector(".triangle__andorra");
const returnImageContainer = document.querySelector(
  ".triangle__madrid--return"
);
const abogados = document.querySelector(".option__abogados");
const economistas = document.querySelector(".option__economistas");
// const abogadosLink = document.querySelector(".option__abogados--link");
// const economistasLink = document.querySelector(".option__economistas--link");

export function triangleMadridHover() {
  triangleAndorra.classList.remove("triangle__madrid--hover");
  triangleMadrid.classList.add("triangle__madrid--hover");
}

export function triangleAndorraHover() {
  triangleMadrid.classList.remove("triangle__madrid--hover");
  triangleAndorra.classList.add("triangle__madrid--hover");
}

export function minimizeTriangles() {
  triangleMadrid.classList.add("triangle__madrid--min");
  triangleAndorra.classList.add("triangle__andorra--min");
  triangleAndorraVertical.classList.add("triangle__andorra--vertical");
}

export function maximizeTriangles() {
  triangleMadrid.classList.remove("triangle__madrid--min");
  triangleAndorra.classList.remove("triangle__andorra--min");
  triangleAndorraVertical.classList.remove("triangle__andorra--vertical");
}

export function returnHover() {
  returnImageContainer.classList.add("triangle__madrid--return--hover");
}

export function returnNotHover() {
  returnImageContainer.classList.remove("triangle__madrid--return--hover");
}

export function abogadosHover() {
  economistas.classList.remove("option__economistas--hover");
  abogados.classList.remove("option__abogados--not-hover");

  abogados.classList.add("option__abogados--hover");
  economistas.classList.add("option__economistas--not-hover");
}

export function economistasHover() {
  abogados.classList.remove("option__abogados--hover");
  economistas.classList.remove("option__economistas--not-hover");

  economistas.classList.add("option__economistas--hover");
  abogados.classList.add("option__abogados--not-hover");
}

export function optionsClassHoverRemove() {
  abogados.classList.remove("option__abogados--hover");
  economistas.classList.remove("option__economistas--not-hover");

  economistas.classList.remove("option__economistas--hover");
  abogados.classList.remove("option__abogados--not-hover");
}
