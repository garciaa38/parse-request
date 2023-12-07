function firstStep(input) {
  return input.split('&');
}

function secondStep(input) {
  return input.map((keyValPair) => keyValPair.split('='))
}

function thirdStep(input) {
  return input.map(([key, value]) => [key, value.replace(/\+/g, " ")])
}

function fourthStep(input) {
  return input.map(([key, value]) => [key, decodeURIComponent(value)])
}

function fifthStep(input) {
  return input.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {})
}

function parseBody(str) {

  let first = firstStep(str);
  let second = secondStep(first)
  let third = thirdStep(second);
  let fourth = fourthStep(third)
  return fifthStep(fourth);
}

let string = "username=azure+green&password=password%21"
console.log(firstStep(string))

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
