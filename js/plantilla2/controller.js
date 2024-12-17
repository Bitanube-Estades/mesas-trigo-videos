import {
  calculateFooterHeight,
  detectTriangleSelected,
  recalculateTriangles, sloganHover,
  trianglesMax,
  // trianglesMin,
} from "./model.js";
import {
  containerAndorraHover,
  containerMadridHover,
  containerSeparatorHover, placeCursorVisitar,
  returnShowAndorra,
  returnShowMadrid,
  showAndorra,
  showMadrid,
} from "./view.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".main__container");
  const boxImageMadrid = document.querySelector(".element--madrid .box img");
  const boxTextMadrid = document.querySelector(
    ".element--madrid .box .box--text"
  );
  const boxImageAndorra = document.querySelector(".element--andorra .box img");
  const boxTextAndorra = document.querySelector(
    ".element--andorra .box .box--text"
  );
  const returnButton = document.querySelector("#return");
  const logoMadridVertical = document.querySelector("#box--madrid")
  const logoAndorraVertical = document.querySelector("#box--andorra")


  // Saber si estem a la página inicial
  let landingInitial = true;

  let triangleHover;

  // actualitzem l'alçada del footer pels càlculs dels triangles
  window.addEventListener("resize", () => {
    calculateFooterHeight();
    recalculateTriangles();
  });

  container.addEventListener("mouseleave", () => {
    containerSeparatorHover();
  });

  container.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Donem les mesures dels triangles grans o petits depenent en quin estat es troba la landing
    let triangles = trianglesMax;
    // let triangles = landingInitial ? trianglesMax : trianglesMin;

    triangleHover = detectTriangleSelected(
      mouseX,
      mouseY,
      triangles,
      landingInitial
    );

    if (landingInitial) {

      if ( !sloganHover() &&
        triangleHover === 1 ||
        boxImageMadrid.matches(":hover") ||
        boxTextMadrid.matches(":hover")
      ) {
        containerMadridHover();
        placeCursorVisitar(mouseX, mouseY);
      }
      else if ( !sloganHover() &&
        triangleHover === 2 ||
        boxImageAndorra.matches(":hover") ||
        boxTextAndorra.matches(":hover")
      ) {
        containerAndorraHover();
        placeCursorVisitar(mouseX, mouseY);
      }
      else containerSeparatorHover();
    }
  });

  // opció seleccionada a mostrar (madrid o andorra)
  let chosenOption;

  container.addEventListener("click", (e) => {
    e.stopPropagation();
    if (landingInitial) {
      if (
        triangleHover === 1 ||
        boxImageMadrid.matches(":hover") ||
        boxTextMadrid.matches(":hover")
      ) {
        landingInitial = false;
        showMadrid();
        chosenOption = "madrid";
      }
      if (
        triangleHover === 2 ||
        boxImageAndorra.matches(":hover") ||
        boxTextAndorra.matches(":hover")
      ) {
        landingInitial = false;
        showAndorra();
        chosenOption = "andorra";
      }
      setTimeout(containerSeparatorHover, 1000);
    }
  });

  returnButton.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!landingInitial) {
      if (chosenOption === "madrid") {
        showMadrid();
        returnShowMadrid();
        setTimeout(returnShowMadrid, 1000);
      } else {
        showAndorra();
        returnShowAndorra();
        setTimeout(returnShowAndorra, 1000);
      }
      chosenOption = undefined;
      containerSeparatorHover();
      landingInitial = true;
    }
  });

  logoMadridVertical.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!landingInitial) {
      if (chosenOption === "madrid") {
        showMadrid();
        returnShowMadrid();
        setTimeout(returnShowMadrid, 1000);
        chosenOption = undefined;
        containerSeparatorHover();
        landingInitial = true;
      }
    }
  });

  logoAndorraVertical.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!landingInitial) {
      if (chosenOption === "andorra") {
        showAndorra();
        returnShowAndorra();
        setTimeout(returnShowAndorra, 1000);
        chosenOption = undefined;
        containerSeparatorHover();
        landingInitial = true;
      }
    }
  });

});
