export function createParagraph(text){
  const p = document.createElement("p");
  p.textContent = text;
  return p;
}

export function createHeading1(text){
  const h1 = document.createElement("h1");
  h1.textContent = text;
  return h1;
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

export function createImg(src, alt, className){
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.className = className;
  return img;
}