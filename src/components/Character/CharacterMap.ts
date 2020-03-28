type CharacterMap = {
  [index: string]: {
    [index: number]: boolean[];
  };
};

const characterMap: CharacterMap = {
  // LETTERS
  A: {
    0: [false, true, true, false],
    1: [true, false, false, true],
    2: [true, true, true, true],
    3: [true, false, false, true],
    4: [true, false, false, true]
  },
  B: {
    0: [true, true, true, false],
    1: [true, false, false, true],
    2: [true, true, true, false],
    3: [true, false, false, true],
    4: [true, true, true, false]
  },
  C: {
    0: [false, true, true, false],
    1: [true, false, false, true],
    2: [true, false, false, false],
    3: [true, false, false, true],
    4: [false, true, true, false]
  },
  D: {
    0: [true, true, true, false],
    1: [true, false, false, true],
    2: [true, false, false, true],
    3: [true, false, false, true],
    4: [true, true, true, false]
  },
  E: {
    0: [true, true, true],
    1: [true, false, false],
    2: [true, true, true],
    3: [true, false, false],
    4: [true, true, true]
  },
  F: {
    0: [true, true, true],
    1: [true, false, false],
    2: [true, true, true],
    3: [true, false, false],
    4: [true, false, false]
  },
  G: {
    0: [false, true, true, true],
    1: [true, false, false, false],
    2: [true, false, true, true],
    3: [true, false, false, true],
    4: [false, true, true, false]
  },
  H: {
    0: [true, false, false, true],
    1: [true, false, false, true],
    2: [true, true, true, true],
    3: [true, false, false, true],
    4: [true, false, false, true]
  },
  I: {
    0: [true],
    1: [true],
    2: [true],
    3: [true],
    4: [true]
  },
  J: {
    0: [false, false, false, true],
    1: [false, false, false, true],
    2: [false, false, false, true],
    3: [true, false, false, true],
    4: [false, true, true, false]
  },
  K: {
    0: [true, false, false, true],
    1: [true, false, true, false],
    2: [true, true, false, false],
    3: [true, false, true, false],
    4: [true, false, false, true]
  },
  L: {
    0: [true, false, false],
    1: [true, false, false],
    2: [true, false, false],
    3: [true, false, false],
    4: [true, true, true]
  },
  M: {
    0: [true, false, false, false, true],
    1: [true, true, false, true, true],
    2: [true, false, true, false, true],
    3: [true, false, false, false, true],
    4: [true, false, false, false, true]
  },
  N: {
    0: [true, false, false, false, true],
    1: [true, true, false, false, true],
    2: [true, false, true, false, true],
    3: [true, false, false, true, true],
    4: [true, false, false, false, true]
  },
  O: {
    0: [false, true, true, true, false],
    1: [true, false, false, false, true],
    2: [true, false, false, false, true],
    3: [true, false, false, false, true],
    4: [false, true, true, true, false]
  },
  P: {
    0: [true, true, true, false],
    1: [true, false, false, true],
    2: [true, true, true, false],
    3: [true, false, false, false],
    4: [true, false, false, false]
  },
  Q: {
    0: [false, true, true, false],
    1: [true, false, false, true],
    2: [true, false, false, true],
    3: [true, false, false, true],
    4: [false, true, true, false],
    5: [false, false, false, true]
  },
  R: {
    0: [true, true, true, false],
    1: [true, false, false, true],
    2: [true, true, true, false],
    3: [true, false, true, false],
    4: [true, false, false, true]
  },
  S: {
    0: [false, true, true, true],
    1: [true, false, false, false],
    2: [false, true, true, false],
    3: [false, false, false, true],
    4: [true, true, true, false]
  },
  T: {
    0: [true, true, true],
    1: [false, true, false],
    2: [false, true, false],
    3: [false, true, false],
    4: [false, true, false]
  },
  U: {
    0: [true, false, false, true],
    1: [true, false, false, true],
    2: [true, false, false, true],
    3: [true, false, false, true],
    4: [false, true, true, false]
  },
  V: {
    0: [true, false, false, false, true],
    1: [true, false, false, false, true],
    2: [false, true, false, true, false],
    3: [false, true, false, true, false],
    4: [false, false, true, false, false]
  },
  W: {
    0: [true, false, false, false, true],
    1: [true, false, false, false, true],
    2: [true, false, true, false, true],
    3: [true, false, true, false, true],
    4: [false, true, false, true, false]
  },
  X: {
    0: [true, false, false, false, true],
    1: [false, true, false, true, false],
    2: [false, false, true, false, false],
    3: [false, true, false, true, false],
    4: [true, false, false, false, true]
  },
  Y: {
    0: [true, false, false, false, true],
    1: [false, true, false, true, false],
    2: [false, false, true, false, false],
    3: [false, false, true, false, false],
    4: [false, false, true, false, false]
  },
  Z: {
    0: [true, true, true, true, true],
    1: [false, false, false, true, false],
    2: [false, false, true, false, false],
    3: [false, true, false, false, false],
    4: [true, true, true, true, true]
  },
  // NUMBERS
  '0': {
    0: [false, true, true, false],
    1: [true, false, false, true],
    2: [true, false, false, true],
    3: [true, false, false, true],
    4: [false, true, true, false]
  },
  '1': {
    0: [true, true, false],
    1: [false, true, false],
    2: [false, true, false],
    3: [false, true, false],
    4: [true, true, true]
  },
  '2': {
    0: [true, true, true, false],
    1: [false, false, false, true],
    2: [false, true, true, false],
    3: [true, false, false, false],
    4: [true, true, true, true]
  },
  '3': {
    0: [true, true, true, false],
    1: [false, false, false, true],
    2: [false, true, true, false],
    3: [false, false, false, true],
    4: [true, true, true, false]
  },
  '4': {
    0: [true, false, true, false],
    1: [true, false, true, false],
    2: [true, true, true, true],
    3: [false, false, true, false],
    4: [false, false, true, false]
  },
  '5': {
    0: [true, true, true, true],
    1: [true, false, false, false],
    2: [true, true, true, false],
    3: [false, false, false, true],
    4: [true, true, true, false]
  },
  '6': {
    0: [false, true, true, false],
    1: [true, false, false, false],
    2: [true, true, true, false],
    3: [true, false, false, true],
    4: [false, true, true, false]
  },
  '7': {
    0: [true, true, true, true],
    1: [false, false, false, true],
    2: [false, false, true, false],
    3: [false, true, false, false],
    4: [false, true, false, false]
  },
  '8': {
    0: [false, true, true, false],
    1: [true, false, false, true],
    2: [false, true, true, false],
    3: [true, false, false, true],
    4: [false, true, true, false]
  },
  '9': {
    0: [false, true, true, false],
    1: [true, false, false, true],
    2: [false, true, true, true],
    3: [false, false, false, true],
    4: [false, true, true, false]
  },
  // OTHER
  ' ': {
    0: [false, false, false]
  },
  '.': {
    0: [false],
    1: [false],
    2: [false],
    3: [false],
    4: [true]
  },
  ',': {
    0: [false, false],
    1: [false, false],
    2: [false, false],
    3: [false, false],
    4: [false, true],
    5: [true, false]
  },
  '!': {
    0: [true],
    1: [true],
    2: [true],
    3: [false],
    4: [true]
  },
  '?': {
    0: [true, true, false],
    1: [false, false, true],
    2: [false, true, false],
    3: [false, false, false],
    4: [false, true, false]
  },
  '/': {
    0: [false, false, false, false, true],
    1: [false, false, false, true, false],
    2: [false, false, true, false, false],
    3: [false, true, false, false, false],
    4: [true, false, false, false, false]
  },
  ':': {
    0: [false],
    1: [true],
    2: [false],
    3: [false],
    4: [true]
  },
  ';': {
    0: [false, false],
    1: [false, true],
    2: [false, false],
    3: [false, false],
    4: [false, true],
    5: [true, false]
  },
  '-': {
    0: [false, false],
    1: [false, false],
    2: [true, true],
    3: [false, false],
    4: [false, false]
  },
  _: {
    0: [false, false, false],
    1: [false, false, false],
    2: [false, false, false],
    3: [false, false, false],
    4: [true, true, true]
  }
};

export default characterMap;
