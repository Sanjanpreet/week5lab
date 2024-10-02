
//Challenge 1

const getCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

console.log(`The temperature is ${getCelsius(32)} \xB0C`);
// The temperature is 0 °C


//challenge 2
const minMax = (arr) => ({
    min: Math.min(...arr),
    max: Math.max(...arr)
  });
  
  console.log(minMax([1, 2, 3, 4, 5]));
  // { min: 1, max: 5 }



//challenge 3
  (function(length, width) {
    const area = length * width;
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`);
})(10, 5);

  
