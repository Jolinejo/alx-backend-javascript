export default function setFromArray(set, arr) {
  for (const i of arr) if (!set.has(i)) return false;
  return true;
}
