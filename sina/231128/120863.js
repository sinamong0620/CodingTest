function solution(polynomial) {
  const a = polynomial.replaceAll(" ", "").split("+");

  let b = 0;
  let c = 0;

  const x = a.filter((x) => x.includes("x"));
  const num = a.filter((x) => !isNaN(Number(x)));

  for (let i of x) {
    const number = i.split("x");
    console.log(number);
    const real = number[0] !== "" ? Number(number[0]) : 1;
    b += real;
  }

  for (let i of num) {
    c += Number(i);
  }

  if (c === 0) {
    return `${b === 1 ? "" : b}x`;
  } else if (b === 0) {
    return `${c}`;
  } else {
    return `${b === 1 ? "" : b}x + ${c}`;
  }
}
