function solution(str_list, ex) {
  const a = str_list
    .map((str) => {
      if (!str.includes(ex)) return str;
    })
    .filter((str) => str !== undefined);

  return a.join("");
}
