export default function getResponseFromAPI() {
  const prom = new Promise((resolve, reject) => {
    resolve('success');
    reject(new Error('something bad happened'));
  });
  return prom;
}
