export function generatePin(word: string = "") {
  return word.slice(19) || "****  ****  ****  5454";
}

export function insertSpaces(w: string = "") {
  if (w.length === 4 || w.length === 10 || w.length === 16) {
    return w + "  ";
  }
  return w;
}

export function insertSlash(word: string = "02 / 23") {
  return word.match(/^\d{2}$/) ? word + " / " : word;
}