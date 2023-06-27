function solution(s) {
  //array의 개수를 Return
  let array = [];
  let stringArray = s.split("");
  let number = 0;
  //s의 첫글자를 x로 가정
  let x = stringArray[0];

  for (let i = 0; i < stringArray.length; i++) {
    if (x === stringArray[i]) {
      number++;
    } else {
      number--;
    }

    //만일 Number가 0이 된다면
    if (number === 0) {
      const string = stringArray.slice(0, i + 1);
      array.push(string);
      x = stringArray[i + 1];
    }
  }

  //홀수일 경우에
  if (stringArray.length % 2) {
    array.push(stringArray.slice(stringArray.length - 1));
  }
  //홀수가 아니고 만일 aaaa인 경우에는 배열에 ["aaaa"]가 들어있어야하므로 추가시켜준다.
  else {
    if (number !== 0) {
      array.push(stringArray.slice(0, stringArray.length - 1));
    }
  }

  return array.length;
}
