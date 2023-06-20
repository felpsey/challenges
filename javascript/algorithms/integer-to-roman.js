/**
 * A function that returns the decimal value of a given roman numeral
 * 
 * @author Ethan Phelps
 * @version 20.06.23
 * @url https://leetcode.com/problems/roman-to-integer
 */

// Roman numeral to correpsonding base 10 value
const ROMAN_NUMERALS = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
]);

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    roman_numeral = s.toUpperCase()
    
    total = 0

    for (let i = 0; i < roman_numeral.length; i++)
    {
        next_char = roman_numeral[i + 1]

        switch (roman_numeral[i])
        {
            case "I":
                if (next_char == "V" || next_char == "X")
                {
                    total = total - 1

                    break;
                }
            case "X":
                if (next_char == "L" || next_char == "C")
                {
                    total = total - 10

                    break;
                }
            case "C":
                if (next_char == "D" || next_char == "M")
                {
                    total = total - 100

                    break;
                }
            default:
                total = total + ROMAN_NUMERALS.get(roman_numeral[i])
        }
    }

    return total
};