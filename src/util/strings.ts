export function generateCardNum(word: string = '') {
  return word.slice(15)
    ? `XXXX XXXX XXXX ${word.slice(15)}`
    : 'XXXX XXXX XXXX XXXX';
}

export function insertSpaces(s: string, pre: string) {
  if (s.length > 19) return s.slice(0, 19);
  if (s.slice(-1) === ' ') return s.slice(0, -1);
  if (/\d{5}/.test(s)) return s.replace(/(\d{4})(\d{1})/, '$1 $2');
  if (/[^\d\s]/.test(s)) return s.replace(/[^\d\s]/g, '');
  return pre.slice(-1) !== ' ' &&
    (s.length === 4 || s.length === 9 || s.length === 14)
    ? s + ' '
    : s;
}

export function insertSlash(s: string, pre: string) {
  if (s.length > 5) return s.slice(0, 5);
  if (s.slice(-1) === '/') return s.slice(0, -1);
  if (/\d{3}/.test(s)) return s.replace(/(\d{2})(\d{1})/, '$1/$2');
  if (/[^\d/]/.test(s)) return s.replace(/[^\d/]/g, '');
  return pre.slice(-1) !== '/' && s.length === 2 ? s + '/' : s;
}

export function insertPin(s: string = '') {
  if (s.length > 4) return s.slice(0, 4);
  return /[^\d]/.test(s) ? s.replace(/[^\d]/g, '') : s;
}

export function isValidEmail(email: string) {
  let re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return re.test(email);
}

export function isValidName(s: string) {
  return /^\w{2,}\s\w{2,}$/.test(s);
}

export function isValidPhone(s: string) {
  return /^(070|080|090|081)\d{8}$/.test(s);
}
export function isValidCard(s: string) {
  return /^(\d{4}\s){3}\d{4}$/.test(s);
}
export function isValidPin(s: string) {
  return /^\d{4}$/.test(s);
}

export function isValidExDate(s: string) {
  return /^\d{2}\/\d{2}$/.test(s);
}

export function isStrongPassword(s: string) {
  return /(?=^.{6,}$)(?=.*\d)(?=.*[A-Z])(?=.*\W).*$/.test(s);
}
