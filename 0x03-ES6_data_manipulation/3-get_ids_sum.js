export default function getStudentIdsSum(listi) {
  if (!Array.isArray(listi)) return 0;
  const sum = listi.reduce(
    (accumulator, current) => accumulator + current.id, 0,
  );
  return sum;
}
