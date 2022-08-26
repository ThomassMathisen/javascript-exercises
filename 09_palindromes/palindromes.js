const palindromes = function (str) {
    strProsessed = str.toLowerCase().replace(/[^a-z]/g, "");
    return (
        strProsessed.split('').reverse().join('') == strProsessed
    );
};

// Do not edit below this line
module.exports = palindromes;

