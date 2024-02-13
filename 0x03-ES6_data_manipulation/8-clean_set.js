export default function setFromArray(set, stri) {
  let x = '';
  for (const i of set) {
    if (i.startsWith(stri)) x += `${i.slice(stri.length)}-`;
  }
  return x.slice(0, -1);
}
