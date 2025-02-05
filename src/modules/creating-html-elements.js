export function createParagraph(text){
  const p = document.createElement("p");
  p.textContent = text;
  return p;
}

export function createHeading2(text){
  const h2 = document.createElement("h2");
  h2.textContent = text;
  return h2;
}

export function createDivWithClass(className){
  const div = document.createElement("div");
  div.className = className;
  return div;
}