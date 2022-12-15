import { input } from "./input.ts";

let currentLoad = 0;
let maxLoad = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "") {
    maxLoad = Math.max(maxLoad, currentLoad);
    currentLoad = 0;
  } else {
    currentLoad += Number(input[i])
  }
}

console.log(maxLoad);
