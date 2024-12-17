const [containerMadrid, containerAndorra, containerSeparator] =
  document.querySelectorAll(".container");
const footer = document.querySelector(".footer");
const sloganDiv = document.querySelector("#slogan");

export let footerHeight = footer.offsetHeight;

// calcular l'alçada del footer per poder calcular bé les coordenades dels vértices dels triangles
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

  return hoveredTriangleIndex;
}

// Coordenades dels triangles quan son grans i quan son petits
export let trianglesMax = [
  /* MADRID */ [
    { x: window.innerWidth * 0.15, y: 0 },
    { x: window.innerWidth, y: 0 },
    { x: window.innerWidth, y: window.innerHeight * 0.85 - footerHeight },
  ],
  /* ANDORRA */ [
    { x: 0, y: window.innerHeight * 0.15 },
    { x: window.innerWidth * 0.85, y: window.innerHeight - footerHeight },
    { x: 0, y: window.innerHeight - footerHeight },
  ],
];

// export let trianglesMin = [
//   /* MADRID */ [
//     { x: window.innerWidth * 0.85, y: 0 },
//     { x: window.innerWidth, y: 0 },
//     { x: window.innerWidth, y: (window.innerHeight - footerHeight) * 0.25 },
//   ]
// ];

// per actualitzar les coordenades del triangle quan es canvia de tamany
export function recalculateTriangles() {
  trianglesMax = [
    /* MADRID */ [
      { x: window.innerWidth * 0.15, y: 0 },
      { x: window.innerWidth, y: 0 },
      { x: window.innerWidth, y: window.innerHeight * 0.85 - footerHeight },
    ],
    /* ANDORRA */ [
      { x: 0, y: window.innerHeight * 0.15 },
      { x: window.innerWidth * 0.85, y: window.innerHeight - footerHeight },
      { x: 0, y: window.innerHeight - footerHeight },
    ],
  ];
}

export function sloganHover() {
  return sloganDiv.matches(":hover");
}


