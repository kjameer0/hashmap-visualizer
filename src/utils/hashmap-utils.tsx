export function generateRandomHashMap(size = 10) {
  const res = Array(size);
  for (let i = 0; i < size; i++) {
    res[i] = [
      String.fromCharCode(Math.floor(Math.random() * 26 + 97)),
      String(Math.floor(Math.random() * 2 * size + 1)),
    ];
  }
  const hashmap = new Map(res);
  return hashmap;
}
