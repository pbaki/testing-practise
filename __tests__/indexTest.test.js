function capitalize(str) {
  str = str.split("");
  str[0] = str[0].toUpperCase();
  return str.join("");
}

test("First letter capitalize", () => {
  expect(capitalize("qwe")).toBe("Qwe");
});

function reverseString(str) {
  str = str.split("");
  let reverse = [];
  while (str.length !== 0) {
    reverse.push(str[str.length - 1]);
    str.pop();
  }
  return reverse.join("");
}

test("reversed string", () => {
  expect(reverseString("qwe")).toBe("ewq");
});

let calculator = {
  add: (num1, num2) => {
    return num1 + num2;
  },
  substract: (num1, num2) => {
    return num1 - num2;
  },
  divide: (num1, num2) => {
    return num1 / num2;
  },
  multiply: (num1, num2) => {
    return num1 * num2;
  },
};

test("object calculator", () => {
  expect(calculator.add(5, 5)).toBe(10);
  expect(calculator.substract(5, 5)).toBe(0);
  expect(calculator.divide(5, 5)).toBe(1);
  expect(calculator.multiply(5, 5)).toBe(25);
});

function caesarCipher(str, shift) {
  let values = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    v: 20,
    x: 21,
    y: 22,
    z: 23,
  };
  str = str.toLowerCase().split("").reverse();
  let converted = [];
  while (str.length !== 0) {
    if (str[str.length - 1] == ",") {
      converted.push(str[str.length - 1]);
    } else {
      let tempshift = shift;
      for (letter in values) {
        let myLetterValue = values[str[str.length - 1]];
        if (myLetterValue + shift > 23) {
          myLetterValue = myLetterValue + shift - 24;
          tempshift = 0;
        }
        if (myLetterValue + tempshift == values[letter]) {
          converted.push(letter);
        }
      }
    }
    str.pop();
  }
  return converted.join("");
}

test("caesar", () => {
  expect(caesarCipher("abc,d", 1)).toBe("bcd,e");
  expect(caesarCipher("ABC", 1)).toBe("bcd");
  expect(caesarCipher("z", 1)).toBe("a");
  expect(caesarCipher("y", 3)).toBe("b");
});

function analyzeArray(arr) {
  let numbers = 0;
  arr.map((num) => (numbers += num));
  let avg = numbers / arr.length;
  return {
    average: avg,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

test("array analyzer", () => {
  expect(analyzeArray([5, 5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 2,
  });
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
