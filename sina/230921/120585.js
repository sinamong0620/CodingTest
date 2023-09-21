function solution(array, height) {
  return array.filter((student) => student > height).length;
}
