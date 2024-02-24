const repeatString = function(inputString, timesRepeated)
{
    let finalString = "";

    for (let i = 0; i < timesRepeated; ++i)
    {
        finalString += inputString;
    }

    if (timesRepeated < 0)
        return "ERROR";

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
