import { input } from "./input.ts";

type Move = "A" | "B" | "C";
type Outcome = "X" | "Y" | "Z";

type Rules = {
  [key in Move]: {
    value: number,
    outcomes: {
      [key in Outcome]: Move
    }
  }
}

type OutcomeValues = {
  [key in Outcome]: number
}

const rules: Rules = {
  A: {
    value: 1,
    outcomes: {
      X: "C",
      Y: "A",
      Z: "B",
    }
  },
  B: {
    value: 2,
    outcomes: {
      X: "A",
      Y: "B",
      Z: "C",
    }
  },
  C: {
    value: 3,
    outcomes: {
      X: "B",
      Y: "C",
      Z: "A",
    }
  },
}

const outcomeValue: OutcomeValues = {
  "X": 0,
  "Y": 3,
  "Z": 6,
}

let total = 0;

for (const round of input) {
  const [opponent, result] = round.split(" ");
  const myMove = rules[opponent as Move].outcomes[result as Outcome];
  total += rules[myMove].value;
  total += outcomeValue[result as Outcome];
}

console.log(total);
