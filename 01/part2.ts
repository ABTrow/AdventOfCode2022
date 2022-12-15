import { input } from "./input.ts";

let loads: number[] = [];
let currentLoad = 0

for (let i = 0; i < input.length; i++) {
  if (input[i] === "") {
    loads.push(currentLoad);
    currentLoad = 0;
  } else {
    currentLoad += Number(input[i])
  }
}

loads.sort((a, b) => b - a)

console.log(loads[0] + loads[1] + loads[2]);
