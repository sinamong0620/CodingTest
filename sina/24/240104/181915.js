function solution(my_string, index_list) {
  var answer = "";
  answer = index_list.reduce((acc, cur) => {
    acc += my_string[cur];
    return acc;
  }, []);
  return answer;
}
