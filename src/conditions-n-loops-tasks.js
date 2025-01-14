/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.y === king.y ||
    queen.x === king.x ||
    queen.x - Math.abs(king.y - queen.y) === king.x ||
    queen.x + Math.abs(king.y - queen.y) === king.x
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  const max = getMaxNumber(a, b, c);
  return (
    (max === a && b === c && b + c >= max) ||
    (max === b && a === c && a + c >= max) ||
    (max === c && a === b && a + b >= max)
  );
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let s = '';
  let n = Math.floor(num / 10);
  while (n > 0) {
    s += 'X';
    n -= 1;
  }
  switch (num % 10) {
    case 9:
      s += 'IX';
      break;
    case 8:
      s += 'VIII';
      break;
    case 7:
      s += 'VII';
      break;
    case 6:
      s += 'VI';
      break;
    case 5:
      s += 'V';
      break;
    case 4:
      s += 'IV';
      break;
    case 3:
      s += 'III';
      break;
    case 2:
      s += 'II';
      break;
    case 1:
      s += 'I';
      break;
    default:
  }
  return s;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let s = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        s += 'zero';
        break;
      case '1':
        s += 'one';
        break;
      case '2':
        s += 'two';
        break;
      case '3':
        s += 'three';
        break;
      case '4':
        s += 'four';
        break;
      case '5':
        s += 'five';
        break;
      case '6':
        s += 'six';
        break;
      case '7':
        s += 'seven';
        break;
      case '8':
        s += 'eight';
        break;
      case '9':
        s += 'nine';
        break;
      case '-':
        s += 'minus';
        break;
      case '.':
        s += 'point';
        break;
      case ',':
        s += 'point';
        break;
      default:
    }
    if (i !== numberStr.length - 1) s += ' ';
  }
  return s;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1)
    if (str[i] !== str[str.length - 1 - i]) return false;
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) if (str[i] === letter) return i;
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const s = String(num);
  for (let i = 0; i < s.length; i += 1) if (s[i] === String(digit)) return true;
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let left = 0;
  let right = 0;
  for (let i = 0; i < arr.length; i += 1) {
    for (let n = 0; n < i; n += 1) left += arr[n];
    for (let m = i + 1; m < arr.length; m += 1) right += arr[m];
    if (left === right) return i;
    left = 0;
    right = 0;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  let count = 1;
  let s = 0;
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) matrix[i][j] = 0;
  }

  function addItem(i, j) {
    if (matrix[i][j] === 0) {
      matrix[i][j] = count;
      count += 1;
    }
  }
  while (s <= size / 2) {
    for (let i = s, j = s; j < size - s; j += 1) addItem(i, j);
    for (let i = s, j = size - 1 - s; i < size - s; i += 1) addItem(i, j);
    for (let i = size - 1 - s, j = size - 1 - s; j >= s; j -= 1) addItem(i, j);
    for (let i = size - 1 - s, j = s; i >= s; i -= 1) addItem(i, j);
    s += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const rotated = matrix;
  let s = 0;
  const size = matrix.length - 1;

  while (s <= matrix.length / 2) {
    for (let i = s, j = s; j < size - s; j += 1) {
      [rotated[i][j], rotated[size - j][i]] = [
        rotated[size - j][i],
        rotated[i][j],
      ];
      [rotated[size - j][i], rotated[size - s][size - j]] = [
        rotated[size - s][size - j],
        rotated[size - j][i],
      ];
      [rotated[size - s][size - j], rotated[j][size - s]] = [
        rotated[j][size - s],
        rotated[size - s][size - j],
      ];
    }
    s += 1;
  }

  return rotated;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  let temp = [];
  let p;
  let indexP;
  function partition(array, low, high) {
    const linkarr = array;
    let j = 0;
    for (let i = low; i <= high; i += 1)
      if (array[i] < p) {
        temp[j] = array[i];
        j += 1;
      }
    for (let i = low; i <= high; i += 1)
      if (array[i] === p) {
        temp[j] = array[i];
        j += 1;
      }
    for (let i = low; i <= high; i += 1)
      if (array[i] > p) {
        temp[j] = array[i];
        j += 1;
      }
    j = 0;
    for (let i = low; i <= high; i += 1, j += 1) linkarr[i] = temp[j];
    temp = [];
    for (let i = low; i <= high; i += 1) if (array[i] === p) return i;
    return 0;
  }
  function quickSort(array, low, high) {
    if (low < high) {
      p = array[low + Math.floor((high - low) / 2)];
      if (high - low > 0) {
        indexP = partition(array, low, high);
        quickSort(array, low, indexP);
        quickSort(array, indexP + 1, high);
      }
    }
  }
  quickSort(arr, 0, arr.length - 1);
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let i = iterations;
  let countsame = 0;
  let even = '';
  let odd = '';
  let countStr = str;
  while (i > 0) {
    for (let j = 0; j < str.length; j += 1)
      if (j % 2 === 0) even += countStr[j];
      else odd += countStr[j];
    i -= 1;
    countsame += 1;
    countStr = even + odd;
    if (countStr === str) {
      if (countsame < iterations) {
        i = iterations % countsame;
      }
    }
    even = '';
    odd = '';
  }
  return countStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let str = '';
  const temp = [];
  const arr = Array.from(String(number));

  let min;
  let minIndex;

  let left;
  let right;
  let leftStr = '';
  let rightStr = '';

  function getAllBigger() {
    for (let i = arr.length - 1; i >= 0; i -= 1)
      for (let j = i - 1; j >= 0; j -= 1)
        if (arr[i] > arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          let tempStr = '';
          for (let k = 0; k < arr.length; k += 1) tempStr += arr[k];
          temp.push({
            index: j,
            number: Number(tempStr),
          });
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
  }
  function findMin() {
    min = Math.min(...temp.map((cur) => cur.number));
    for (let i = 0; i < temp.length; i += 1)
      if (min === temp[i].number) minIndex = temp[i].index;
  }
  function sortTail() {
    left = Array.from(String(min)).splice(0, minIndex + 1);
    right = Array.from(String(min)).splice(minIndex + 1);

    right = right.sort((a, b) => a - b);
    for (let i = 0; i < left.length; i += 1) leftStr += left[i];
    for (let i = 0; i < right.length; i += 1) rightStr += right[i];
    str = leftStr + rightStr;
  }

  getAllBigger();
  findMin();
  sortTail();
  return Number(str);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
