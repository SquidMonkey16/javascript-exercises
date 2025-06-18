const palindromes = function (string) {

    string = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    console.log(string);

    for (i = 0; i <= string.length / 2; i++)
    {
        if (string.at(i) !== string.at(string.length - 1 - i))
            return false;
    }
    
    return true;
};

// Do not edit below this line
module.exports = palindromes;
