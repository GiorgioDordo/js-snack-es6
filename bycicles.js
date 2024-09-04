// todo bycicles list
const bycicles = [
    {name: 'Bianchi', weight: 7},
    {name: 'Merida', weight: 34},
    {name: 'Giant', weight: 46},
    {name: 'Cube', weight: 10},
    {name: 'Scott', weight: 5},
    {name: 'Felt', weight: 1},
    {name: 'Specialized', weight: 20},
    {name: 'Trek', weight: 56},
]

// todo printing the least weighted bycicle using destructuring and template literal
const leastWeightBycicle = (bycicles) => {
    const leastWeight = bycicles.reduce((leastWeight, bycicle) => {
        return leastWeight.weight < bycicle.weight ? leastWeight : bycicle;
    });
    return `The least weighted bycicle is ${leastWeight.name} with a weight of ${leastWeight.weight} kg.`;
};

console.log(leastWeightBycicle(bycicles));

