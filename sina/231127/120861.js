function solution(keyinput, board) {
  const key = {
    left: [-1, 0],
    right: [1, 0],
    up: [0, 1],
    down: [0, -1],
  };
  const initial = [0, 0];

  for (let i of keyinput) {
    const [x, y] = key[i];

    if (
      initial[0] + x <= Math.floor(board[0] / 2) &&
      initial[0] + x >= Math.floor(board[0] / 2) * -1
    ) {
      initial[0] += x;
    }

    if (
      initial[1] + y <= Math.floor(board[1] / 2) &&
      initial[1] + y >= Math.floor(board[1] / 2) * -1
    ) {
      initial[1] += y;
    }
  }

  return initial;
}
