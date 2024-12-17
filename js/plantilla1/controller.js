import {
  calculateFooterHeight,
  calculateOptionsSeparatorHeight,
  detectTriangleSelected, recalculateTrianglesMin,
  trianglesMax,
  trianglesMin,
} from "./model.js";
import {
  abogadosHover,
  economistasHover,
  maximizeTriangles,
  minimizeTriangles,
  optionsClassHoverRemove,
  returnHover,
  returnNotHover,
  triangleAndorraHover,
  triangleMadridHover,
} from "./view.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const cardAndorra = document.querySelector("#item__andorra");
  const triangleAndorra = document.querySelector(".triangle__andorra");
  const triangleMadridReturn = document.querySelector(
    ".triangle__madrid--return"
  );

  // Saber si només es veuen els dos triangles grans
  let landingInitial = true;

  let triangleHover;
  let optionHover;

  // actualitzem l'alçada del footer pels càlculs dels triangles
  window.addEventListener("resize", () => {
    calculateFooterHeight();
    recalculateTrianglesMin();
  });

  container.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const optionsSeparator = calculateOptionsSeparatorHeight(optionHover);

    // Donem les mesures dels triangles grans o petits depenent en quin estat es troba la landing
    let triangles = landingInitial ? trianglesMax : trianglesMin;

    triangleHover = detectTriangleSelected(
      mouseX,
      mouseY,
      triangles,
      landingInitial
    );

    if (landingInitial) {
      if (triangleHover === 1) triangleMadridHover();
      if (triangleHover === 2) triangleAndorraHover();
    }

    // que el l'imatge del return torni al seu tamany normal quan no està hover
    returnNotHover();

    if (!landingInitial && !triangleHover) {
      if (mouseY < optionsSeparator) {
        abogadosHover();
        optionHover = "abogados";
      } else {
        economistasHover();
        optionHover = "economistas";
      }
    } else if (!landingInitial && triangleHover === 1) {
      returnHover();
      optionHover = undefined;
      optionsClassHoverRemove();
    }  else {
      optionHover = undefined;
      optionsClassHoverRemove();
    }
  });

  // tornar a la página d'inici al clickar al icono return
  triangleMadridReturn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!landingInitial && triangleHover === 1) {
      maximizeTriangles();
      landingInitial = true;
    }
  });

  // tornar a la página d'inici al clickar l'element vertical de mesas trigo
  triangleAndorra.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!landingInitial && triangleHover === 2) {
      maximizeTriangles();
      landingInitial = true;
    }
  });

  // que mostri les opcions al clickar sobre la card d'andorra
  cardAndorra.addEventListener("click", (e) => {
    e.stopPropagation();
    minimizeTriangles();
    landingInitial = false;
  });

});
