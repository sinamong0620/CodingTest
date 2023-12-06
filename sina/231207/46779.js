function solution(chicken) {
  var cupon = chicken;
  var service_chicken = 0;
  var remain_cupon = 0;
  var result = 0;

  while (cupon >= 1) {
    service_chicken = Math.floor(cupon / 10);
    remain_cupon += Math.floor(cupon % 10);
    cupon = service_chicken;
    result += cupon;
  }

  while (remain_cupon >= 10) {
    service_chicken = Math.floor(remain_cupon / 10);
    result += service_chicken;
    remain_cupon = Math.floor(remain_cupon % 10) + service_chicken;
  }

  return result;
}
