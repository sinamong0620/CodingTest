function solution(k, score) {
  //명예의 전당 배열
  let hall_of_fame = [];
  //최하위 점수 배열
  var lowest_rank = [];

  for (let i = 0; i < score.length; i++) {
    hall_of_fame.push(score[i]);

    //if문으로 크기 비교를 해서 최댓값만 hall_of_fame에 넣기
    hall_of_fame.sort(function (a, b) {
      return b - a;
    });

    // 크기를 벗어나면 무조건 Pop
    if (hall_of_fame.length > k) {
      hall_of_fame.pop();
    }

    //hall_of_fame의 맨 마지막 수를 lowest_rank에 넣기
    lowest_rank.push(hall_of_fame[hall_of_fame.length - 1]);
  }

  return lowest_rank;
}
