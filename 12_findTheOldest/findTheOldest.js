const findTheOldest = function(people) {
    let oldest = people[0];

    people.forEach(person => {
        let personAge = getAge(person);
        let oldestAge = getAge(oldest);

        if (personAge > oldestAge)
            oldest = person;
    });

    return oldest;
};

function getAge(person)
{
    if (person.yearOfDeath == undefined)
        return new Date().getFullYear() - person.yearOfBirth;
    else
        return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
