const removeFromArray = function(array, ...deleteValues) {
    return array.filter(value => keepValue(value, deleteValues));
};

function keepValue(value, deleteValues)
{
    for (let delValue of deleteValues)
    {
        if (value === delValue)
            return false;
    }
    return true;
}

// Do not edit below this line
module.exports = removeFromArray;
