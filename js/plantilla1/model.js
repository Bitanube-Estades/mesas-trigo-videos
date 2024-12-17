const [triangleMadrid, triangleAndorra] =
  document.querySelectorAll(".triangle");

const footer = document.querySelector(".footer");

let footerHeight = footer.offsetHeight;

export function calculateFooterHeight() {
  footerHeight = footer.offsetHeight;
}

// Funció per calcular l'àrea d'un triangle donat tres punts
function calculateArea(p1, p2, p3) {
  return (
    Math.abs(
      p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)
    ) / 2
  );
}

// Funció que verifica si estém dintre de un triangle específic
function isMouseInTriangle(mouseX, mouseY, triangle) {
  const mousePoint = { x: mouseX, y: mouseY };

  const areaOriginal = calculateArea(triangle[0], triangle[1], triangle[2]);
  const area1 = calculateArea(mousePoint, triangle[0], triangle[1]);
  const area2 = calculateArea(mousePoint, triangle[1], triangle[2]);
  const area3 = calculateArea(mousePoint, triangle[2], triangle[0]);

  // Si la suma de las áreas de los sub-triángulos es igual al área original, el mouse está dentro
  return Math.abs(area1 + area2 + area3 - areaOriginal) < 0.01; // Ajuste de precisión
}

// Funció que detecta sobre quin triangle estem
export function detectTriangleSelected(
  mouseX,
  mouseY,
  triangles,
  landingInitial
) {
  let hoveredTriangleIndex = null;
  triangles.forEach((triangle, index) => {
    if (isMouseInTriangle(mouseX, mouseY, triangle)) {
      hoveredTriangleIndex = index + 1;
    }
  });

  // per saber si estem sobre l'element vertical de l'esquerra
  if (!landingInitial) {
    if (triangleAndorra.matches(":hover")) hoveredTriangleIndex = 2;
  }

  return hoveredTriangleIndex;
}

// Coordenades dels triangles quan son grans i quan son petits
export const trianglesMax = [
  /* MADRID */ [
    { x: 0, y: 0 },
    { x: window.innerWidth, y: 0 },
    { x: window.innerWidth, y: window.innerHeight - footerHeight },
  ],
  /* ANDORRA */ [
    { x: 0, y: 0 },
    { x: window.innerWidth, y: window.innerHeight - footerHeight },
    { x: 0, y: window.innerHeight },
  ]
];

export let trianglesMin = [
  /* MADRID */ [
    { x: window.innerWidth * 0.85, y: 0 },
    { x: window.innerWidth, y: 0 },
    { x: window.innerWidth, y: (window.innerHeight - footerHeight) * 0.25 },
  ]
];

// per actualitzar les coordenades del triangle quan es canvia de tamany
export function recalculateTrianglesMin () {
  trianglesMin = [
    /* MADRID */ [
      { x: window.innerWidth * 0.85, y: 0 },
      { x: window.innerWidth, y: 0 },
      { x: window.innerWidth, y: (window.innerHeight - footerHeight) * 0.25 },
    ]
  ];
}

// Calcula la alçada de la divisió de les dues opcions advocats/economistes
export function calculateOptionsSeparatorHeight(option) {
  if (option === "abogados") {
    return (window.innerHeight - footerHeight) * 0.8;
  } else if (option === "economistas") {
    return (window.innerHeight - footerHeight) * 0.2;
  } else {
    return (window.innerHeight - footerHeight) / 2;
  }
}
