import { input } from "./input.ts";

type SelfMove = "X" | "Y" | "Z";
type OpponentMove = "A" | "B" | "C";

type Rules = {
  [key in SelfMove]: {
    value: number,
    against: {
      [key in OpponentMove]: number
    }
  }
}

const rules: Rules = {
  X: {
    value: 1,
    against: {
      A: 3,
      B: 0,
      C: 6,
    },
  },
  Y: {
    value: 2,
    against: {
      A: 6,
      B: 3,
      C: 0,
    },
  },
  Z: {
    value: 3,
    against: {
      A: 0,
      B: 6,
      C: 3
    },
  },
}

let total = 0;

for (const round of input) {
  const [opponent, self] = round.split(" ");
  total += rules[self as SelfMove].value;
  total += rules[self as SelfMove].against[opponent as OpponentMove];
}

console.log(total);
