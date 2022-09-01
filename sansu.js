//? number 에 1부터 20까지의 숫자들이 들어가 있다
//? 3개의 함수를 설정하여 그 안에 number의 임의의 숫자가 들어가게 만든다
//! 단! 같은 숫자는 3개의 함수에 중복되어 들어갈 수 없다
//? 평균을 구하는 작업을 진행해야 한다.
//? 3개의 함수의 숫자가 서로 같지 않을경우 나올수 있는 숫자를 배열로 정렬

const math = function (numbers, selectNumber) {
  const results = [];
  if (selectNumber === 1) return numbers.map((value) => [value]); 

  numbers.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); 
    const number = math(rest, selectNumber - 1); 
    const attached = number.map((numberset) => [fixed, ...numberset]);
    results.push(...attached);
  });

  return results;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const result = math(numbers, 3);
console.log(result);