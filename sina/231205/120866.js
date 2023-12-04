function solution(board) {
  let array = [];
  let a = 0;

  //있는 1 인덱스 모두 찾기
  for (let i in board) {
    const arrayIndex = board[i].reduce((arr, item, index) => {
      if (item === 1) {
        arr.push([Number(i), index]);
      }
      return arr;
    }, []);

    array.push(...arrayIndex);
  }

  //배열에 있는 인덱스 하나하나 1로 넣어주기
  for (let i of array) {
    const [x, y] = i;
    if (y < board.length - 1) {
      board[x][y + 1] = 1;
    }

    if (y - 1 >= 0) {
      board[x][y - 1] = 1;
    }

    if (x) {
      board[x - 1][y] = 1;
    }

    if (x != 0 && y - 1 >= 0) {
      board[x - 1][y - 1] = 1;
    }

    if (x != 0 && y < board.length - 1) {
      board[x - 1][y + 1] = 1;
    }

    if (x < board.length - 1) {
      board[x + 1][y] = 1;
    }

    if (x < board.length - 1 && y != 0) {
      board[x + 1][y - 1] = 1;
    }

    if (x < board.length - 1 && y < board.length - 1) {
      board[x + 1][y + 1] = 1;
    }
  }

  for (let i of board) {
    a += i.filter((x) => x !== 1).length;
  }

  return a;
}
