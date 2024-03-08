const findTheOldest = function(people) {

    function findAge(birth, death) {
        return death - birth;
    };

    for(let i = 0; i < people.length; i++) {

        let age = 0;

        if ("yearOfDeath" in people[i]) {
            age = findAge(people[i].yearOfBirth, people[i].yearOfDeath);
        } else {
            const d = new Date().getFullYear();
            age = d - people[i].yearOfBirth;
        };

        people[i].age = age;

    }
    
    const order = people.sort((a, b) => a.age > b.age ? -1 : 1);

    return people[0];

};

// Do not edit below this line
module.exports = findTheOldest;
