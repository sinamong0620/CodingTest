function solution(todo_list, finished) {
  return todo_list
    .map((x, i) => {
      if (!finished[i]) return x;
    })
    .filter((x) => x);
}
