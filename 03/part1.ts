import { input } from "./input.ts";

const LOWERCASE_OFFSET = 96;
const UPPERCASE_OFFSET = 38;

let totalPriority = 0;

for (const pack of input) {
  const leftItems: Set<string> = new Set<string>();
  for (let i = 0; i < pack.length; i ++) {
    if (i < pack.length / 2) {
      leftItems.add(pack[i]);
    } else if (leftItems.has(pack[i])) {
      let value = pack.charCodeAt(i);
      value = value >= 97 ? value - LOWERCASE_OFFSET : value - UPPERCASE_OFFSET;
      totalPriority += value;
      break;
    }
  }
}

console.log(totalPriority);
